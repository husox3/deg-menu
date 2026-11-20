// Deg Coffee Company menüsü. Fiyat değiştirmek için sadece bu dosyayı düzenleyip ./yukle.sh çalıştır.
// Ürün: [ad, fiyat, içerik açıklaması]. renk: grup rengi (index.html içindeki RENK listesi).
// "one" listesi: sol/sağ paneldeki çizimle dönen öne çıkan ürünler (ad, menüdeki adla birebir aynı olmalı).
window.MENU = {
  left: {
    baslik: "SICAK İÇECEKLER",
    alt: "Sıcacık bir mola",
    // alttaki şerit (kasa: Çaylar)
    serit: { ad: "Bitki Çayları", foto: "bitki-cayi", renk: "adacayi", urunler: [
        ["Ada Çayı", 140], ["Ihlamur", 140], ["Yeşil Çay", 140], ["Elma Çayı", 140], ["Nane Limon", 140]
      ]},
    one: [
      ["cappuccino", "Cappuccino"], ["latte", "Latte"], ["turk", "Türk Kahvesi"],
      ["cikolata", "Belçika Sıcak Çikolata"], ["espresso", "Espresso Double"], ["cay", "İnce Belli Çay"]
    ],
    gruplar: [
      [
        { ad: "Espresso Bazlı", ikon: "cekirdek", renk: "kahve", urunler: [
          ["Espresso Single", 125, "Tek shot yoğun espresso"], ["Espresso Double", 145, "Çift shot espresso"], ["Espresso Macchiato", 150, "Espresso, bir kaşık süt köpüğü"],
          ["Cortado", 175, "Espresso ve eşit miktarda sıcak süt"], ["Americano", 180, "Espresso ve sıcak su"], ["Flat White", 205, "Çift espresso, ince kadifemsi süt"],
          ["Cappuccino", 200, "Espresso, sıcak süt, bol süt köpüğü"], ["Latte", 200, "Espresso ve bol sıcak süt"]
        ]},
        { ad: "Çikolatalı", ikon: "cikolata", renk: "cikolata", urunler: [
          ["Sıcak Çikolata", 230, "Çikolata, sıcak süt"], ["Belçika Sıcak Çikolata", 240, "Belçika çikolatası, sıcak süt"],
          ["Belçika White Mocha", 250, "Espresso, beyaz Belçika çikolatası, süt"], ["Belçika Mocha", 250, "Espresso, Belçika çikolatası, süt"]
        ]}
      ],
      [
        { ad: "Aromalı", ikon: "yaprak", renk: "karamel", urunler: [
          ["Karamel Macchiato", 220, "Süt, vanilya, espresso, karamel sos"], ["Hazelnut Latte", 215, "Latte, fındık aroması"], ["Toffee Nut Latte", 215, "Latte, toffee ve fındık aroması"],
          ["Cinnamon", 210, "Latte, tarçın aroması"], ["Chai Tea Latte", 220, "Baharatlı chai, sıcak süt"], ["Matcha", 240, "Matcha, sıcak süt"]
        ]},
        { ad: "Geleneksel & Demleme", ikon: "cezve", renk: "adacayi", urunler: [
          ["Türk Kahvesi", 180, "Cezvede geleneksel usulle pişirilir"], ["Türk Kahvesi Duble", 210, "Duble porsiyon Türk kahvesi"], ["Filtre Kahve", 155, "Taze demlenmiş filtre kahve"],
          ["Filtre Kahve Sütlü", 155, "Filtre kahve, sıcak süt"], ["İnce Belli Çay", 90, "Taze demlenmiş siyah çay"], ["Kupa Çay", 110, "Kupada siyah çay"],
          ["Salep", 200, "Salep, sıcak süt, tarçın"]
        ]}
      ]
    ]
  },
  center: {
    // Afişler: sadece LG'de (orta ekran) akışın sonunda, her biri kendi süresi kadar gösterilir.
    // Yeni afiş: resmi www/afis/ içine koy, buraya bir satır ekle.
    afisler: [
      { dosya: "matcha.jpg", sure: 10 }
    ],
    // kombolarda fotoğraf: gerçek kombo fotoğrafları gelene kadar kapalı (false)
    komboFoto: false,
    // Kombolar: [tatlı, içecek]. Fiyat = ikisinin toplamı, en yakın 50 TL'ye AŞAĞI yuvarlanır (385→350, 420→400).
    kombolar: [
      ["San Sebastian", "Filtre Kahve"],
      ["Fıstıklı Dubai Mono", "Türk Kahvesi"],
      ["Tiramisu Cheesecake", "Latte"],
      ["Beyaz Çikolatalı Brownie", "Iced Americano"],
      ["Mozaik Pasta", "İnce Belli Çay"],
      ["Limonlu Cheesecake", "Filtre Kahve"]
    ],
    tatlilar: [
      ["Beyaz Çikolatalı Brownie", 220, "brownie"], ["Limonlu Cheesecake", 200, "limonlu-cheesecake"],
      ["Fıstıklı Dubai Mono", 240, "dubai-mono"], ["Crispy Mono Pasta", 230, "crispy-mono"],
      ["Red Loves", 230, "red-loves"], ["San Sebastian", 230, "san-sebastian"],
      ["Tiramisu Cheesecake", 210, "tiramisu-cheesecake"], ["Devils Pasta", 210, "devils"],
      ["Mozaik Pasta", 230, "mozaik"]
    ],
    diger: [
      { ad: "Sandviçler", ikon: "sandvic", urunler: [
        ["4 Peynirli Bun Sandviç", 240], ["Dana Jambonlu Bagel", 240], ["Pollo Panini", 250],
        ["Cheddarlı Hindi Füme Panini", 260], ["İtalyan Sandviç", 260], ["Focaccia Suda Mozarella", 280]
      ]},
      { ad: "Kasa Önü", ikon: "seker", urunler: [
        ["Protein Ocean (5 çeşit)", 130], ["Protein Stick", 130], ["Long Chips (Klasik / Acılı)", 130],
        ["Snickers (3 çeşit)", 150], ["ChocoBoo", 160], ["Melodi Çikolata", 80],
        ["Chupa Chups", 25], ["Bebeto", 5]
      ]}
    ],
    // içecek fotoğrafları (kombolarda)
    foto: { "Filtre Kahve": "filtre-kahve", "Türk Kahvesi": "turk-kahvesi", "Latte": "latte",
            "Iced Americano": "americano-ice", "İnce Belli Çay": "cay" }
  },
  right: {
    baslik: "SOĞUK İÇECEKLER",
    alt: "Serin bir mola",
    serit: { ad: "Meşrubat", ikon: "sise", renk: "turkuaz", urunler: [
        ["Su", 50], ["Cam Şişe Su", 90], ["Soda", 90], ["Limonlu Soda", 90], ["Uludağ Premium", 90],
        ["İçim Sütlü İçecek", 110], ["Tekina", 120], ["Redbull", 175]
      ]},
    one: [
      ["buzlu", "Iced Americano"], ["frappe", "Karamel Macchiato Ice"], ["kavanoz", "Latte Ice"],
      ["coldbrew", "Filtre Kahve Ice"], ["cikolataIce", "Mocha Ice"]
    ],
    gruplar: [
      [
        { ad: "Espresso Bazlı", ikon: "cekirdek", renk: "turkuaz", urunler: [
          ["Iced Americano", 195, "Espresso, soğuk su, buz"], ["Cortado Ice", 185, "Espresso, soğuk süt, buz"], ["Flat White Ice", 215, "Çift espresso, soğuk süt, buz"],
          ["Cappuccino Ice", 210, "Espresso, soğuk süt, süt köpüğü, buz"], ["Latte Ice", 210, "Espresso, bol soğuk süt, buz"]
        ]},
        { ad: "Demleme & Matcha", ikon: "damla", renk: "mavi", urunler: [
          ["Filtre Kahve Ice", 165, "Filtre kahve, buz"], ["Filtre Kahve Sütlü Ice", 165, "Filtre kahve, soğuk süt, buz"],
          ["Iced Matcha", 250, "Matcha, soğuk süt, buz"]
        ]}
      ],
      [
        { ad: "Aromalı", ikon: "yaprak", renk: "seftali", urunler: [
          ["Karamel Macchiato Ice", 230, "Süt, vanilya, espresso, karamel sos, buz"], ["Hazelnut Ice", 225, "Soğuk latte, fındık aroması"], ["Toffee Nut Ice", 235, "Soğuk latte, toffee aroması"],
          ["Chai Tea Latte Ice", 230, "Baharatlı chai, soğuk süt, buz"]
        ]},
        { ad: "Belçika Çikolatalı", ikon: "cikolata", renk: "cikolata", urunler: [
          ["Mocha Ice", 260, "Espresso, Belçika çikolatası, soğuk süt, buz"], ["White Chocolate Ice", 260, "Beyaz Belçika çikolatası, soğuk süt, buz"],
          ["White Chocolate Mocha Ice", 260, "Espresso, beyaz Belçika çikolatası, soğuk süt, buz"]
        ]},
        { ad: "Bubble Tea", ikon: "damla", renk: "adacayi", urunler: [
          ["Aloe Vera Bubble Tea", 240, "Aloe vera, tapyoka incileri"], ["Mango Lime Bubble Tea", 240, "Mango ve lime, tapyoka incileri"]
        ]}
      ]
    ]
  }
};
// Süreler (saniye): menü ekranı, araya giren logo, paneldeki öne çıkan ürünün değişme aralığı
// Tema: "normal" veya "yilbasi"
window.TEMA = "yilbasi";
window.SURE = { menu: 60, logo: 3, one: 7, kombo: 14, tatli: 30, diger: 20 };
