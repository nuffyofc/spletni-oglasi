import json
import re
import pandas as pd
import time
from playwright.sync_api import sync_playwright
from bs4 import BeautifulSoup


def extract_components(text):
    components = {"CPU": None, "GPU": None, "RAM": None, "SSD/HDD": None}
    text_upper = text.upper()

    # CPU - comprehensive patterns
    cpu_patterns = [
        r"RYZEN\s?[3579]\s?\d{4}[X]?",
        r"I[3579]\s*\d{4,5}[KkFf]?",
        r"CORE\s?[3579]\s*\d+",
        r"PENTIUM\s*[A-Z]?\d+",
        r"CELERON\s*\d+",
        r"RYZEN\s?5\s?5500",
        r"RYZEN\s?7\s?5800X",
        r"RYZEN\s?9\s?5900X",
    ]
    for pattern in cpu_patterns:
        match = re.search(pattern, text_upper)
        if match:
            components["CPU"] = match.group(0)
            break

    # GPU - comprehensive patterns
    gpu_patterns = [
        r"RTX\s?\d{4}[Ti]?",
        r"GTX\s?\d{4}[Ti]?",
        r"RX\s?\d{3,4}[XT]?",
        r"ARC\s?[A-Z]?\d+",
        r"RX\s?6600\s?XT",
        r"RX\s?6700\s?XT",
        r"RX\s?7900",
    ]
    for pattern in gpu_patterns:
        match = re.search(pattern, text_upper)
        if match:
            components["GPU"] = match.group(0)
            break

    # RAM
    ram_patterns = [
        r"\d+\s?GB\s?DDR\d+",
        r"\d+\s?GB\s?RAM",
        r"\d+GB\s?DDR4",
        r"\d+GB\s?DDR5",
    ]
    for pattern in ram_patterns:
        match = re.search(pattern, text_upper)
        if match:
            components["RAM"] = match.group(0)
            break

    # SSD/HDD
    ssd_patterns = [
        r"\d+\s?GB\s?(SSD|NVME|NVMe|M\.2)",
        r"\d+\s?TB\s?HDD",
        r"\d+\s?GB\s?HDD",
        r"\d+GB\s?SSD",
    ]
    for pattern in ssd_patterns:
        match = re.search(pattern, text_upper)
        if match:
            components["SSD/HDD"] = match.group(0)
            break

    return components


def scrape_list_page(page):
    html = page.content()
    soup = BeautifulSoup(html, "html.parser")

    if soup.title and "captcha" in soup.title.string.lower():
        return []

    ads = soup.select("article")
    if not ads:
        ads = soup.select("[class*=entity]")

    links = []
    for ad in ads:
        try:
            title_tag = ad.select_one("a")
            if not title_tag:
                continue
            title = title_tag.get_text(strip=True)
            if not title or len(title) < 5:
                continue
            href = title_tag.get("href", "")
            if href and not href.startswith("http"):
                href = "https://www.bolha.com" + href

            price_tag = ad.select_one("[class*=price]")
            price_text = price_tag.get_text(strip=True) if price_tag else "0"
            price_match = re.search(
                r"[\d.]+", price_text.replace(".", "").replace(",", ".")
            )
            price = float(price_match.group()) if price_match else 0

            if price > 0:
                links.append({"title": title, "price": price, "link": href})
        except:
            continue
    return links


def scrape_detail_page(page, url):
    try:
        page.goto(url, wait_until="domcontentloaded", timeout=15000)
        page.wait_for_load_state("networkidle", timeout=10000)
        html = page.content()
        soup = BeautifulSoup(html, "html.parser")

        # Get full description text
        desc_text = ""

        # Try different selectors for description
        desc_selectors = [
            ".ClassifiedDetail-description",
            ".description",
            "[class*=description]",
            ".entity-description",
            "div[class*=Detail]",
        ]

        for sel in desc_selectors:
            desc = soup.select_one(sel)
            if desc:
                desc_text = desc.get_text(separator=" ", strip=True)
                if len(desc_text) > 50:
                    break

        # If no description found, get all text from main content
        if not desc_text or len(desc_text) < 50:
            main = (
                soup.select_one("main")
                or soup.select_one(".content")
                or soup.select_one("[class*=content]")
            )
            if main:
                desc_text = main.get_text(separator=" ", strip=True)

        return desc_text
    except Exception as e:
        return ""


all_data = []
base_url = "https://www.bolha.com/namizni-racunalniki?condition[used]=1"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    context = browser.new_context()

    for page_num in range(1, 11):
        url = base_url if page_num == 1 else f"{base_url}&page={page_num}"
        print(f"Scrapam stran {page_num}...")

        page = context.new_page()

        try:
            page.goto(url, wait_until="domcontentloaded", timeout=30000)
        except:
            print("  Napaka pri nalaganju")
            page.close()
            continue

        page_title = page.title() or ""
        if "captcha" in page_title.lower():
            print("  CAPTCHA! Rešite jo ročno...")
            time.sleep(15)

        try:
            page.wait_for_load_state("networkidle", timeout=10000)
        except:
            pass

        ads = scrape_list_page(page)
        print(f"  Najdenih {len(ads)} oglasov, zdaj pobiram podrobnosti...")

        for i, ad in enumerate(ads):
            try:
                # Get description from detail page
                desc_text = scrape_detail_page(page, ad["link"])

                # Combine title + description for extraction
                full_text = ad["title"] + " " + desc_text
                components = extract_components(full_text)

                all_data.append(
                    {
                        "Naslov": ad["title"],
                        "Cena (EUR)": ad["price"],
                        "Komponente": components,
                        "Povezava": ad["link"],
                    }
                )

                if (i + 1) % 5 == 0:
                    print(f"    Obdelanih: {i + 1}/{len(ads)}")

            except Exception as e:
                print(f"  Napaka pri {ad['link']}: {e}")

            time.sleep(0.3)

        page.close()
        time.sleep(1)

    browser.close()

with open("gaming_pcs.json", "w", encoding="utf-8") as f:
    json.dump(all_data, f, ensure_ascii=False, indent=4)

if all_data:
    df = pd.DataFrame(all_data)
    df_comp = df["Komponente"].apply(pd.Series)
    df_final = pd.concat([df.drop("Komponente", axis=1), df_comp], axis=1)
    df_ranked = df_final.sort_values(by="Cena (EUR)", ascending=True)
    df_ranked = df_ranked[df_ranked["Cena (EUR)"] > 0]

    print(f"\nSkupaj najdenih {len(df_ranked)} oglasov")
    cols = ["Naslov", "Cena (EUR)", "CPU", "GPU", "RAM"]
    print(df_ranked[cols].head(20).to_string(index=False))

    df_ranked.to_excel("gaming_pcs.xlsx", index=False, engine="openpyxl")
    print("\nPodatki shranjeni!")
else:
    print("Ni podatkov!")
