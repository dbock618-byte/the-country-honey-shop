const products = [
    {
        id: "prayer-cards",
        category: "Digital",
        name: "Country Mama Prayer Cards (Printable Set)",
        price: 7.97,
        image: "designs/prayer-cards/prayer-card-front-sunflower.png",
        buyLink: "https://buy.stripe.com/14AeVd5saeaNaPx1mhf3a00"
    },
    {
        id: "checklist-pack",
        category: "Digital",
        name: "Country Mama Daily Checklist Pack",
        price: 5.97,
        image: "designs/checklists/country-mama-daily-checklist.png",
        buyLink: "https://buy.stripe.com/bJe8wP1bU5Eh7Dl7KFf3a01"
    },
    {
        id: "faith-journal",
        category: "Digital",
        name: "Wildflower Faith Scripture Journal",
        price: 9.97,
        image: "designs/journals/wildflower-faith-journal-cover.png",
        buyLink: "https://buy.stripe.com/28EcN57Ai1o1bTB7KFf3a02"
    },
    {
        id: "phone-wallpapers",
        category: "Digital",
        name: "Country Mama Phone Wallpaper Set",
        price: 3.97,
        image: "designs/wallpapers/sunflower-faith-wallpaper.png",
        buyLink: "https://buy.stripe.com/cNi4gzf2KgiV8HpaWRf3a03"
    },
    {
        id: "sticker-sheet-mama",
        category: "Digital",
        name: "Country Mama Printable Sticker Sheet",
        price: 4.97,
        image: "designs/stickers/country-mama-sticker-sheet.png",
        buyLink: "https://buy.stripe.com/cNi6oH1bU0jXg9R7KFf3a04"
    },
    {
        id: "sticker-sheet-faith",
        category: "Digital",
        name: "Wildflower Faith Printable Sticker Sheet",
        price: 4.97,
        image: "designs/stickers/wildflower-faith-sticker-sheet.png",
        buyLink: "https://buy.stripe.com/aFabJ11bUeaN8Hpghbf3a05"
    },
    // Digital products
    {
        id: "bible-verse-prints",
        category: "Digital",
        name: "Bible Verse Art Print Set (Digital)",
        price: 9.97,
        image: "designs/wallpapers/blessed-farmhouse-wallpaper.png",
        buyLink: "https://buy.stripe.com/eVqeVdg6Oc2FaPxaWRf3a0o"
    },
    // T-Shirts — using mockup images for professional look
    {
        id: "tshirt-cow-wildflower",
        category: "Shirts",
        name: "Country Mama T-Shirt (Cow + Wildflower)",
        price: 29.99,
        image: "designs/tshirts/cow-wildflower-tshirt.png",
        buyLink: "https://buy.stripe.com/cNicN507QaYBg9Re93f3a06"
    },
    {
        id: "tshirt-chicken-floral",
        category: "Shirts",
        name: "Country Mama T-Shirt (Chicken + Floral Wreath)",
        price: 29.99,
        image: "designs/tshirts/chicken-floral-tshirt.png",
        buyLink: "https://buy.stripe.com/cNi7sLcUC0jXg9R1mhf3a07"
    },
    {
        id: "tshirt-text",
        category: "Shirts",
        name: "Country Mama T-Shirt (Text Design)",
        price: 29.99,
        image: "designs/store-assets/country-mama-tshirt-mockup.png",
        buyLink: "https://buy.stripe.com/eVq28r07Qc2F9Lt4ytf3a08"
    },
    {
        id: "tshirt-floral-wreath",
        category: "Shirts",
        name: "Country Mama T-Shirt (Floral Wreath)",
        price: 29.99,
        image: "designs/store-assets/country-mama-wreath-tshirt-mockup.png",
        buyLink: "https://buy.stripe.com/00w7sL9Iq7Mpe1J3upf3a09"
    },
    {
        id: "tshirt-farm-wife",
        category: "Shirts",
        name: "Farm Wife T-Shirt",
        price: 29.99,
        image: "designs/tshirts/farm-wife-tee.png",
        buyLink: "https://buy.stripe.com/dRm4gzg6Od6Jg9R0idf3a0j"
    },
    {
        id: "tshirt-ranch-wife",
        category: "Shirts",
        name: "Ranch Wife T-Shirt",
        price: 29.99,
        image: "designs/store-assets/ranch-wife-tee-mockup.png",
        buyLink: "https://buy.stripe.com/4gM28r2fYfeR5vd2qlf3a0k"
    },
    {
        id: "tshirt-she-believed",
        category: "Shirts",
        name: "She Believed She Could T-Shirt",
        price: 29.99,
        image: "designs/tshirts/she-believed-tee.png",
        buyLink: "https://buy.stripe.com/6oU4gzaMuc2F7Dl8OJf3a0n"
    },
    // Hoodie
    {
        id: "hoodie-cow-print",
        category: "Shirts",
        name: "Cow Print Country Mama Hoodie",
        price: 39.99,
        image: "designs/tshirts/cow-print-hoodie-graphic.png",
        buyLink: "https://buy.stripe.com/9B6fZh3k28Qt0aT6GBf3a0m"
    },
    // Mugs — using mockup images for professional look
    {
        id: "mug-cow",
        category: "Mugs",
        name: "Country Mama Mug - Cow Print",
        price: 19.99,
        image: "designs/store-assets/cow-wrap-mug-mockup.png",
        buyLink: "https://buy.stripe.com/eVq3cv4o62s55vd0idf3a0a"
    },
    {
        id: "mug-floral",
        category: "Mugs",
        name: "Country Mama Mug - Floral & Faith",
        price: 19.99,
        image: "designs/mugs/floral-wrap-mug.png",
        buyLink: "https://buy.stripe.com/7sY14ndYGfeRaPxaWRf3a0b"
    },
    {
        id: "mug-chicken",
        category: "Mugs",
        name: "Country Mama Mug - Chicken Design",
        price: 19.99,
        image: "designs/mugs/chicken-wrap-mug.png",
        buyLink: "https://buy.stripe.com/3cI00j1bU7MpbTB6GBf3a0c"
    },
    {
        id: "mug-mama",
        category: "Mugs",
        name: "Country Mama Mug - Country Mama Design",
        price: 19.99,
        image: "designs/mugs/country-mama-wrap-mug.png",
        buyLink: "https://buy.stripe.com/28E14n2fY8Qt9Lt2qlf3a0d"
    },
    {
        id: "mug-coffee-jesus",
        category: "Mugs",
        name: "Coffee & Jesus Mug",
        price: 19.99,
        image: "designs/store-assets/coffee-jesus-mug-mockup.png",
        buyLink: "https://buy.stripe.com/28EfZh8EmeaNe1Jfd7f3a0l"
    },
    // Sticker Packs
    {
        id: "sticker-pack-mama",
        category: "Stickers",
        name: "Country Mama Sticker Pack (Physical)",
        price: 9.99,
        image: "designs/store-assets/country-mama-stickers-mockup.png",
        buyLink: "https://buy.stripe.com/cNi5kD3k23w9f5N1mhf3a0e"
    },
    {
        id: "sticker-pack-faith",
        category: "Stickers",
        name: "Wildflower Faith Sticker Pack (Physical)",
        price: 9.99,
        image: "designs/store-assets/country-mama-stickers-mockup.png",
        buyLink: "https://buy.stripe.com/4gMeVd4o65Ehg9R4ytf3a0f"
    },
    // 🆕 LIGHTER & BRIGHTER Products
    {
        id: "tshirt-sunshine-grace",
        category: "Shirts",
        name: "Sunshine & Grace T-Shirt",
        price: 29.99,
        image: "designs/bright/sunshine-grace-tee.png",
        buyLink: "https://buy.stripe.com/28E6oH6we8Qt0aTghbf3a0p"
    },
    {
        id: "tshirt-bloom-planted",
        category: "Shirts",
        name: "Bloom Where You're Planted T-Shirt",
        price: 29.99,
        image: "designs/bright/bloom-planted-tee.png",
        buyLink: "https://buy.stripe.com/5kQ3cv8Em3w99Lt6GBf3a0q"
    },
    {
        id: "tshirt-good-vibes",
        category: "Shirts",
        name: "Good Vibes & Farm Life T-Shirt",
        price: 29.99,
        image: "designs/bright/good-vibes-tee.png",
        buyLink: "https://buy.stripe.com/8x23cv1bU1o1e1Jc0Vf3a0r"
    },
    {
        id: "tshirt-wildflower-soul",
        category: "Shirts",
        name: "Wildflower Soul T-Shirt",
        price: 29.99,
        image: "designs/bright/wildflower-soul-tee.png",
        buyLink: "https://buy.stripe.com/9B68wP6we2s55vd9SNf3a0t"
    },
    {
        id: "mug-hello-sunshine",
        category: "Mugs",
        name: "Hello Sunshine Mug",
        price: 19.99,
        image: "designs/bright/hello-sunshine-mug.png",
        buyLink: "https://buy.stripe.com/9B600jdYG8Qt7Dl8OJf3a0s"
    },
    {
        id: "wallpaper-bright",
        category: "Digital",
        name: "Bright & Cheery Wallpaper Set (Digital)",
        price: 3.97,
        image: "designs/wallpapers/sunflower-faith-wallpaper.png",
        buyLink: "https://buy.stripe.com/cNifZhaMu3w9g9R9SNf3a0u"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}