import streamlit as st
import pandas as pd
import json

st.set_page_config(page_title="Bolha Gaming PC Finder", page_icon="🖥️", layout="wide")


@st.cache_data
def load_data():
    with open("gaming_pcs.json", "r", encoding="utf-8") as f:
        data = json.load(f)

    df = pd.DataFrame(data)
    if "Komponente" in df.columns:
        comp_df = df["Komponente"].apply(pd.Series)
        df = pd.concat([df.drop("Komponente", axis=1), comp_df], axis=1)

    df = df.rename(columns={"Cena (EUR)": "Cena"})
    df["Cena"] = pd.to_numeric(df["Cena"], errors="coerce").fillna(0)
    df = df[df["Cena"] > 0]
    return df


df = load_data()

st.title("🎮 Bolha Gaming PC Finder")
st.markdown("Iskanje igričarskih računalnikov na Bolha.com")

# SIDEBAR FILTRI
st.sidebar.header("🔍 Filtri")

min_cena, max_cena = int(df["Cena"].min()), int(df["Cena"].max())
cena_range = st.sidebar.slider("Cena (€)", min_cena, max_cena, (min_cena, max_cena), 50)

gpu_filter = st.sidebar.multiselect(
    "Grafična kartica (GPU)",
    options=sorted([g for g in df["GPU"].dropna().unique() if g]),
)
cpu_filter = st.sidebar.multiselect(
    "Procesor (CPU)", options=sorted([c for c in df["CPU"].dropna().unique() if c])
)
ram_filter = st.sidebar.multiselect(
    "RAM", options=sorted([r for r in df["RAM"].dropna().unique() if r])
)

# ISKALNIK
search = st.text_input("🔎 Iskanje po naslovu", "")

# FILTRIRANJE
filtered = df[(df["Cena"] >= cena_range[0]) & (df["Cena"] <= cena_range[1])]

if gpu_filter:
    filtered = filtered[filtered["GPU"].isin(gpu_filter) | filtered["GPU"].isna()]
if cpu_filter:
    filtered = filtered[filtered["CPU"].isin(cpu_filter) | filtered["CPU"].isna()]
if ram_filter:
    filtered = filtered[filtered["RAM"].isin(ram_filter) | filtered["RAM"].isna()]
if search:
    filtered = filtered[filtered["Naslov"].str.contains(search, case=False, na=False)]

filtered = filtered.sort_values("Cena")

# STATISTIKA
col1, col2, col3 = st.columns(3)
col1.metric("Skupaj oglasov", len(filtered))
col2.metric("Cena od", f"{filtered['Cena'].min():.0f}€" if len(filtered) else "-")
col3.metric("Cena do", f"{filtered['Cena'].max():.0f}€" if len(filtered) else "-")

# TABELA
st.subheader(f"📋 Rezultati ({len(filtered)} oglasov)")

if len(filtered) > 0:
    display_cols = ["Cena", "Naslov", "CPU", "GPU", "RAM", "SSD/HDD", "Povezava"]
    available_cols = [c for c in display_cols if c in filtered.columns]

    def format_row(row):
        return pd.Series(
            {
                "Cena (€)": f"**{row['Cena']:.0f}€**",
                "Naslov": row["Naslov"][:60] + "..."
                if len(str(row["Naslov"])) > 60
                else row["Naslov"],
                "CPU": row["CPU"] if pd.notna(row.get("CPU")) else "-",
                "GPU": row["GPU"] if pd.notna(row.get("GPU")) else "-",
                "RAM": row["RAM"] if pd.notna(row.get("RAM")) else "-",
                "SSD": row.get("SSD/HDD", "-") if pd.notna(row.get("SSD/HDD")) else "-",
                "Povezava": f"[Povezava]({row['Povezava']})",
            }
        )

    st.dataframe(
        filtered[available_cols].style.format({"Cena": "€{:.0f}"}),
        use_container_width=True,
        hide_index=True,
    )

    # PREGLED PO GPU
    st.subheader("📊 Pregled po GPU")
    gpu_stats = (
        filtered.groupby("GPU").agg({"Cena": ["count", "min", "max", "mean"]}).round(0)
    )
    gpu_stats.columns = ["Število", "Min", "Max", "Povprečje"]
    gpu_stats = gpu_stats.sort_values("Število", ascending=False)
    st.table(gpu_stats)
else:
    st.warning("Ni oglasov, ki ustrezajo filtrom")

# SPODAJ
with st.expander("💻 Podatki v JSON"):
    st.json(df.to_dict(orient="records")[:5])
