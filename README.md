# 🎮 Bolha Gaming PC Finder

Iskanje igričarskih računalnikov na Bolha.com z naprednim scrapingom in spletnim vmesnikom.

## Funkcionalnosti

- 🔍 Iskanje po naslovu
- 💰 Filter cene (min/max)
- 🎮 Filter GPU (RTX, GTX, RX...)
- 🖥️ Filter CPU (Intel, AMD Ryzen...)
- 📊 Filter RAM
- 📈 Statistika (skupaj, min, max, povprečje)
- 📋 Tabelarični prikaz vseh oglasov

## Tech Stack

- **Scraping**: Python + Playwright + BeautifulSoup
- **Frontend**: Plain HTML/CSS/JS (brez odvisnosti)
- **Deployment**: Vercel

## Namestitev

```bash
pip install -r requirements.txt
```

## Zagon local

```bash
# Scraping
python scraping.py

# Spletna aplikacija
python -m http.server 8080
```

Odpri: http://localhost:8080

## Deployment na Vercel

```bash
npm i -g vercel
vercel deploy
```

## Podatki

Podatki so shranjeni v `gaming_pcs.json` (246 oglasov, 155 gaming PC z GPU).

## License

MIT