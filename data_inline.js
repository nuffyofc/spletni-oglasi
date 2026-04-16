const pcData = [
  {
    "naslov": "GAMING PC Ryzen 5 16GB DDR4 RX 6600 XT 8GB 512GB NVMe računalnik",
    "cena": 400.0,
    "cpu": "",
    "gpu": "RX 6600",
    "ram": "16GB DDR4",
    "ssd": "512GB NVME",
    "link": "https://www.bolha.com/procesor-amd-ryzen/gaming-pc-ryzen-5-16gb-ddr4-rx-6600-xt-8gb-512gb-nvme-oglas-15776420"
  },
  {
    "naslov": "GAMING PC / i5 8400 / GTX 1070 8GB / 32GB RAM / 250GB SSD / 1TB HDD",
    "cena": 400.0,
    "cpu": "I5 8400",
    "gpu": "GTX 1070",
    "ram": "32GB RAM",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/gaming-pc-i5-8400-gtx-1070-8gb-32gb-ram-250gb-ssd-1tb-hdd-oglas-15802988"
  },
  {
    "naslov": "GAMING PC / i7 6700K / GTX 1650 / 16GB RAM / 250GB SSD / 1000GB HDD",
    "cena": 300.0,
    "cpu": "I7 6700K",
    "gpu": "GTX 1650",
    "ram": "16GB RAM",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i7/gaming-pc-i7-6700k-gtx-1650-16gb-ram-250gb-ssd-1000gb-hdd-oglas-15782120"
  },
  {
    "naslov": "Gaming računalnik HP",
    "cena": 500.0,
    "cpu": "",
    "gpu": "",
    "ram": "",
    "ssd": "",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/gaming-racunalnik-hp-oglas-15794660"
  },
  {
    "naslov": "Gaming računalnik",
    "cena": 600.0,
    "cpu": "RYZEN 7 5700X",
    "gpu": "RTX 3060",
    "ram": "16GB DDR4",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/gaming-racunalnik-oglas-15783551"
  },
  {
    "naslov": "Mini pc ryzen 7 8745hs, 32gb ddr5 5600, 1tb pcie 4.0, radeon 780m",
    "cena": 500.0,
    "cpu": "RYZEN 7 8745",
    "gpu": "RTX 3070",
    "ram": "32GB DDR5",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/mini-pc-ryzen-7-8745hs-32gb-ddr5-5600-1tb-pcie-4.0-radeon-780m-oglas-15694882"
  },
  {
    "naslov": "Gaming računalnik- AMD ryzen 5 3600/ 16gb ddr4/ 4gb grafa",
    "cena": 120.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "RTX 3070",
    "ram": "16GB DDR4",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/gaming-racunalnik-amd-ryzen-5-3600-16gb-ddr4-4gb-grafa-oglas-15804856"
  },
  {
    "naslov": "Gaming PC i5 10400f/16ram/RX 6600 8g/Nov CPU/Nov coller/",
    "cena": 590.0,
    "cpu": "RYZEN7 5700X",
    "gpu": "RTX 2060",
    "ram": "32GB DDR5",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/gaming-pc-i5-10400f-16ram-rx-6600-8g-nov-cpu-nov-coller-oglas-15590618"
  },
  {
    "naslov": "Računalnik i5 8500/16ram/Gtx 1070Ti 8g/Nov coller RGB",
    "cena": 390.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "RTX3070",
    "ram": "32GB DDR5",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/racunalnik-i5-8500-16ram-gtx-1070ti-8g-nov-coller-rgb-oglas-15590638"
  },
  {
    "naslov": "PC PLUS ACUS RAČUNALNIK, TIPKOVNICA IN MIŠKA VSE DELUJE CENA 35€",
    "cena": 35.0,
    "cpu": "I5 3470",
    "gpu": "RX2012",
    "ram": "8 GB DDR4",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/pc-plus-acus-racunalnik-tipkovnica-in-miska-vse-deluje-cena-35-oglas-15251848"
  },
  {
    "naslov": "Asus Nvidia GeForce RTX 3060ti + NZXT H7 + Corsair RM6500x",
    "cena": 430.0,
    "cpu": "I3 4170",
    "gpu": "RTX 3060T",
    "ram": "16GB RAM",
    "ssd": "8GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/asus-nvidia-geforce-rtx-3060ti-nzxt-h7-corsair-rm6500x-oglas-15804772"
  },
  {
    "naslov": "Namizni računalnik",
    "cena": 200.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "GTX 1060",
    "ram": "8 GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i7/namizni-racunalnik-oglas-14029792"
  },
  {
    "naslov": "Namizni računalniki in monitirji",
    "cena": 1.0,
    "cpu": "",
    "gpu": "",
    "ram": "2GB DDR2",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/namizni-racunalniki-in-monitirji-oglas-15694549"
  },
  {
    "naslov": "GAMING SETUP",
    "cena": 480.0,
    "cpu": "I7 7700",
    "gpu": "GTX 1650",
    "ram": "8GB DDR3",
    "ssd": "466 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/gaming-setup-oglas-15804705"
  },
  {
    "naslov": "ASUS VivoPC VM42, Celeron 2957U, 6GB RAM, 500GB disk",
    "cena": 40.0,
    "cpu": "CELERON 2957",
    "gpu": "RTX 2060",
    "ram": "6GB DDR3",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/nettopi-namizni-racunalniki/asus-vivopc-vm42-oglas-15727248"
  },
  {
    "naslov": "Lenovo M93p, i5-4570, 16GB RAM, 240 GB SSD, Win 11",
    "cena": 60.0,
    "cpu": "I5 2500",
    "gpu": "",
    "ram": "16GB DDR3",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-thinkcentre-m93p-oglas-15728418"
  },
  {
    "naslov": "Majhen kompakten PC z Intel i5-6500 CPU",
    "cena": 130.0,
    "cpu": "RYZEN 7 7800X",
    "gpu": "RX 6800",
    "ram": "8GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/majhen-kompakten-pc-z-intel-i5-cpu-oglas-10953431"
  },
  {
    "naslov": "Prodam HP ProDesk 400 G1 MT CPU i7",
    "cena": 110.0,
    "cpu": "I5 4590",
    "gpu": "GTX 1050",
    "ram": "16GB DDR3",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/prodam-hp-prodesk-g1-mt-cpu-i3-oglas-14731894"
  },
  {
    "naslov": "Prodam odlično ohranjen mini računalnik I5-6500",
    "cena": 130.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 4080",
    "ram": "8GB DDR4",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/prodam-odlicno-ohranjen-mini-racunalnik-z-22-incnim-monitorjem-oglas-13678215"
  },
  {
    "naslov": "Lenovo m700 i5-6400T mini PC",
    "cena": 130.0,
    "cpu": "I5 7400",
    "gpu": "RX550",
    "ram": "16GB DDR4",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-m700-i5-6400t-mini-pc-oglas-14708706"
  },
  {
    "naslov": "GAMING PC Ryzen 5 16GB DDR4 RX 6600 XT 8GB 512GB NVMe računalnik",
    "cena": 400.0,
    "cpu": "",
    "gpu": "RX 6600",
    "ram": "16GB DDR4",
    "ssd": "512GB NVME",
    "link": "https://www.bolha.com/procesor-amd-ryzen/gaming-pc-ryzen-5-16gb-ddr4-rx-6600-xt-8gb-512gb-nvme-oglas-15776420"
  },
  {
    "naslov": "iMac 27\" (Late 2009) – Odličen zaslon / Target Display Mode",
    "cena": 120.0,
    "cpu": "",
    "gpu": "",
    "ram": "16GB RAM",
    "ssd": "1 TB HDD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/imac-27-late-2009-odlicen-zaslon-target-display-mode-oglas-15804474"
  },
  {
    "naslov": "Anni Gamerski racunalnik",
    "cena": 600.0,
    "cpu": "RYZEN 5 5600",
    "gpu": "RTX 3050",
    "ram": "64GB DDR5",
    "ssd": "512 GB NVME",
    "link": "https://www.bolha.com/ostali-racunalniki/anni-gamerski-racunalnik-oglas-15804431"
  },
  {
    "naslov": "PC - Gaming Računalnik",
    "cena": 330.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 3070",
    "ram": "8 GB DDR4",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalnik-oglas-15635354"
  },
  {
    "naslov": "Monitor za računalnik LG s tipkovnico",
    "cena": 25.0,
    "cpu": "",
    "gpu": "",
    "ram": "32GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalnik-lg-tipkovnico-oglas-14837640"
  },
  {
    "naslov": "AIO Apple iMac 19.1 (early 2019) 27″ 5K Retina Intel i9-9.gen.",
    "cena": 1499.0,
    "cpu": "",
    "gpu": "RTX 2070",
    "ram": "32 GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/aio-apple-imac-19.1-early-2019-27-5k-retina-intel-i9-9-gen-oglas-15804240"
  },
  {
    "naslov": "Gaming 8 jedrni AMD / 16GB RAM, RX 480 8GB, SSD / pripravljen za igre",
    "cena": 295.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 3050",
    "ram": "8 GB DDR5",
    "ssd": "512 GB NVME",
    "link": "https://www.bolha.com/procesor-amd-phenom/8-jederni-amd-gaming-namizni-racunalnik-oglas-15638555"
  },
  {
    "naslov": "Dell OptiPlex 7070 Ultra Intel i5-8.gen., 16 GB RAM, 256 GB SSD",
    "cena": 599.0,
    "cpu": "",
    "gpu": "RTX6000",
    "ram": "16 GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/dell-optiplex-7070-ultra-intel-i5-8-gen-16-gb-ram-256-gb-ssd-oglas-15804192"
  },
  {
    "naslov": "MINI RAČUNALNIK HP ELITEDESK INTEL i5, 16GB RAM, HDMI, 3x DP",
    "cena": 200.0,
    "cpu": "I5 7500",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/mini-racunalnik-hp-elitedesk-intel-i5-oglas-15263156"
  },
  {
    "naslov": "HP EliteDesk 800 G4 Intel i5-8.gen., 8 GB RAM, 256 GB SSD, Win 11 Pro",
    "cena": 299.0,
    "cpu": "",
    "gpu": "RTX2060",
    "ram": "8 GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-elitedesk-800-g4-intel-i5-8-gen-8-gb-ram-256-gb-ssd-win-11-pro-oglas-15804190"
  },
  {
    "naslov": "Dell OptiPlex 7760 \"27 palcev\"",
    "cena": 650.0,
    "cpu": "I7 3770",
    "gpu": "RTX6000",
    "ram": "8GB DDR3",
    "ssd": "512 GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/dell-optiplex-7760-27-palcev-oglas-15804128"
  },
  {
    "naslov": "Prodam workstation PC 128GB RAM",
    "cena": 1350.0,
    "cpu": "RYZEN 7 3700X",
    "gpu": "RTX 3070",
    "ram": "32GB DDR4",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/prodam-workstation-pc-128gb-ram-oglas-15804114"
  },
  {
    "naslov": "Gamerski računalnik 1080TI 11GB",
    "cena": 400.0,
    "cpu": "RYZEN 7 9700X",
    "gpu": "RTX 3070",
    "ram": "16 GB DDR4",
    "ssd": "60GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/gamerski-racunalnik-1080ti-11gb-oglas-15804095"
  },
  {
    "naslov": "Mac Mini (M1, 8GB RAM, 256GB SSD) 2020",
    "cena": 350.0,
    "cpu": "",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/mac-mini-m1-8gb-ram-256gb-ssd-2020-oglas-15804069"
  },
  {
    "naslov": "Lenovo Thinkcentre M710s SFF i5 6.gen|256GB|8GB|WIN11",
    "cena": 140.0,
    "cpu": "I5 8400",
    "gpu": "RX550",
    "ram": "8GB DDR4",
    "ssd": "256GB NVME",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-thinkcentre-m710s-sff-i5-6-gen-256gb-8gb-win11-oglas-13635463"
  },
  {
    "naslov": "HP Prodesk 600 G4 SFF i3 9.gen,480GB,16GB,GT1030 WIN11 PRO",
    "cena": 250.0,
    "cpu": "RYZEN 3 4100",
    "gpu": "RX 6500",
    "ram": "16GB DDR4",
    "ssd": "480GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-600-g4-sff-i5-8-gen-nvme-8gb-win11-pro-oglas-11802357"
  },
  {
    "naslov": "Dell OptiPlex 3280 AIO – 21″ i5 10.gen, 256GB Nvme, 8GB, W11",
    "cena": 450.0,
    "cpu": "RYZEN 3 4100",
    "gpu": "RX 6500",
    "ram": "8 GB DDR4",
    "ssd": "256GB NVME",
    "link": "https://www.bolha.com/racunalniski-kompleti/dell-optiplex-3280-aio-21-i5-10-gen-256gb-nvme-8gb-w11-oglas-15396496"
  },
  {
    "naslov": "Gaming PC HP OMEN",
    "cena": 699.0,
    "cpu": "RYZEN 7 5800X",
    "gpu": "RTX3060",
    "ram": "8GB DDR3",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/gaming-pc-hp-omen-oglas-15784339"
  },
  {
    "naslov": "Mini Zver Ryzen Gaming PC",
    "cena": 799.0,
    "cpu": "RYZEN 5 9600",
    "gpu": "RTX2080",
    "ram": "16GB DDR4",
    "ssd": "4GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/mini-zver-ryzen-gaming-pc-oglas-15760306"
  },
  {
    "naslov": "HP Gaming OMEN ( ryzen,RTX5070)",
    "cena": 1149.0,
    "cpu": "I5 7500",
    "gpu": "RTX5070",
    "ram": "32GB DDR5",
    "ssd": "",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-gaming-omen-ryzen-rtx5070-oglas-15760302"
  },
  {
    "naslov": "HP envy Phoenix Gaming PC i5/16GB/GTX 4GB/SSD 500GB + HDD",
    "cena": 180.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "GTX 1050T",
    "ram": "16GB DDR3",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/hp-envy-phoenix-gaming-pc-i5-16gb-gtx-4gb-ssd-500gb-hdd-oglas-15422686"
  },
  {
    "naslov": "Gaming Pc AMD Ryzen5,16GB DDR4,GTX1650 4GB, NVMe + HDD",
    "cena": 250.0,
    "cpu": "RYZEN 5 2400",
    "gpu": "RTX 3080",
    "ram": "16GB DDR4",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/gaming-pc-amd-ryzen5.16gb-ddr4-gtx1650-4gb-nvme-hdd-oglas-15419343"
  },
  {
    "naslov": "Gaming PC intel core i5 16GB RAM Nvidia GTX 1050Ti 4GB 256GB SSD",
    "cena": 200.0,
    "cpu": "I5 3470",
    "gpu": "RTX 5070",
    "ram": "8GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/gaming-pc-tarox-intel-i5-8gb-ram-amd-radeon-rx-570-ssd-oglas-14748454"
  },
  {
    "naslov": "Računalnik i3-4130",
    "cena": 100.0,
    "cpu": "I3 7100",
    "gpu": "",
    "ram": "4 GB DDR3",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/racunalnik-i3-4130-oglas-14173337"
  },
  {
    "naslov": "NVIDIA 4060 Ryzen 5 3600X RGB Gaming Namizni Računalnik",
    "cena": 590.0,
    "cpu": "RYZEN 5 3600X",
    "gpu": "RTX 4060",
    "ram": "32GB DDR5",
    "ssd": "500 GB NVME",
    "link": "https://www.bolha.com/procesor-amd-ryzen/nvidia-4060-ryzen-5-3600x-rgb-gaming-namizni-racunalnik-oglas-15803386"
  },
  {
    "naslov": "HP ProDesk 490 G2 MT (Win11 Pro+Office, i5, 16GB RAM, 240SSD, 1TBHDD)",
    "cena": 240.0,
    "cpu": "RYZEN 3 4100",
    "gpu": "RX 6500",
    "ram": "16GB DDR3",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-490-g2-mt-win11-pro-office-i5-32gb-ram-500ssd-1tbhdd-oglas-14172627"
  },
  {
    "naslov": "Dell Optiplex 3010 (Win11+Office, i3, 8/16GB RAM, SSD, HDD)",
    "cena": 130.0,
    "cpu": "I7 3770",
    "gpu": "",
    "ram": "8GB DDR3",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/dell-optiplex-3010-win11-office-i3-8gb-ram-ssd-hdd-oglas-14172479"
  },
  {
    "naslov": "HP ProDesk 600 G3 mini | i5-6500T | 32GB RAM | 1TB SSD | Win 11+Office",
    "cena": 390.0,
    "cpu": "I5 8400",
    "gpu": "",
    "ram": "32GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-600-g3-mini-i5-6500t-32gb-ram-1tb-ssd-win-11-office-oglas-14788227"
  },
  {
    "naslov": "HP ProDesk 600 G3 | i5-6500 | 32GB RAM | 1TB SSD | Win 11 + Office",
    "cena": 360.0,
    "cpu": "",
    "gpu": "RTX2060",
    "ram": "32GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-600-g3-i5-6500-32gb-ram-1tb-ssd-win-11-office-oglas-14771104"
  },
  {
    "naslov": "HP ProDesk 400 G2 MT (Win11 Pro+Office, i5, 16GB RAM, 128SSD, 500HDD)",
    "cena": 240.0,
    "cpu": "I5 4590",
    "gpu": "RTX 3060T",
    "ram": "16GB DDR3",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-400-g2-mt-win11-pro-office-i5-16gb-ram-128ssd-500hdd-oglas-14172717"
  },
  {
    "naslov": "Mini PC i5-3330",
    "cena": 80.0,
    "cpu": "I5 3330",
    "gpu": "",
    "ram": "16GB DDR3",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/mini-pc-i5-3330-oglas-10503436"
  },
  {
    "naslov": "Dell Optiplex 3020 MT - i5 / 16GB / 240 GB SSD komplet",
    "cena": 75.0,
    "cpu": "I5 4440",
    "gpu": "GTX 1650",
    "ram": "8 GB DDR4",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/dell-optiplex-3020-mt-i5-16gb-256-gb-ssd-komplet-oglas-15341152"
  },
  {
    "naslov": "NUC 12 PRO Intel i7 32 GB RAM 1TB SSD V GARANCIJI Geekom IT12 2015",
    "cena": 550.0,
    "cpu": "RYZEN 5 7535",
    "gpu": "RX 6600",
    "ram": "16 GB DDR4",
    "ssd": "32 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i7/nuc-12-pro-intel-i7-32-gb-ram-1tb-ssd-v-garanciji-geekom-oglas-15690792"
  },
  {
    "naslov": "Intel Core Ultra 5 235(24MB/14x),16GB DDR5,1TB NMVE,GTX970,WIN11",
    "cena": 500.0,
    "cpu": "",
    "gpu": "RTX5060",
    "ram": "16GB DDR5",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/intel-core-ultra-5-235-24mb-14x-16gb-ddr5.1tb-nmve-gtx970-win11-oglas-15803081"
  },
  {
    "naslov": "GAMING PC / i5 8400 / GTX 1070 8GB / 32GB RAM / 250GB SSD / 1TB HDD",
    "cena": 400.0,
    "cpu": "I5 8400",
    "gpu": "GTX 1070",
    "ram": "32GB RAM",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/gaming-pc-i5-8400-gtx-1070-8gb-32gb-ram-250gb-ssd-1tb-hdd-oglas-15802988"
  },
  {
    "naslov": "Gaming / workstation PC Ryzen 9 5900X / RX 7900 GRE",
    "cena": 990.0,
    "cpu": "RYZEN 9 5900X",
    "gpu": "RTX 4070",
    "ram": "",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/gaming-workstation-pc-ryzen-9-5900x-rx-7900-gre-oglas-15802098"
  },
  {
    "naslov": "Računalnik HP ELITEDESK + 22 LCD monitor + oprema",
    "cena": 100.0,
    "cpu": "I3 3600",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/racunalnik-hp-elitedesk-22-lcd-monitor-oprema-oglas-15802085"
  },
  {
    "naslov": "mozna menjava za ps5 in vr v2 ocala",
    "cena": 950.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "RTX 4060",
    "ram": "32GB DDR4",
    "ssd": "4GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/mozna-menjava-ps5-in-vr-v2-ocala-oglas-15802009"
  },
  {
    "naslov": "Računalnik z veliko kapaciteto shranjevanja - 104Tb",
    "cena": 3500.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 3060",
    "ram": "16GB DDR4",
    "ssd": "",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalnik-z-veliko-kapaciteto-shranjevanja-oglas-15251939"
  },
  {
    "naslov": "PC Intel i3-6100 3.7GHz, 8GB RAM, 240GB SSD, Nvidia Quadro K620",
    "cena": 80.0,
    "cpu": "I3 10100F",
    "gpu": "",
    "ram": "8GB DDR4",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/pc-20-monitor-i3-6100-3.7ghz-8gb-ram-240gb-ssd-nvidia-q-k620-oglas-13134596"
  },
  {
    "naslov": "PC i3-10100 + 24\" monitor + Logitech tipkovnica + Razer miška",
    "cena": 190.0,
    "cpu": "I3 8100",
    "gpu": "GTX 1650",
    "ram": "8GB DDR4",
    "ssd": "256GB M.2",
    "link": "https://www.bolha.com/racunalniski-kompleti/pc-i3-10100-24-monitor-logitech-tipkovnica-razer-miska-oglas-15351180"
  },
  {
    "naslov": "Apple Imac 2013",
    "cena": 300.0,
    "cpu": "",
    "gpu": "",
    "ram": "16GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/apple-imac-2013-oglas-15314443"
  },
  {
    "naslov": "Andraž nad Polzelo 324",
    "cena": 600.0,
    "cpu": "RYZEN 5 5500",
    "gpu": "RTX 3060T",
    "ram": "16GB DDR3",
    "ssd": "1000GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/andraz-nad-polzelo-324-oglas-15690868"
  },
  {
    "naslov": "Intel i5 Namizni računalnik Grafična RTX2060 DDR4 16 GB",
    "cena": 450.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "RTX2060",
    "ram": "6GB DDR6",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/intel-i5-namizni-racunalnik-graficna-rtx2060-ddr4-16-gb-oglas-15724633"
  },
  {
    "naslov": "Namizni računalnik i5 / SSD /  Radeon HD 7870 / 8GB",
    "cena": 120.0,
    "cpu": "I5 13400F",
    "gpu": "RTX 3080",
    "ram": "8GB DDR4",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/namizni-racunalnik-i5-ssd-radeon-hd-7870-8gb-oglas-15801284"
  },
  {
    "naslov": "Namizni računalnik komplet – i5-4590 / 24 GB RAM / RX 570 / SSD / BitF",
    "cena": 290.0,
    "cpu": "RYZEN 7 9800X",
    "gpu": "RTX 5070",
    "ram": "24 GB DDR3",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/namizni-racunalnik-komplet-i5-4590-24-gb-ram-rx-570-ssd-bitf-oglas-15801263"
  },
  {
    "naslov": "HP workstation Z230 + WIN 10 Pro + 32GB RAM + 480GB SSD + 2TB SATA",
    "cena": 180.0,
    "cpu": "I5 4590",
    "gpu": "",
    "ram": "16GB DDR3",
    "ssd": "480GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-workstation-z230-win-10-pro-32gb-2tb-nvme-480gb-sata-oglas-13920347"
  },
  {
    "naslov": "Macbook Air M4 16GB/256GB Midnight",
    "cena": 800.0,
    "cpu": "",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/macbook-air-m4-16gb-256gb-midnight-oglas-15801197"
  },
  {
    "naslov": "Apple iMac 27\" (2020) 5K, i5 3,3Ghz, 32Gb RAM, 512 SSD",
    "cena": 998.9,
    "cpu": "",
    "gpu": "",
    "ram": "16 GB DDR3",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/apple-imac-27-2020-5k-i5-3.3ghz-32gb-ram-512-ssd-oglas-14423694"
  },
  {
    "naslov": "IBM Lenovo ThinkCentre A52,Pentium D 820 2.8GHz, 2GBDDR2,250GB,Win7x64",
    "cena": 20.0,
    "cpu": "I5 2500",
    "gpu": "",
    "ram": "2GBDDR2",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/ibm-lenovo-thinkcentre-a52-pentium-d-820-2.8ghz-2gbddr2.250gb-win7x64-oglas-15801108"
  },
  {
    "naslov": "HP 260 G1 DM i3-4030U / 250GB SSD /  4GB / Win 11",
    "cena": 99.99,
    "cpu": "RYZEN 5 5600",
    "gpu": "RTX 3060",
    "ram": "4GB DDR3",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/nettopi-namizni-racunalniki/hp-260-g1-dm-i3-4030u-250gb-ssd-4gb-win-11-oglas-15394604"
  },
  {
    "naslov": "Prodam računalnik i3 7100 / 4GB DDR4 / 250GB SSD",
    "cena": 89.99,
    "cpu": "RYZEN 5 2600X",
    "gpu": "GTX 1070",
    "ram": "4GB DDR4",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/prodam-racunalnik-i3-7100-8gb-ddr4-512gb-nvme-ssd-oglas-12457322"
  },
  {
    "naslov": "Ugoden Namizni računalnik Intel i3-4170 / 4GB / 250GB SSD",
    "cena": 59.99,
    "cpu": "I3 7100",
    "gpu": "",
    "ram": "4GB DDR3",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/namizni-racunalnik-intel-i3-4170-4gb-ddr3-250-gb-ssd-intel-hd-oglas-11656834"
  },
  {
    "naslov": "Prodam računalnik i3-8100 / 4GB DDR4 / 512GB SSD",
    "cena": 119.99,
    "cpu": "I3 7100",
    "gpu": "",
    "ram": "4GB DDR4",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/prodam-racunalnik-i3-8100-8gb-ddr4-512gb-nvme-ssd-oglas-11886013"
  },
  {
    "naslov": "Računalnik i5 - 3470",
    "cena": 60.0,
    "cpu": "I5 3470",
    "gpu": "",
    "ram": "16GB DDR3",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/racunalnik-i5-3470-oglas-14633171"
  },
  {
    "naslov": "Namizni računalnik Dell OptiPlex 3060 SFF, i5-8500 / 8GB / 256SSD / WI",
    "cena": 229.0,
    "cpu": "I5 9600K",
    "gpu": "RTX6000",
    "ram": "16 GB DDR5",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/namizni-racunalnik-dell-optiplex-3060-sff-i5-8500-8gb-256ssd-wi-oglas-15381573"
  },
  {
    "naslov": "Delovna postaja Lenovo Thinkstation P520 W-2123 / 16GB / 512SSD / QUAD",
    "cena": 349.0,
    "cpu": "I5 6600K",
    "gpu": "GTX 1070",
    "ram": "16 GB RAM",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/delovna-postaja-lenovo-thinkstation-p520-w-2123-32gb-512ssd-quad-oglas-12884025"
  },
  {
    "naslov": "Gaming računalnik DELL Precision T3620 Xeon E3-1270v5 / 16GB / 256SSD",
    "cena": 239.0,
    "cpu": "RYZEN 3 4100",
    "gpu": "RTX6000",
    "ram": "16 GB DDR5",
    "ssd": "512 GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/gaming-racunalnik-dell-precision-t3620-xeon-e3-1270v5-16gb-256ssd-oglas-15267416"
  },
  {
    "naslov": "Gaming računalnik DELL Precision T3620 Xeon E3-1270v5 / 16GB / 256SSD",
    "cena": 229.0,
    "cpu": "",
    "gpu": "RTX6000",
    "ram": "16 GB DDR5",
    "ssd": "512 GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/gaming-racunalnik-dell-precision-t3620-xeon-e3-1270v5-16gb-256ssd-oglas-15223281"
  },
  {
    "naslov": "Delovna postaja Lenovo Thinkstation P320, Xeon E3-1220 v6 / 16GB / 256",
    "cena": 249.0,
    "cpu": "RYZEN 5 1600",
    "gpu": "",
    "ram": "32GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/delovna-postaja-lenovo-thinkstation-p320-xeon-e3-1220-v6-16gb-256-oglas-15579041"
  },
  {
    "naslov": "Namizni računalnik HP ProDesk 600 G5 SFF, i5-8400 / 16GB /  512SSD / b",
    "cena": 299.0,
    "cpu": "I37100",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "512GB NVME",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/namizni-racunalnik-hp-prodesk-600-g5-sff-i5-8400-16gb-512ssd-b-oglas-15452182"
  },
  {
    "naslov": "Lenovo M93p SFF  4570 DDR3 16GB SSD 256 licenca Win",
    "cena": 95.0,
    "cpu": "I5 4560",
    "gpu": "",
    "ram": "4GB DDR4",
    "ssd": "16GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-m93p-sff-4570-ddr3-16gb-ssd-256-licenca-win-oglas-15212707"
  },
  {
    "naslov": "Delovna postaja HP Z420",
    "cena": 150.0,
    "cpu": "I7 6700",
    "gpu": "GTX 1070",
    "ram": "8 GB DDR4",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/delovna-postaja-hp-z420-oglas-13397507"
  },
  {
    "naslov": "Apple računalnik iMac 27\"",
    "cena": 549.0,
    "cpu": "",
    "gpu": "",
    "ram": "16 GB DDR3",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/apple-racunalnik-imac-27-oglas-15365284"
  },
  {
    "naslov": "HP Mini računalnik ProDesk 600G4 i5 8gen SSD",
    "cena": 150.0,
    "cpu": "I5 8500",
    "gpu": "",
    "ram": "8GB DDR4",
    "ssd": "480GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-mini-racunalnik-elitedesk-800g4-i5-8gen-ssd-oglas-15414172"
  },
  {
    "naslov": "HP Mini računalnik ProDesk 600G3 i5 8gb ram",
    "cena": 80.0,
    "cpu": "I5 7500",
    "gpu": "",
    "ram": "8GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-mini-racunalnik-prodesk-600g3-i5-8gb-ram-oglas-15272992"
  },
  {
    "naslov": "HP Mini računalnik EliteDesk 800G2 i5 8gb ram",
    "cena": 70.0,
    "cpu": "I5 6500",
    "gpu": "",
    "ram": "8GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-mini-racunalnik-elitedesk-800g2-i3-8gb-ram-oglas-15273001"
  },
  {
    "naslov": "Računalnik Dell i5 SSD",
    "cena": 85.0,
    "cpu": "I5 8400",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/racunalnik-dell-i5-ssd-oglas-13831415"
  },
  {
    "naslov": "Gaming PC Ryzen",
    "cena": 700.0,
    "cpu": "RYZEN 7 3800X",
    "gpu": "RTX 3070",
    "ram": "16 GB DDR5",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/gaming-pc-namizni-racunalnik-oglas-15800313"
  },
  {
    "naslov": "Računalnik HP ProDesk 400 G6 SFF (i5-9500, 16Gb, 256Gb, NVIDIA K620)",
    "cena": 180.0,
    "cpu": "I5 8400",
    "gpu": "",
    "ram": "8GB DDR4",
    "ssd": "256 GB NVME",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/racunalnik-hp-prodesk-400-g6-sff-i5-9500-16gb-ram-256gb-sdd-k620-oglas-14961145"
  },
  {
    "naslov": "hišni računalnik dell",
    "cena": 250.0,
    "cpu": "I5 10500",
    "gpu": "",
    "ram": "32GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/hisni-racunalnik-dell-oglas-12073928"
  },
  {
    "naslov": "ThinkCenter Lenovo Tiny",
    "cena": 110.0,
    "cpu": "I5 7400",
    "gpu": "RX550",
    "ram": "16GB DDR3",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/thinkcenter-lenovo-tiny-oglas-15799764"
  },
  {
    "naslov": "HP 800 G4 MINI i5-8500T / 8GB / 256GB SSD + Wi-Fi",
    "cena": 279.0,
    "cpu": "I37100",
    "gpu": "RTX3000",
    "ram": "8 GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-800-g4-mini-i5-8500t-8gb-256gb-ssd-wi-fi-oglas-15180860"
  },
  {
    "naslov": "WINDOWS 11 Vrhunski računalnik z SSD diskom zelo tih, GT 630 2GB",
    "cena": 59.0,
    "cpu": "",
    "gpu": "GTX 1060",
    "ram": "16GB DDR3",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/windows-11-vrhunski-racunalnik-z-ssd-diskom-zelo-tih-gt-630-2gb-oglas-14963447"
  },
  {
    "naslov": "Top Budget Gaming Računalnik, monitor, miška in tipkovnica",
    "cena": 49.0,
    "cpu": "I5 8400",
    "gpu": "",
    "ram": "8GB DDR4",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/top-budget-gaming-racunalnik-monitor-zvocniki-miska-in-tipkovnica-oglas-14962695"
  },
  {
    "naslov": "Vse IGRE lahko igrate na PC za 49€ + monitor + miska in tipkovnica",
    "cena": 49.0,
    "cpu": "I3 4170",
    "gpu": "RTX 3060T",
    "ram": "8 GB DDR4",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/vse-igre-lahko-igrate-pc-49-monitor-miska-in-tipkovnica-oglas-14604684"
  },
  {
    "naslov": "Dark POWER Gaming Level 16GB rama WINDOWS 11",
    "cena": 89.0,
    "cpu": "I5 4570",
    "gpu": "RTX 4060",
    "ram": "32GB DDR5",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/dark-power-gaming-level-oglas-15457012"
  },
  {
    "naslov": "Komplet računalnik, monitor, miška vsi kabli, WI-FI Odličen računalnik",
    "cena": 29.0,
    "cpu": "I5 3470",
    "gpu": "RX580",
    "ram": "8 GB DDR4",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/komplet-racunalnik-monitor-miska-vsi-kabli-wi-fi-odlicen-racunalnik-oglas-12834345"
  },
  {
    "naslov": "Najcenejši in najboljši računalnik AKCIJA",
    "cena": 20.0,
    "cpu": "I5 8500",
    "gpu": "GTX 1070",
    "ram": "8 GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/najcenejsi-in-najboljsi-racunalnik-akcija-oglas-15351286"
  },
  {
    "naslov": "Windows 11 + SSD + Intel I5 + 8GB rama",
    "cena": 49.0,
    "cpu": "I5 3470",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/windows-11-ssd-intel-i5-8gb-rama-oglas-15111462"
  },
  {
    "naslov": "WINDOWS 11 Vrhunski računalnik z SSD diskom zelo tih, WI-FI, GT 1030",
    "cena": 79.0,
    "cpu": "I5 6400",
    "gpu": "RTX 3060T",
    "ram": "8GB RAM",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/windows-11-vrhunski-racunalnik-z-ssd-diskom-zelo-tih-wi-fi-gt-1030-oglas-14632699"
  },
  {
    "naslov": "Komplet računalnik za 40€ Najboljši nakup",
    "cena": 30.0,
    "cpu": "",
    "gpu": "",
    "ram": "4GB RAM",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core2/komplet-racunalnik-40-najboljsi-nakup-oglas-13165843"
  },
  {
    "naslov": "ASSASIN CORE ULTRA GAMING RGB",
    "cena": 499.0,
    "cpu": "RYZEN 7 2700X",
    "gpu": "RTX 2060",
    "ram": "16GB DDR5",
    "ssd": "512GB NVME",
    "link": "https://www.bolha.com/procesor-intel-core-i5/assasin-core-ultra-gaming-rgb-monitor-27-inch-rtx-oglas-15684037"
  },
  {
    "naslov": "WINDOWS 11 - Vrhunski Računalnik za 60€ , I5 proc, SSD, Geforce 8600GT",
    "cena": 59.0,
    "cpu": "I5 2500",
    "gpu": "",
    "ram": "2GBDDR2",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/vrhunski-racunalnik-60-windows-11-i5-proc-ssd-geforce-8600gt-oglas-13823871"
  },
  {
    "naslov": "Apple iMac 2021 M1",
    "cena": 890.0,
    "cpu": "",
    "gpu": "RTX3000",
    "ram": "16GB RAM",
    "ssd": "512 GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/apple-imac-2021-m1-oglas-15615262"
  },
  {
    "naslov": "National CF-1200 MSX (NTSC-J/110V) - za zbiratelje",
    "cena": 150.0,
    "cpu": "",
    "gpu": "",
    "ram": "12GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/ostali-racunalniki/national-cf-1200-msx-ntsc-j-110v-zbiratelje-oglas-3067162"
  },
  {
    "naslov": "GAMING PC / i7 6700K / GTX 1650 / 16GB RAM / 250GB SSD / 1000GB HDD",
    "cena": 300.0,
    "cpu": "I7 6700K",
    "gpu": "GTX 1650",
    "ram": "16GB RAM",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i7/gaming-pc-i7-6700k-gtx-1650-16gb-ram-250gb-ssd-1000gb-hdd-oglas-15782120"
  },
  {
    "naslov": "Računalnik HP EliteDesk 800 G6 Tower | i7-10700 | Quadro P400 | W11P",
    "cena": 499.0,
    "cpu": "I5 10500",
    "gpu": "GTX1060",
    "ram": "16 GB DDR4",
    "ssd": "512 GB M.2",
    "link": "https://www.bolha.com/ostali-racunalniki/racunalnik-hp-elitedesk-800-g6-tower-i7-10700-quadro-p400-w11p-oglas-15798972"
  },
  {
    "naslov": "Mac mini M4 PRO 24 GB 512 SSD",
    "cena": 1200.0,
    "cpu": "",
    "gpu": "",
    "ram": "24 GB RAM",
    "ssd": "512 GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/mac-mini-m4-pro-24-gb-512-ssd-oglas-15753828"
  },
  {
    "naslov": "Računalnik i7 6700/ IGRE",
    "cena": 279.0,
    "cpu": "RYZEN 5 8400",
    "gpu": "RTX 3070",
    "ram": "16 GB DDR5",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/msi-namizni-racunalniki/racunalnik-i7-6700-igre-oglas-15722151"
  },
  {
    "naslov": "Računalnik",
    "cena": 18.0,
    "cpu": "I3 4130",
    "gpu": "",
    "ram": "4GB DDR2",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core2/racunalnik-oglas-15383968"
  },
  {
    "naslov": "Gaming PC Fujitsu i7-4770 | RTX 3050 | 32GB RAM | SSD+2TB HDD",
    "cena": 360.0,
    "cpu": "RYZEN 7 2700X",
    "gpu": "RTX 3050",
    "ram": "32 GB DDR3",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/fujitsu-siemens-namizni-racunalniki/racunalnik-fujitsu-esprimo-p920-e85-i7-ssd-hdd-vga-w10pro-oglas-11908034"
  },
  {
    "naslov": "Gaming PC i7-4790K (do 4.4GHz) | RX 590 8GB | 16GB RAM | SSD+HDD",
    "cena": 280.0,
    "cpu": "RYZEN 7 2700",
    "gpu": "RTX 5070",
    "ram": "16 GB DDR3",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i7/stacionarni-racunalnik-i7-4790k-16gb-ram-240gb-ssd-1tb-hdd-rx590-oglas-11908097"
  },
  {
    "naslov": "NAMIZNI RAČUNALNIK ASUS I-5 windowes 10",
    "cena": 150.0,
    "cpu": "I5 4590",
    "gpu": "RTX 4080",
    "ram": "32GB DDR5",
    "ssd": "65GB SSD",
    "link": "https://www.bolha.com/asus-namizni-racunalniki/namizni-racunalnik-asus-5-windowes-10-oglas-15798691"
  },
  {
    "naslov": "Ryzen 5 3600 / RTX 3070  / 16 GB RAM / 500 GB SSD",
    "cena": 650.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "RTX 3070",
    "ram": "32GB DDR5",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/ryzen-5-3600-rtx-3070-16-gb-ram-500-gb-ssd-oglas-15717373"
  },
  {
    "naslov": "Namizni računalnik HP ElitDesk 800",
    "cena": 160.0,
    "cpu": "I5 10400F",
    "gpu": "GTX1050",
    "ram": "8GB RAM",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/namizni-racunalnik-hp-elitdesk-800-oglas-15557811"
  },
  {
    "naslov": "Namizni računalnik i3 4130",
    "cena": 60.0,
    "cpu": "I3 4130",
    "gpu": "",
    "ram": "16GB DDR4",
    "ssd": "120 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/namizni-racunalnik-i3-4130-oglas-11894105"
  },
  {
    "naslov": "Namizni računalnik Lenovo S510",
    "cena": 90.0,
    "cpu": "I3 6100",
    "gpu": "",
    "ram": "8GB DDR4",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/namizni-racunalnik-lenovo-s510-oglas-15798597"
  },
  {
    "naslov": "Kista",
    "cena": 490.0,
    "cpu": "RYZEN 5 5600",
    "gpu": "RTX 4080",
    "ram": "16GB RAM",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/kista-oglas-15682438"
  },
  {
    "naslov": "FUJITSU računalnik ( INTEL ® PENTIUM ) - Microsoft WINDOWS + PROGRAMI",
    "cena": 179.0,
    "cpu": "I7 4770",
    "gpu": "RTX 3050",
    "ram": "4GB DDR3",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/fujitsu-siemens-namizni-racunalniki/fujitsu-esprimo-racunalnik-intel-pentium-3.3ghz-oglas-2107154"
  },
  {
    "naslov": "osebni računalnik HP Compaq Elite E8200",
    "cena": 60.0,
    "cpu": "I5 4590",
    "gpu": "",
    "ram": "16GB DDR3",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/osebni-racunalnik-hp-compaq-elite-e8200-oglas-15267160"
  },
  {
    "naslov": "Računalnik",
    "cena": 35.0,
    "cpu": "RYZEN 5 7535",
    "gpu": "RTX 4080",
    "ram": "32GB DDR5",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/asus-namizni-racunalniki/domaci-medijski-streznik-oglas-12761735"
  },
  {
    "naslov": "Mini Stick PC ACEPC T6",
    "cena": 60.0,
    "cpu": "I5 6500",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-atom/mini-stick-pc-acepc-t6-oglas-15202006"
  },
  {
    "naslov": "Medion PC MT 22",
    "cena": 50.0,
    "cpu": "I3 10100F",
    "gpu": "",
    "ram": "4GB DDR4",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/medion-pc-mt-22-oglas-15414531"
  },
  {
    "naslov": "HP Z1 G5 Tower Intel Core i7-9700, 16GB ram, 512NVMe, RTX2060",
    "cena": 530.0,
    "cpu": "",
    "gpu": "RTX2060",
    "ram": "16 GB DDR4",
    "ssd": "512 GB NVME",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-z1-g5-tower-intel-core-i7-9700-16gb-ram-512nvme-rtx2060-oglas-15416308"
  },
  {
    "naslov": "Gaming pc",
    "cena": 1800.0,
    "cpu": "RYZEN 7 7800X",
    "gpu": "RTX 5070",
    "ram": "32GB DDR5",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/gaming-pc-oglas-15798375"
  },
  {
    "naslov": "Lenovo M700 Gaming | E3-1230v5 | RX550 4GB | 12GB | 256GB SSD",
    "cena": 140.0,
    "cpu": "I5 7400",
    "gpu": "RX550",
    "ram": "12GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-m700-gaming-e3-1230v5-rx550-4gb-12gb-256gb-ssd-oglas-15640635"
  },
  {
    "naslov": "Gaming PC RTX 3060 12GB / Ryzen 5600X / 32GB RAM / 3TB SSD",
    "cena": 720.0,
    "cpu": "RYZEN 5 5600X",
    "gpu": "RTX 3060",
    "ram": "32GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/gaming-pc-rtx-3060-12gb-ryzen-5600x-32gb-ram-3tb-ssd-oglas-15798267"
  },
  {
    "naslov": "PC Asus (Mini‑ITX,– i5‑7500T,12 GB RAM DDR4, SSD 240Gb,WI-fi,bluetooh",
    "cena": 220.0,
    "cpu": "RYZEN 3 4100",
    "gpu": "RX 6500",
    "ram": "12 GB DDR4",
    "ssd": "256GB M.2",
    "link": "https://www.bolha.com/racunalniski-kompleti/pc-asus-mini-itx-i5-7500t-12-gb-ram-ddr4-ssd-240gb-wi-fi-bluetooh-oglas-15760811"
  },
  {
    "naslov": "Ryzen 7 7800x3d 9070XT 2Tb Ssd 32Gb Ddr5",
    "cena": 1850.0,
    "cpu": "RYZEN 7 7800X",
    "gpu": "RTX 2060",
    "ram": "32GB DDR5",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/ryzen-7-7800x3d-9070xt-2tb-ssd-32gb-ddr5-oglas-15798128"
  },
  {
    "naslov": "Prodam ali Menjam: Gaming SETUP!! Računalnik, Miza, Stol...",
    "cena": 620.0,
    "cpu": "I7 7700",
    "gpu": "RTX5060",
    "ram": "8GB DDR4",
    "ssd": "256GB M.2",
    "link": "https://www.bolha.com/racunalniski-kompleti/prodam-gaming-setup-racunalnik-miza-stol-miska-tipkovnica-oglas-13880962"
  },
  {
    "naslov": "HP EliteDesk 800 G3 TWR 32GB",
    "cena": 250.0,
    "cpu": "I5 7500",
    "gpu": "GTX 1060",
    "ram": "16GB DDR3",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-elitedesk-g3-800-twr-oglas-15797989"
  },
  {
    "naslov": "HP EliteDesk 800 G3 TWR 16GB",
    "cena": 200.0,
    "cpu": "I5 7500",
    "gpu": "",
    "ram": "16GB RAM",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-elitedesk-800-g3-twr-16gb-oglas-15797979"
  },
  {
    "naslov": "iMac 2020 27” Ret 5K: 8C i7 3.8GHz / 72GB RAM / 4TB SSD / 5500XT 8GB",
    "cena": 950.0,
    "cpu": "",
    "gpu": "",
    "ram": "16 GB DDR3",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/imac-2020-27-ret-5k-8c-i7-3.8ghz-72gb-ram-4tb-ssd-5500xt-8gb-oglas-15797882"
  },
  {
    "naslov": "GAMING PC RYZEN 7 3700X / RTX 3080 / 1TB NVME",
    "cena": 1050.0,
    "cpu": "RYZEN 7 3700X",
    "gpu": "RTX 3080",
    "ram": "16GB DDR4",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/gaming-pc-ryzen-3700x-rtx-3080-oglas-15718616"
  },
  {
    "naslov": "Gaming PC i7 4790, RX 6600",
    "cena": 230.0,
    "cpu": "RYZEN 7 2700X",
    "gpu": "RTX 3080",
    "ram": "16 GB DDR3",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i7/namizni-pc-i7-4790-rx-6600-oglas-15679533"
  },
  {
    "naslov": "Računalnik HP QC412EA#AKN",
    "cena": 50.0,
    "cpu": "",
    "gpu": "",
    "ram": "4 GB DDR3",
    "ssd": "500 GB HDD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/racunalnik-hp-intel-i3-4gb-ram-320gb-disk-licencni-windows-10-oglas-12357529"
  },
  {
    "naslov": "Gaming Pc i7-13700kf,32gb ddr5,rx6950xt",
    "cena": 1450.0,
    "cpu": "RYZEN 5 5600",
    "gpu": "RTX 3060",
    "ram": "32GB DDR5",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/gaming-pc-i7-13700kf-32gb-ddr5-rx6950xt-oglas-15797414"
  },
  {
    "naslov": "HP Probook 470 G3",
    "cena": 95.0,
    "cpu": "",
    "gpu": "",
    "ram": "6 GB RAM",
    "ssd": "1 TB HDD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-probook-470-g3-oglas-15239881"
  },
  {
    "naslov": "Mali Računalnik aka Rasberry Pi",
    "cena": 60.0,
    "cpu": "CELERON 1",
    "gpu": "",
    "ram": "4GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/procesor-intel-celeron/mali-racunalnik-aka-rasberry-pi-oglas-15720065"
  },
  {
    "naslov": "Apple iMac Retina 27″ 2020 | i7 16GB 1TB Radeon Pro 5700",
    "cena": 820.0,
    "cpu": "",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/apple-imac-retina-27-2020-i7-16gb-1tb-radeon-pro-5700-oglas-15797171"
  },
  {
    "naslov": "Apple iMac Retina 27″ 2020 | i7 16GB 1TB Radeon Pro 5500 XT",
    "cena": 810.0,
    "cpu": "",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/apple-imac-retina-27-2020-i7-16gb-1tb-radeon-pro-5500-xt-oglas-15797098"
  },
  {
    "naslov": "FUJITSU računalnik ( INTEL ® PENTIUM ) - Microsoft WINDOWS + PROGRAMI",
    "cena": 179.0,
    "cpu": "I3 3240",
    "gpu": "RTX 3050",
    "ram": "4GB DDR3",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/fujitsu-siemens-namizni-racunalniki/fujitsu-esprimo-racunalnik-intel-pentium-3.30-ghz-500-gb-oglas-4545335"
  },
  {
    "naslov": "Računalnik HP 24-e008ny AiO",
    "cena": 330.0,
    "cpu": "",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "512 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/racunalnik-hp-24-e008ny-aio-oglas-8216970"
  },
  {
    "naslov": "Prodam racunalnik",
    "cena": 35.0,
    "cpu": "I7 6500",
    "gpu": "",
    "ram": "4GB DDR4",
    "ssd": "32 GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/prodam-racunalnik-oglas-15797004"
  },
  {
    "naslov": "Gaming PC Intel Ultra 5 245KF - RTX 3070",
    "cena": 965.0,
    "cpu": "I5 14600K",
    "gpu": "RTX 3070",
    "ram": "32GB DDR5",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/gaming-pc-intel-ultra-5-245kf-rtx-3070-oglas-15796974"
  },
  {
    "naslov": "RGB Gamer R5 16GB RGB 256GB+500GB RTX 1650 4GB",
    "cena": 400.0,
    "cpu": "RYZEN 5 2600X",
    "gpu": "RTX 1650",
    "ram": "16GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/rgb-gamer-r5-16gb-rgb-256gb-500gb-rtx-1650-4gb-oglas-15796653"
  },
  {
    "naslov": "iMac 21,5”(1920 x 1080)",
    "cena": 250.0,
    "cpu": "",
    "gpu": "",
    "ram": "16 GB DDR3",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/imac-21.5-1920-x-1080-oglas-14609073"
  },
  {
    "naslov": "Lenovo Gaming IdeaCentre (i5,16GB,1TB,RTX 2060)",
    "cena": 450.0,
    "cpu": "I5 10400F",
    "gpu": "RTX 2060",
    "ram": "16GB DDR4",
    "ssd": "500GB NVME",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-gaming-ideacentre-i5.16gb-1tb-rtx-2060-oglas-15630728"
  },
  {
    "naslov": "Fujitsu Siemens Esprimo P500 E85+",
    "cena": 85.0,
    "cpu": "I7 2600",
    "gpu": "RTX 3050",
    "ram": "8 GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/fujitsu-siemens-namizni-racunalniki/fujitsu-siemens-esprimo-p500-e85-oglas-15796530"
  },
  {
    "naslov": "Intel i7 8700, 16gb ram, 1tb nvm disk",
    "cena": 250.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 3080T",
    "ram": "16GB DDR4",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/intel-i7-8700-16gb-ram-1tb-nvm-disk-oglas-15796441"
  },
  {
    "naslov": "Namizni racunalnik i5..6400",
    "cena": 125.0,
    "cpu": "I5 3450",
    "gpu": "RX 570",
    "ram": "8 GB DDR4",
    "ssd": "128 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/namizni-racunalnik-i5-6400-oglas-15796435"
  },
  {
    "naslov": "Dell Optiplex 7010 i7 3770, 240gb SSD, 8gb DDR3",
    "cena": 45.0,
    "cpu": "I7 3770",
    "gpu": "GTX 1650",
    "ram": "8GB DDR3",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/dell-optiplex-7010-i7-3770-240gb-ssd-8gb-ddr3-oglas-15796387"
  },
  {
    "naslov": "MAC mini A1103, tipkovnica, miška, vse v original embalaži",
    "cena": 200.0,
    "cpu": "",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/mac-mini-a1103-tipkovnica-miska-vse-v-original-embalazi-oglas-10664168"
  },
  {
    "naslov": "HP Z2 G4 i7 / 16GB / RTX 2060",
    "cena": 725.0,
    "cpu": "",
    "gpu": "RTX 2060",
    "ram": "16 GB DDR4",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-z2-g4-i7-16gb-rtx-2060-oglas-15164085"
  },
  {
    "naslov": "Laptop Lenovo ThinkPad L390 ODLIČEN!",
    "cena": 240.0,
    "cpu": "I5 7400",
    "gpu": "",
    "ram": "16GB DDR4",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/laptop-lenovo-thinkpad-l390-odlicen-oglas-15796054"
  },
  {
    "naslov": "Apple iMac 27\" - i7 / 16GB / SSD",
    "cena": 270.0,
    "cpu": "",
    "gpu": "",
    "ram": "16 GB DDR3",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/apple-imac-27-i7-16gb-ssd-oglas-15796046"
  },
  {
    "naslov": "Apple Mac Pro MacPro 3,1 - v okvari",
    "cena": 120.0,
    "cpu": "",
    "gpu": "",
    "ram": "6GB RAM",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/apple-mac-pro-macpro-3.1-v-okvari-oglas-8520789"
  },
  {
    "naslov": "Lenovo Thinkcentre M720s SFF i5-8500 / 16GB / 1TB SSD / + monitor",
    "cena": 250.0,
    "cpu": "I5 3470",
    "gpu": "RTX 5090",
    "ram": "16GB DDR5",
    "ssd": "256GB NVME",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-thinkcentre-m720s-sff-i5-8500-16gb-1tb-ssd-monitor-oglas-15795894"
  },
  {
    "naslov": "AMD Ryzen 5 7600X Ryzen 7000 | AM5 | 6 Jedr 12 Niti | Do 5,3 GHz Boost",
    "cena": 189.0,
    "cpu": "RYZEN 5 7600X",
    "gpu": "RTX 3070",
    "ram": "32GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/amd-ryzen-5-7600x-ryzen-7000-am5-6-jedr-12-niti-5.3-ghz-boost-oglas-15795660"
  },
  {
    "naslov": "RAčUNALNIK XEON E5-2690, 24 GB, 250 GB SSD, DVDRW, RABLJEN",
    "cena": 220.0,
    "cpu": "RYZEN 5 1600",
    "gpu": "RTX 4090",
    "ram": "24 GB DDR3",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/racunalnik-xeon-e5-2690-24-gb-250-gb-ssd-dvdrw-rabljen-oglas-15795457"
  },
  {
    "naslov": "PC i5 14600kf DDR5 RTX3070",
    "cena": 990.0,
    "cpu": "I5 14600K",
    "gpu": "RTX3070",
    "ram": "32GB DDR5",
    "ssd": "250GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/pc-i5-14600kf-ddr5-rtx3070-oglas-15795403"
  },
  {
    "naslov": "MSI H81M-P33 / Intel i3 4170 / 8GB",
    "cena": 30.0,
    "cpu": "I3 4170",
    "gpu": "RTX 4080",
    "ram": "4GB DDR4",
    "ssd": "",
    "link": "https://www.bolha.com/racunalniski-kompleti/msi-h81m-p33-intel-i3-4170-8gb-oglas-14936252"
  },
  {
    "naslov": "Dell OptiPlex 3050",
    "cena": 75.0,
    "cpu": "I7 4770",
    "gpu": "GTX 1650",
    "ram": "16GB RAM",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/dell-namizni-racunalniki/2x-dell-optiplex-3050-oglas-15549543"
  },
  {
    "naslov": "Visoko zmogljiv računalnik Ryzen 5",
    "cena": 500.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 4080",
    "ram": "16GB DDR4",
    "ssd": "",
    "link": "https://www.bolha.com/racunalniski-kompleti/visoko-zmogljiv-racunalnik-ryzen-5-oglas-15794941"
  },
  {
    "naslov": "Ryzen 5 2600, 16GB DDR4, GTX 1060",
    "cena": 300.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 4080",
    "ram": "16GB DDR4",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/ryzen-5-2600-16gb-ddr4-gtx-1060-oglas-15794924"
  },
  {
    "naslov": "Namizni-stacionarni računalnik",
    "cena": 100.0,
    "cpu": "I5 8400",
    "gpu": "RTX 3050",
    "ram": "32GB DDR5",
    "ssd": "65GB SSD",
    "link": "https://www.bolha.com/asus-namizni-racunalniki/namizni-stacionarni-racunalnik-oglas-14393572"
  },
  {
    "naslov": "Gaming računalnik HP",
    "cena": 500.0,
    "cpu": "",
    "gpu": "",
    "ram": "",
    "ssd": "",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/gaming-racunalnik-hp-oglas-15794660"
  },
  {
    "naslov": "Prodam novejši delujoč računalnik z Windowsi 11 in MS Office",
    "cena": 50.0,
    "cpu": "",
    "gpu": "",
    "ram": "4GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/procesor-intel-core2/prodam-kompleten-namizni-racunalnik-oglas-13405882"
  },
  {
    "naslov": "Vrhunski Vsestranski Gaming Računalnik",
    "cena": 2100.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "RTX 5070",
    "ram": "16GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/vrhunski-vsestranski-gaming-racunalnik-oglas-15794496"
  },
  {
    "naslov": "Pentium III (3) 500 MHz, 128 MB RAM, 40 GB disk, Windows 2000",
    "cena": 65.0,
    "cpu": "PENTIUM 1",
    "gpu": "",
    "ram": "3GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/procesor-intel-pentium/pentium-iii-3-500-mhz-128-mb-ram-40-gb-disk-windows-2000-oglas-15794480"
  },
  {
    "naslov": "Intel nettop NUC kit i37100U NUC7I3BNH / 12GB / 128GB SSD",
    "cena": 175.0,
    "cpu": "RYZEN 9 8945",
    "gpu": "RTX 4070",
    "ram": "8GB DDR4",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/intel-nettop-nuc-kit-i37100u-nuc7i3bnh-4gb-128gb-ssd-oglas-15389696"
  },
  {
    "naslov": "Prodam računalnik i5-9400 / 8GB DDR4 / 512GB SSD NVMe",
    "cena": 215.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "GTX 1050T",
    "ram": "8GB DDR4",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/prodam-racunalnik-i5-9400-8gb-ddr4-512gb-ssd-nvme-oglas-15794259"
  },
  {
    "naslov": "Prodam računalnik i3-9100F / 8GB DDR4 / 512GB SSD NVMe",
    "cena": 185.0,
    "cpu": "RYZEN 7 5800X",
    "gpu": "RTX3070",
    "ram": "8GB DDR4",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/prodam-racunalnik-i3-9100f-8gb-ddr4-512gb-ssd-nvme-oglas-15794233"
  },
  {
    "naslov": "PCplus-Gamer R5-5600RX 1TB",
    "cena": 800.0,
    "cpu": "RYZEN 7 5700X",
    "gpu": "RTX 4060T",
    "ram": "32GB DDR5",
    "ssd": "60GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/pcplus-gamer-r5-5600rx-1tb-oglas-15794132"
  },
  {
    "naslov": "Računalniški sistem Intel",
    "cena": 330.0,
    "cpu": "RYZEN 5 7600X",
    "gpu": "RTX 3070",
    "ram": "8GB DDR4",
    "ssd": "256GB NVME",
    "link": "https://www.bolha.com/procesor-intel-core-i3/racunalniski-sistem-intel-oglas-15793856"
  },
  {
    "naslov": "Mini računalnik - INTEL NUC i3",
    "cena": 150.0,
    "cpu": "I3 5005",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "120 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/mini-racunalnik-intel-nuc-i3-oglas-12267237"
  },
  {
    "naslov": "Namizni računalnik Lenovo",
    "cena": 100.0,
    "cpu": "I5 9400F",
    "gpu": "GTX 1050T",
    "ram": "8 GB DDR3",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/namizni-racunalnik-lenovo-oglas-14616203"
  },
  {
    "naslov": "iMac 27\" mid 2011",
    "cena": 250.0,
    "cpu": "",
    "gpu": "",
    "ram": "32 GB RAM",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/imac-27-mid-2011-oglas-12650262"
  },
  {
    "naslov": "Prodam računalnik Aero skupaj z monitorjem, miško in tipkovnico",
    "cena": 290.0,
    "cpu": "RYZEN 7 7800X",
    "gpu": "RX 6800",
    "ram": "32GB DDR5",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/prodam-racunalnik-aero-skupaj-z-monitorjem-misko-in-tipkovnico-oglas-15793276"
  },
  {
    "naslov": "All in one računalnik Lenovo IdeaCentre 3",
    "cena": 350.0,
    "cpu": "",
    "gpu": "GTX 1050",
    "ram": "16GB RAM",
    "ssd": "8 GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/all-in-one-racunalnik-lenovo-ideacentre-3-oglas-11567792"
  },
  {
    "naslov": "RAČUNALNIK ZX SPECTRUM",
    "cena": 130.0,
    "cpu": "RYZEN 7 7800X",
    "gpu": "RTX 3060",
    "ram": "32GB DDR5",
    "ssd": "",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalnik-zx-spectrum-oglas-15366506"
  },
  {
    "naslov": "Stacionarni računalnik",
    "cena": 170.0,
    "cpu": "RYZEN 5 1600",
    "gpu": "RTX 2060",
    "ram": "8GB DDR4",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/stacionarni-racunalnik-oglas-15531347"
  },
  {
    "naslov": "Prenosnik Lenovo",
    "cena": 1.0,
    "cpu": "CELERON 2957",
    "gpu": "RTX 2060",
    "ram": "4GB DDR3",
    "ssd": "250GB HDD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/prenosnik-lenovo-oglas-15463448"
  },
  {
    "naslov": "HP 800 G2 i5-6500T SFF i5 / 8GB / 256 GB SSD",
    "cena": 190.0,
    "cpu": "I3 6100",
    "gpu": "",
    "ram": "16 GB DDR5",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-800-g2-i5-6500t-sff-i5-8gb-256-gb-ssd-oglas-12206140"
  },
  {
    "naslov": "HP EliteDesk 800 G2 TWR (Samsung)",
    "cena": 80.0,
    "cpu": "I5 7500",
    "gpu": "",
    "ram": "16GB DDR3",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-elitedesk-g2-800-twr-samsung-oglas-15792521"
  },
  {
    "naslov": "HP ProDesk 400 G2 MT i5 / 8GB / 512 GB SSD + 1TB HDD",
    "cena": 250.0,
    "cpu": "PENTIUM 1",
    "gpu": "RTX 3060T",
    "ram": "32GB RAM",
    "ssd": "512 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-400-g2-mt-i5-8gb-512-gb-ssd-1tb-hdd-oglas-15614018"
  },
  {
    "naslov": "HP EliteDesk 800 G3 Micro i3-6100T 8GB 256 GB SSD",
    "cena": 150.0,
    "cpu": "I37100",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-elitedesk-800-g3-micro-i3-6100t-8gb-256-gb-ssd-oglas-15297136"
  },
  {
    "naslov": "HP Compaq Pro 6300 SFF i5 / 8GB / 256 GB",
    "cena": 100.0,
    "cpu": "I5 6400",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-compaq-pro-6300-sff-i5-8gb-256-gb-oglas-14890650"
  },
  {
    "naslov": "Aple a-1312 27\"",
    "cena": 50.0,
    "cpu": "",
    "gpu": "",
    "ram": "4GB DDR2",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/aple-a-1312-27-oglas-1137261"
  },
  {
    "naslov": "HP Z8 G4 WORKSTATION – 2x Xeon Gold / 128GB RAM / NVMe – TOP za V-Ray,",
    "cena": 1900.0,
    "cpu": "I7 8700",
    "gpu": "RTX 2060",
    "ram": "64 GB DDR4",
    "ssd": "512 GB NVME",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/delovna-postaja-hp-z8-g4-oglas-11637346"
  },
  {
    "naslov": "Kompaktni mini računalnik - Sapphire Edge HD4 C847",
    "cena": 25.0,
    "cpu": "I3 9100",
    "gpu": "",
    "ram": "4 GB DDR3",
    "ssd": "96 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-celeron/sapphire-edge-hd4-c847-kompaktni-mini-racunalnik-oglas-14943544"
  },
  {
    "naslov": "I3-8100/ 8 GB DDR4/SSD 250GB+500GB HDD/GT 1030  2 GB",
    "cena": 160.0,
    "cpu": "I3 7100",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "128 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/light-gaming-1080p-i3-8100-8-gb-ddr4-ssd-250gb-500gb-hdd-gt-1030-2gb-oglas-15624031"
  },
  {
    "naslov": "Računalnik  POS Terminal",
    "cena": 110.0,
    "cpu": "I3 8100",
    "gpu": "",
    "ram": "8GB DDR4",
    "ssd": "256GB M.2",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalnik-oglas-13027719"
  },
  {
    "naslov": "Gaming Računalnik MSI",
    "cena": 150.0,
    "cpu": "RYZEN 7 2700",
    "gpu": "GTX 1070",
    "ram": "24 GB RAM",
    "ssd": "120 GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/gaming-racunalnik-msi-oglas-15370401"
  },
  {
    "naslov": "Lenovo Tiny All in one računalnik in monitor v kompletu",
    "cena": 550.0,
    "cpu": "RYZEN 7 7800X",
    "gpu": "RTX 3060",
    "ram": "32GB DDR5",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/lenovo-tiny-all-in-one-racunalnik-in-monitor-v-kompletu-oglas-15425488"
  },
  {
    "naslov": "Fujitsu Esprimo D958 E85+",
    "cena": 120.0,
    "cpu": "I5 8400",
    "gpu": "RTX 3050",
    "ram": "16GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/fujitsu-siemens-namizni-racunalniki/fujitsu-esprimo-d958-e85-oglas-15567847"
  },
  {
    "naslov": "Imac 27 2011",
    "cena": 130.0,
    "cpu": "",
    "gpu": "",
    "ram": "16GB RAM",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/imac-27-2011-oglas-15541388"
  },
  {
    "naslov": "Lenovo L340 Gaming",
    "cena": 260.0,
    "cpu": "RYZEN 5 3550",
    "gpu": "RTX 3070T",
    "ram": "32GB DDR5",
    "ssd": "512 GB NVME",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-l340-gaming-oglas-15745658"
  },
  {
    "naslov": "HP ProBook 640 G5",
    "cena": 130.0,
    "cpu": "I5 6200",
    "gpu": "",
    "ram": "16 GB RAM",
    "ssd": "512 GB NVME",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-probook-640-g5-oglas-15745654"
  },
  {
    "naslov": "PC računalnik, ekran Dell Ekran U2718Q IPS, tipkovnica miška",
    "cena": 900.0,
    "cpu": "RYZEN 7 8745",
    "gpu": "RTX 3070",
    "ram": "32GB DDR5",
    "ssd": "500GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/pc-racunalnik-ekran-dell-ekran-u2718q-ips-tipkovnica-miska-oglas-14363764"
  },
  {
    "naslov": "Namizni računalnik Intel Core i7 - 6700 CPU 3.40GHz",
    "cena": 230.0,
    "cpu": "I7 6700",
    "gpu": "RTX 4060",
    "ram": "16 GB DDR4",
    "ssd": "180GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i7/namizni-racunalnik-intel-core-i7-6700-cpu-3.40ghz-oglas-15703428"
  },
  {
    "naslov": "Namizni računalnik",
    "cena": 30.0,
    "cpu": "I5 3450",
    "gpu": "RX6600X",
    "ram": "16GB DDR3",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/namizni-racunalnik-oglas-15787025"
  },
  {
    "naslov": "HP EliteDesk 800 G2 TWR (Apacer)",
    "cena": 100.0,
    "cpu": "I5 7500",
    "gpu": "",
    "ram": "16GB DDR3",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-elitedesk-g2-800-twr-oglas-15790929"
  },
  {
    "naslov": "Eee pc laptop 10' lenovo15'",
    "cena": 50.0,
    "cpu": "",
    "gpu": "",
    "ram": "8GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/procesor-intel-atom/eee-pc-laptop-10-oglas-15042135"
  },
  {
    "naslov": "Lenovo IdeaCentre 3 AIO 24\" AMD Ryzen, 16GB RAM, Radeon Vega, NVME SSD",
    "cena": 320.0,
    "cpu": "RYZEN 3 4300",
    "gpu": "",
    "ram": "16GB DDR4",
    "ssd": "256GB NVME",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-ideacentre-3-aio-24-amd-ryzen-oglas-13977494"
  },
  {
    "naslov": "GAMING RAČUNALNIK – Ryzen 3 2300X / 16GB RAM / RX 570 4GB",
    "cena": 190.0,
    "cpu": "RYZEN 3 2300X",
    "gpu": "RTX 3070",
    "ram": "16GB DDR4",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/gaming-racunalnik-ryzen-3-2300x-16gb-ram-rx-570-4gb-oglas-15790492"
  },
  {
    "naslov": "Osebni računalnik",
    "cena": 15.0,
    "cpu": "I5 3470",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalniski-komplet-oglas-6772857"
  },
  {
    "naslov": "Intel nuc/intel i3 5005u/8gb/120gb ssd",
    "cena": 75.0,
    "cpu": "I3 5005",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "120GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i3/intel-nuc-intel-i3-5005u-8gb-120gb-ssd-oglas-15790219"
  },
  {
    "naslov": "HP ProDesk 600 G2 SFF I5 6400, 8 Gb RAM, 500 Gb HDD, WIN 10",
    "cena": 150.0,
    "cpu": "I5 6400",
    "gpu": "RX580",
    "ram": "16GB DDR3",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-600-g2-sff-i5-6400-8-gb-ram-500-gb-hdd-win-10-oglas-11134855"
  },
  {
    "naslov": "HP PRODESK SFF I3 6100, 8gb RAM, 500gb HDD, DVD-RW, WIN 10",
    "cena": 80.0,
    "cpu": "I3 6100",
    "gpu": "",
    "ram": "16 GB DDR5",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-sff-i3-6100-8gb-ram-500gb-hdd-dvd-rw-win-10-oglas-11134810"
  },
  {
    "naslov": "Računalniški komplet - računalnik, monitor, miška, tipkovnica, zvočnik",
    "cena": 60.0,
    "cpu": "I7 7700",
    "gpu": "GTX 1650",
    "ram": "8GB DDR4",
    "ssd": "256GB M.2",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalniski-komplet-racunalnik-monitor-miska-tipkovnica-zvocnik-oglas-15627136"
  },
  {
    "naslov": "Gaming/workstation računalnik",
    "cena": 300.0,
    "cpu": "RYZEN 5 1600",
    "gpu": "RTX 5090",
    "ram": "2GBDDR2",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/gaming-workstation-racunalnik-oglas-8379764"
  },
  {
    "naslov": "Računalnik / Server xeon 8c 64gb",
    "cena": 200.0,
    "cpu": "RYZEN 5 5600",
    "gpu": "RTX 4090",
    "ram": "32GB DDR5",
    "ssd": "",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalnik-server-oglas-14408685"
  },
  {
    "naslov": "Beelink mini pc Intel 16gb ram",
    "cena": 130.0,
    "cpu": "I5 6500",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/nettopi-namizni-racunalniki/beelink-mini-pc-intel-16gb-ram-oglas-14908898"
  },
  {
    "naslov": "Gaming PC RTX 3080ti",
    "cena": 1000.0,
    "cpu": "RYZEN 5 5600X",
    "gpu": "RTX 3080T",
    "ram": "16GB DDR4",
    "ssd": "",
    "link": "https://www.bolha.com/racunalniski-kompleti/gaming-pc-oglas-14616148"
  },
  {
    "naslov": "PC Xeon X5670 6c/12t, 16GB ram, Radeon HD 6670, 60gb ssd,",
    "cena": 150.0,
    "cpu": "I5 12400F",
    "gpu": "RTX 3070",
    "ram": "8GB DDR3",
    "ssd": "60GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/pc-xeon-x5670-6c-12t-16gb-ram-radeon-hd-6670-60gb-ssd-1.5tb-hdd-oglas-14424495"
  },
  {
    "naslov": "PC Xeon E5-2650 v2 8core / 1060 6gb / 32gb ram",
    "cena": 150.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "RTX 4090",
    "ram": "8 GB DDR4",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/pc-xeon-e5-2650-v2-8core-1060-6gb-32gb-ram-oglas-14434804"
  },
  {
    "naslov": "Server / AI Lab 128gb ram, rtx 4090, Xeon E5-2696 v3 18c/36t",
    "cena": 3500.0,
    "cpu": "RYZEN 5 3600",
    "gpu": "RTX 4090",
    "ram": "16GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/server-ai-lab-128gb-ram-rtx-4090-oglas-14379630"
  },
  {
    "naslov": "Računalnik - RAČUNSKI STROJČEK, namizni kalkulator Casio z izpisom",
    "cena": 55.0,
    "cpu": "",
    "gpu": "",
    "ram": "12GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/ostali-racunalniki/racunalnik-racunski-strojcek-namizni-kalkulator-casio-z-izpisom-oglas-13066077"
  },
  {
    "naslov": "Gaming Računalnik I7 8700K 32GB  Rtx 4060 8gb 2TB ssd Ljubljana moste",
    "cena": 750.0,
    "cpu": "RYZEN 5 4500",
    "gpu": "RTX 4060",
    "ram": "32GB DDR4",
    "ssd": "180GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i7/gaming-racunalnik-i7-8700k-32gb-ram-1tb-ssd-ljubljana-moste-oglas-12694225"
  },
  {
    "naslov": "ITX Gaming PC Dan Case A4 SFX, 32GB RAM, 1TB NVME, Ryzen 5, RX5700",
    "cena": 760.0,
    "cpu": "RYZEN 5 5600",
    "gpu": "RTX 5060",
    "ram": "32GB DDR4",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/procesor-amd-ryzen/itx-gaming-pc-dan-case-a4-sfx-32gb-ram-2tb-ssd-ryzen-5-rx5700-oglas-15616581"
  },
  {
    "naslov": "Prodam gaming računalnik i5 4590, 12Gb ram, R9 270X Hawk, Asus Q87M-E",
    "cena": 180.0,
    "cpu": "I5 4590",
    "gpu": "RTX 4060",
    "ram": "12 GB DDR3",
    "ssd": "250 GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/prodam-gaming-racunalnik-i5-4590-12gb-ram-r9-270x-hawk-asus-q87m-e-oglas-15789615"
  },
  {
    "naslov": "LENOVO ideacenter AIO 300-23ISU",
    "cena": 130.0,
    "cpu": "I3 6100",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "120 GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-ideacenter-aio-300-23isu-oglas-15112562"
  },
  {
    "naslov": "Najmočnejši in najhitrejši pc2 za 50€ z monitorjem tipkovnico in miško",
    "cena": 49.0,
    "cpu": "I5 4590",
    "gpu": "GTX 1060",
    "ram": "16GB DDR5",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/najmocnejsi-in-najhitrejsi-pc2-50-z-monitorjem-tipkovnico-in-misko-oglas-15789426"
  },
  {
    "naslov": "Gaming namizni računalnik + monitor z vso opremo",
    "cena": 950.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 4080",
    "ram": "16GB DDR4",
    "ssd": "500 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/gaming-namizni-racunalnik-z-vso-opremo-oglas-15259523"
  },
  {
    "naslov": "Namizni računalnik I5 3450 CPU, SSD 111GB + HD 1TB",
    "cena": 80.0,
    "cpu": "I5 3450",
    "gpu": "RTX 3080",
    "ram": "8GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/namizni-racunalnik-i5-3450-cpu-ssd-111gb-hd-1tb-oglas-15268689"
  },
  {
    "naslov": "Računalnik Apple iMac 27', Late 2013",
    "cena": 330.0,
    "cpu": "",
    "gpu": "",
    "ram": "16GB RAM",
    "ssd": "512GB SSD",
    "link": "https://www.bolha.com/apple-namizni-racunalniki/racunalnik-apple-imac-27-late-2013-oglas-13542327"
  },
  {
    "naslov": "HP EliteDesk 800 G2 TWR (Intel)",
    "cena": 100.0,
    "cpu": "I5 7500",
    "gpu": "RTX5070",
    "ram": "16GB DDR3",
    "ssd": "180GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-elitedesk-g2-800-twr-i5-16gb-960-oglas-15789183"
  },
  {
    "naslov": "Tadej",
    "cena": 300.0,
    "cpu": "RYZEN 5 2600",
    "gpu": "RTX 3060",
    "ram": "16GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/tadej-oglas-15789154"
  },
  {
    "naslov": "Najmočnejši in najhitrejši pc za 50€ z monitorjem tipkovnico in miško",
    "cena": 49.0,
    "cpu": "I5 4590",
    "gpu": "",
    "ram": "16GB DDR5",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/procesor-intel-core-i5/najmocnejsi-in-najhitrejsi-pc-50-z-monitorjem-tipkovnico-in-misko-oglas-15789103"
  },
  {
    "naslov": "HP 290 G1 - i5 7500, 8GB ram, Wifi, Windows 11",
    "cena": 99.0,
    "cpu": "I5 7500",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-290-g1-mt-business-racunalnik-win-11-oglas-15646767"
  },
  {
    "naslov": "računalnik z monitorjem, miško in tipkovnico. (komplet oprema)",
    "cena": 80.0,
    "cpu": "I3 8100",
    "gpu": "GTX 1650",
    "ram": "8GB DDR4",
    "ssd": "224 GB SSD",
    "link": "https://www.bolha.com/racunalniski-kompleti/racunalnik-z-monitorjem-misko-in-tipkovnico-komplet-oprema-oglas-15788847"
  },
  {
    "naslov": "HP Prodesk mini PC racunalnik i5/ 8GB RAM/ SSD",
    "cena": 150.0,
    "cpu": "I5 6500",
    "gpu": "",
    "ram": "8 GB DDR4",
    "ssd": "256GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-prodesk-mini-pc-racunalnik-i5-8gb-ram-ssd-oglas-13761541"
  },
  {
    "naslov": "HP Z440 Intel 8-Core | 32GB RAM | 1TB SSD | Nvidia RTX 3060Ti",
    "cena": 598.0,
    "cpu": "RYZEN 5 8400",
    "gpu": "RTX 3060T",
    "ram": "32GB DDR4",
    "ssd": "256 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-z440-intel-8-core-32gb-ddr4-1tb-ssd-nvidia-rtx-3060ti-oglas-15744226"
  },
  {
    "naslov": "HP ELITEDESK TOWER i5 *16GB RAM *SSD DISK",
    "cena": 190.0,
    "cpu": "I5 7500",
    "gpu": "",
    "ram": "16GB DDR4",
    "ssd": "75008GBSSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/osebni-racunalnik-hp-elitedesk-tower-i5-16gb-ram-ssd-disk-wifi-oglas-15545411"
  },
  {
    "naslov": "Namizni racunalnik hp s vsemi dodatki +dostavo",
    "cena": 50.0,
    "cpu": "I3 6100",
    "gpu": "RTX5070",
    "ram": "8GB DDR4",
    "ssd": "480GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/namizni-racunalnik-hp-vsemi-dodatki-dostavo-oglas-15375658"
  },
  {
    "naslov": "NOVO - Računalnik Intel CELERON 900 MHz - ( Prvi lastnik ) - Kot novo",
    "cena": 130.0,
    "cpu": "I5 4570",
    "gpu": "",
    "ram": "4GB DDR3",
    "ssd": "",
    "link": "https://www.bolha.com/procesor-intel-celeron/racunalnik-intel-celeron-900-mhz-oglas-10082775"
  },
  {
    "naslov": "Lenovo M910T | G4400T | 4GB | 250GB HDD",
    "cena": 30.0,
    "cpu": "I5 2500",
    "gpu": "RTX 4050",
    "ram": "4GB DDR4",
    "ssd": "16GB SSD",
    "link": "https://www.bolha.com/ibm-lenovo-namizni-racunalniki/lenovo-m910t-g4400t-4gb-250gb-hdd-oglas-15787829"
  },
  {
    "naslov": "Vintage računalnik Compaq Deskpro",
    "cena": 59.0,
    "cpu": "",
    "gpu": "",
    "ram": "8GB DDR3",
    "ssd": "128GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/vintage-racunalnik-compaq-deskpro-oglas-14097814"
  },
  {
    "naslov": "Vintage star računalnik,cd Rom, disketnik, PC kišta,",
    "cena": 39.0,
    "cpu": "",
    "gpu": "",
    "ram": "12GB RAM",
    "ssd": "",
    "link": "https://www.bolha.com/ostali-racunalniki/vintage-star-racunalnik-cd-rom-disketnik-pc-kista-oglas-14106101"
  },
  {
    "naslov": "9600xt 14600kf gaming racunalnik",
    "cena": 850.0,
    "cpu": "RYZEN 7 5700X",
    "gpu": "RTX 4070",
    "ram": "16GB RAM",
    "ssd": "16GB SSD",
    "link": "https://www.bolha.com/ostali-racunalniki/9600-xt-14600kf-gaming-racunalnik-oglas-15787751"
  },
  {
    "naslov": "Osebni računalnik Intel I3 Fujitsu Esprimo P500 E85+ SSD 240 nov",
    "cena": 65.0,
    "cpu": "I3 4130",
    "gpu": "RTX 3050",
    "ram": "8 GB DDR4",
    "ssd": "240GB SSD",
    "link": "https://www.bolha.com/fujitsu-siemens-namizni-racunalniki/osebni-racunalnik-fujitsu-siemens-esprimo-p500-e85-oglas-10701792"
  },
  {
    "naslov": "Fujitsu miniaturni računalnik 4GB/128GB 2x RS-232",
    "cena": 100.0,
    "cpu": "I7 4770",
    "gpu": "",
    "ram": "4GB DDR3",
    "ssd": "",
    "link": "https://www.bolha.com/fujitsu-siemens-namizni-racunalniki/fujitsu-futro-s900-miniaturni-racunalnik-win-10-opcija-oglas-596311"
  },
  {
    "naslov": "Hewlett-Packard HP Pro 3500 MT (Intel Core i3, 8GB RAM, SSD/HDD)",
    "cena": 70.0,
    "cpu": "RYZEN 5 1600X",
    "gpu": "GTX 1070",
    "ram": "16GB DDR3",
    "ssd": "240 GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hewlett-packard-hp-pro-3500-mt-intel-core-i3-8gb-ram-ssd-hdd-hdmi-oglas-10356133"
  },
  {
    "naslov": "HP EliteDesk 800 G2 TWR (4x)",
    "cena": 30.0,
    "cpu": "I7 4770",
    "gpu": "",
    "ram": "10GB RAM",
    "ssd": "480GB SSD",
    "link": "https://www.bolha.com/hp-compaq-namizni-racunalniki/hp-elitedesk-800-g2-twr-4x-oglas-15787510"
  }
];