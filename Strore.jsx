import React from 'react'
import { createContext, useState } from 'react'

export const BGContext = createContext();

function BG({ children }) {
    const Arr = [

        {
            bg:"https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/Master-banner-Horizontal.jpg"

        },

        {
            bg: "https://static.vecteezy.com/system/resources/previews/011/644/608/non_2x/diwali-discount-sale-banner-happy-diwali-online-shopping-banner-diwali-bumper-sale-free-vector.jpg"
        }
        ,
        {
            bg: "https://png.pngtree.com/template/20221212/ourmid/pngtree-happy-diwali-offers-banner-with-discount-details-image_1912034.jpg"
        }
        ,
        {
   bg:"https://www.arzaan.pk/cdn/shop/articles/Two-thirds-of-consumers-have-increased-online-shopping-because-of-the-coronavirus.png?v=1635174885"
        },
        {
            bg:"https://www.tastefulspace.com/wp-content/uploads/2022/05/online-shoppingdfghjkl.jpg"
        },
        {
            bg: "https://www.shutterstock.com/image-vector/diwali-festival-sale-design-template-260nw-1515608735.jpg"
        }

    ]


    let ShopAPI = [
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/sweatshirt/x/c/e/m-jhd0423mgpl19-juneberry-original-imagvgf6ehvav4bk.jpeg?q=70&crop=true",
            RS: 2475.00 ,
            TYPE: "F",
            NAME: "JACKET",
            DESC: "Full Sleeve Solid Men Long Jacket",
            ID: 1
        }
        ,
    
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/cap/u/w/m/free-cap-new-vastra-lok-original-imagjyt5hgxmkt2n.jpeg?q=70&crop=false",
            RS:  489 ,
            TYPE: "F",
            NAME: "Pixie Fashion",
            DESC: "Stylish and Handsome Mandarin Collar Half Sleeves",
            ID: 2
        }
        ,
        {
            URL: "https://images-eu.ssl-images-amazon.com/images/I/818UhQ1kpdL._AC_UL450_SR450,320_.jpg",
            RS: 12499.00 ,
            TYPE: "E",
            NAME: " realme narzo 60X 5G",
            DESC: " realme narzo Nebula Purple 6GB,128GB Storage )Up to 2TB External Memory |",
            ID: 3
        }
    
    
    
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/5/s/9-dx3705-001-9-nike-black-white-original-imagwfnrjdskbx6e.jpeg?q=70&crop=true",
            RS: 7095  ,
            TYPE: "F",
            NAME: "NIKE ",
            DESC: "Air Max INTRLK Lite Sneakers For Women  (Black)",
            ID: 4
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/d/l/-original-imagmdbwruane5th.jpeg?q=70&crop=false",
            RS:  7019 ,
            TYPE: "Fashion",
            NAME: "ADIDAS ",
            DESC: "ZNSARA Running Shoes For Women  (White)",
            ID: 5
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/x/x/-original-imaguy4ag7rbpshw.jpeg?q=70&crop=false",
            RS: 9999,
            TYPE: "E",
            NAME: "OPPO A18 ",
            DESC: "OPPO A18 (Glowing Black, 64 GB)  (4 GB RAM)#JustHere",
            ID: 6
    
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/l2tcfbk0/shirt/e/e/e/l-khsh000750-ketch-original-image2psaexg4yym.jpeg?q=70&crop=false",
            RS: 299,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Checkered Cut Away Collar Casual Shirt ",
            ID: 7
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/m/a/i/-original-imagrcjkpwzzbttr.jpeg?q=70&crop=true",
            RS: 280,
            TYPE: "F",
            NAME: "Watch",
            DESC: "Mesh Strap All Black Avatar Day and Date Functioning Quartz Analog Watch - For Men LS2917",
            ID: 8
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/joen7gw0/headphone/k/7/y/wooky-bass-10-in-ear-earphones-with-mic-original-imafavz8bugtfhhm.jpeg?q=70&crop=false",
            RS: 399,
            TYPE: "E",
            NAME: " Earphones",
            DESC: "Wooky Bass-10 In-Ear Earphones with Mic Wired Headset  (Black, In the Ear) ",
            ID: 9
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l2m78280/mobile-accessories-combo/u/g/m/penta-combo-5-urbbanbeats-original-imagdwyvgw6sfs5e.jpeg?q=70&crop=false",
            RS:  249 ,
            TYPE: "E",
            NAME: "headphone",
            DESC: "URBANBEATS True bass headphone with mic (composit membrane)beautiful case+eartips(pack of 2 Wired Headset  (Multicolor, In the Ear) ",
            ID: 10
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/kxqg2a80/muffler/o/p/v/free-rs-127-radhe-sales-original-imaga4jkke5whzmy.jpeg?q=70&crop=true",
            RS: 484,
            TYPE: "F",
            NAME: "Men Trunk",
            DESC: "Pack of 2 Uno Intellisoft Micro Modal Solid Men Trunk ",
            ID: 11
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/j/u/j/xl-plain-01-n-and-j-original-imagvjntjwpnzzj9.jpeg?q=70&crop=true",
            RS: 399,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Striped Spread Collar Casual Shirt",
            ID: 12
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-shirt/s/n/2/xl-01-aaradhya-enterprise-original-imagh8867j5sxhaz.jpeg?q=70&crop=true",
            RS: 427,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Striped Spread Collar Casual Shirt ",
            ID: 13
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/j/g/h/-original-imagtvq8wxhausyq.jpeg?q=70&crop=false",
            RS: 49990,
            TYPE: "E",
            NAME: "Laptop",
            DESC: "ASUS Vivobook 15 AMD Ryzen 7 Octa Core 5800HS - (16 GB/512 GB SSD/Windows 11 Home)",
            ID: 14
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/mouse/l/q/k/ms-0050-wired-usb-gaming-mouse-6-keys-7-led-color-backlit-fun-original-imagvz4hcrqkqhrp.jpeg?q=70&crop=false",
            RS: 399,
            TYPE: "E",
            NAME: "Mouse",
            DESC: "Frontech MS-0050 Wired USB Gaming Mouse |6 Keys |7-Led Color Backlit|Fun Playing| 3600DPI ",
            ID: 15
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/laptop-accessories-combo/c/k/7/set-of-5-keyboard-and-mouse-combo-with-usb-hub-c-type-otg-cable-original-imagubuhpsnynfk3.jpeg?q=70&crop=false",
            RS: 799,
            TYPE: "E",
            NAME: "Mouse",
            DESC: "The Originals Alive Set of 5 Keyboard and Mouse Combo with USB Hub, C-Type OTG",
            ID: 16
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/power-bank/2/u/0/-original-imagg3utpq9fj5ry.jpeg?q=70&crop=false",
            RS: 1299,
            TYPE: "E",
            NAME: "Power",
            DESC: "ORAIMO 20000 mAh Power Bank (20 w, Quick Charge 3.0, Power Delivery 2.0)  (Blue, Grey, Lithium Polymer)",
            ID: 17
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/kvr01ow0/power-bank/4/j/p/smart-power-pack-30000-t4-zofia-original-imag8kwjhue2rzg9.jpeg?q=70&crop=false",
            RS: 1999,
            TYPE: "E",
            NAME: "Power",
            DESC: "slainte 50000 mAh Power Bank (18 W, Fast Charging)  (Black, Lithium Polymer) ",
            ID: 18
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/diaper/o/s/l/-original-imagvdzzr8vfys9c.jpeg?q=70&crop=false",
            RS: 889,
            TYPE: "F",
            NAME: "BUMTUM",
            DESC: "BUMTUM Baby Diaper Pants Double Layer Leakage Protection High Absorb Technology - S  (156 Pieces) ",
            ID: 19
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/perfume/a/7/9/-original-imaggavzgyz2pezs.jpeg?q=70&crop=false",
            RS: 445,
            TYPE: "F",
            NAME: "Perfume",
            DESC: "PLAYBOY My VIP Story Eau de Toilette - 100 ml  (For Men)",
            ID: 20
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/face-wash/n/4/n/-original-imaguw7wqccmacrr.jpeg?q=70&crop=false",
            RS: 346,
            TYPE: "F",
            NAME: "FaceWash",
            DESC: "Simple Kind To Skin Refreshing Facial Wash (PACK OF 2) Face Wash  (300 ml)",
            ID: 21
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/fabric/r/4/t/no-2-35-m-unstitched-na-7-iwc-premium-fabrics-izzy-wear-clothing-original-imagwqwzvjhfa2av.jpeg?q=70&crop=false",
            RS: 329,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Unstitched Polycotton Shirt Fabric Printed",
            ID: 22
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/mangalsutra-tanmaniya/a/l/j/kk520-bhumi09-original-imagrpknzuvt78rz.jpeg?q=70&crop=false",
            RS: 199,
            TYPE: "F",
            NAME: "Nack",
            DESC: "Bhumi09 Fancy Combo of 3 Dailwear AD Stylish Gold Plated Mangalsutra for Women Brass Mangalsutra",
            ID: 23
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/electric-kettle/1/w/q/1-5l-zunvolt-original-imagnrgwdazgurvk.jpeg?q=70&crop=false",
            RS: 409,
            TYPE: "E",
            NAME: "Kettle",
            DESC: "ZunVolt 1.5L Electric Kettle  (1.5 L, Silver, Black)",
            ID: 24
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l5e81ow0/immersion-rod/h/g/d/2000-2022-blue-br-water-proof-shock-proof-mi-star-original-imagg399zedkvzjs.jpeg?q=70&crop=false",
            RS: 389,
            TYPE: "E",
            NAME: "Heater",
            DESC: "mi star classic 208 2000 W Shock Proof Immersion Heater Rod  (Water) ",
            ID: 25
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/iron/5/v/b/-original-imagrb793uzv9nhb.jpeg?q=70&crop=false",
            RS: 349,
            TYPE: "E",
            NAME: "Dry Iron",
            DESC: "Longway Kwid 1100 W Dry Iron  (Blue, White)",
            ID: 26
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/kwdv3bk0/cap/m/5/p/free-dual-cap-5-denolix-original-imag92rzvdd3a5qz.jpeg?q=70&crop=true",
            RS: 134,
            TYPE: "F",
            NAME: "Woven",
            DESC: "Woven Beanie  (Pack of 2)",
            ID: 27
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/brooch/y/5/z/-original-imagqhqnb9ebb3eb.jpeg?q=70&crop=true",
            RS: 106,
            TYPE: "F",
            NAME: "Brooch",
            DESC: "FIABLE COLLECTION Women's Brooches and Pins With Designer Kundan for Dupatta and Saree Brooch Brooch  (Gold, Red)",
            ID: 28
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/turban/q/p/6/12-free-knot-aashiyatrades-6-original-imagnzehwjzkvwsf.jpeg?q=70&crop=false",
            RS: 235,
            TYPE: "F",
            NAME: "Wraps",
            DESC: "AashiyaTrades Printed Head Wraps",
            ID: 29
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/l/t/z/m-av104stripe-blk-green-avolt-original-imagjfuwxqcyzw4u.jpeg?q=70&crop=true",
            RS: 399,
            TYPE: "F",
            NAME: "Pants",
            DESC: "Pack of 2 Men Solid Black, Green Track Pants",
            ID: 30
        }
        ,
        {
            URL: "https://bombaytrooper.com/wp-content/uploads/2022/11/BTFJ002-A.jpg",
            RS:  2475.00 ,
            TYPE: "F",
            NAME: "JACKET",
            DESC: "Full Sleeve Solid Men Long Jacket",
            ID: 31
        }
        ,
    
        {
            URL: "https://m.media-amazon.com/images/I/61IiivUibAL._AC_UL480_FMwebp_QL65_.jpg",
            RS:  489 ,
            TYPE: "F",
            NAME: "Pixie Fashion",
            DESC: "Stylish and Handsome Mandarin Collar Half Sleeves",
            ID: 32
        }
        ,
        {
            URL: "https://images-eu.ssl-images-amazon.com/images/I/818UhQ1kpdL._AC_UL450_SR450,320_.jpg",
            RS: 12499.00 ,
            TYPE: "E",
            NAME: " realme narzo 60X 5G",
            DESC: " realme narzo Nebula Purple 6GB,128GB Storage )Up to 2TB External Memory |",
            ID: 33
        }
    
    
    
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/5/s/9-dx3705-001-9-nike-black-white-original-imagwfnrjdskbx6e.jpeg?q=70&crop=true",
            RS: 7095,
            TYPE: "F",
            NAME: "NIKE ",
            DESC: "Air Max INTRLK Lite Sneakers For Women  (Black)",
            ID: 34
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/d/l/-original-imagmdbwruane5th.jpeg?q=70&crop=false",
            RS: 7019,
            TYPE: "Fashion",
            NAME: "ADIDAS ",
            DESC: "ZNSARA Running Shoes For Women  (White)",
            ID: 35
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/x/x/-original-imaguy4ag7rbpshw.jpeg?q=70&crop=false",
            RS: 9999  ,
            TYPE: "E",
            NAME: "OPPO A18 ",
            DESC: "OPPO A18 (Glowing Black, 64 GB)  (4 GB RAM)#JustHere",
            ID: 36
    
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/l2tcfbk0/shirt/e/e/e/l-khsh000750-ketch-original-image2psaexg4yym.jpeg?q=70&crop=false",
            RS: 299,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Checkered Cut Away Collar Casual Shirt ",
            ID: 37
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/m/a/i/-original-imagrcjkpwzzbttr.jpeg?q=70&crop=true",
            RS: 280,
            TYPE: "F",
            NAME: "Watch",
            DESC: "Mesh Strap All Black Avatar Day and Date Functioning Quartz Analog Watch - For Men LS2917",
            ID: 38
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/joen7gw0/headphone/k/7/y/wooky-bass-10-in-ear-earphones-with-mic-original-imafavz8bugtfhhm.jpeg?q=70&crop=false",
            RS: 399,
            TYPE: "E",
            NAME: " Earphones",
            DESC: "Wooky Bass-10 In-Ear Earphones with Mic Wired Headset  (Black, In the Ear) ",
            ID: 39
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l2m78280/mobile-accessories-combo/u/g/m/penta-combo-5-urbbanbeats-original-imagdwyvgw6sfs5e.jpeg?q=70&crop=false",
            RS: 249 ,
            TYPE: "E",
            NAME: "headphone",
            DESC: "URBANBEATS True bass headphone with mic (composit membrane)beautiful case+eartips(pack of 2 Wired Headset  (Multicolor, In the Ear) ",
            ID: 40
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/brief/v/t/n/s-2-xytrnk2pckn363-xyxx-original-imagkb79bvjmytdx.jpeg?q=70&crop=true",
            RS: 484,
            TYPE: "F",
            NAME: "Men Trunk",
            DESC: "Pack of 2 Uno Intellisoft Micro Modal Solid Men Trunk ",
            ID: 41
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/j/u/j/xl-plain-01-n-and-j-original-imagvjntjwpnzzj9.jpeg?q=70&crop=true",
            RS: 399,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Striped Spread Collar Casual Shirt",
            ID: 42
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-shirt/s/n/2/xl-01-aaradhya-enterprise-original-imagh8867j5sxhaz.jpeg?q=70&crop=true",
            RS: 427,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Striped Spread Collar Casual Shirt ",
            ID: 43
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/j/g/h/-original-imagtvq8wxhausyq.jpeg?q=70&crop=false",
            RS: 49990,
            TYPE: "E",
            NAME: "Laptop",
            DESC: "ASUS Vivobook 15 AMD Ryzen 7 Octa Core 5800HS - (16 GB/512 GB SSD/Windows 11 Home)",
            ID: 44
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/mouse/l/q/k/ms-0050-wired-usb-gaming-mouse-6-keys-7-led-color-backlit-fun-original-imagvz4hcrqkqhrp.jpeg?q=70&crop=false",
            RS: 399,
            TYPE: "E",
            NAME: "Mouse",
            DESC: "Frontech MS-0050 Wired USB Gaming Mouse |6 Keys |7-Led Color Backlit|Fun Playing| 3600DPI ",
            ID: 45
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/laptop-accessories-combo/c/k/7/set-of-5-keyboard-and-mouse-combo-with-usb-hub-c-type-otg-cable-original-imagubuhpsnynfk3.jpeg?q=70&crop=false",
            RS: 799,
            TYPE: "E",
            NAME: "Mouse",
            DESC: "The Originals Alive Set of 5 Keyboard and Mouse Combo with USB Hub, C-Type OTG",
            ID: 46
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/power-bank/2/u/0/-original-imagg3utpq9fj5ry.jpeg?q=70&crop=false",
            RS: 1299,
            TYPE: "E",
            NAME: "Power",
            DESC: "ORAIMO 20000 mAh Power Bank (20 w, Quick Charge 3.0, Power Delivery 2.0)  (Blue, Grey, Lithium Polymer)",
            ID: 47
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/kvr01ow0/power-bank/4/j/p/smart-power-pack-30000-t4-zofia-original-imag8kwjhue2rzg9.jpeg?q=70&crop=false",
            RS: 1999,
            TYPE: "E",
            NAME: "Power",
            DESC: "slainte 50000 mAh Power Bank (18 W, Fast Charging)  (Black, Lithium Polymer) ",
            ID: 48
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/diaper/o/s/l/-original-imagvdzzr8vfys9c.jpeg?q=70&crop=false",
            RS: 889,
            TYPE: "F",
            NAME: "BUMTUM",
            DESC: "BUMTUM Baby Diaper Pants Double Layer Leakage Protection High Absorb Technology - S  (156 Pieces) ",
            ID: 49
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/perfume/a/7/9/-original-imaggavzgyz2pezs.jpeg?q=70&crop=false",
            RS: 445,
            TYPE: "F",
            NAME: "Perfume",
            DESC: "PLAYBOY My VIP Story Eau de Toilette - 100 ml  (For Men)",
            ID: 50
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/face-wash/n/4/n/-original-imaguw7wqccmacrr.jpeg?q=70&crop=false",
            RS: 346,
            TYPE: "F",
            NAME: "FaceWash",
            DESC: "Simple Kind To Skin Refreshing Facial Wash (PACK OF 2) Face Wash  (300 ml)",
            ID: 51
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/fabric/r/4/t/no-2-35-m-unstitched-na-7-iwc-premium-fabrics-izzy-wear-clothing-original-imagwqwzvjhfa2av.jpeg?q=70&crop=false",
            RS: 329,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Unstitched Polycotton Shirt Fabric Printed",
            ID: 52
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/mangalsutra-tanmaniya/a/l/j/kk520-bhumi09-original-imagrpknzuvt78rz.jpeg?q=70&crop=false",
            RS: 199,
            TYPE: "F",
            NAME: "Nack",
            DESC: "Bhumi09 Fancy Combo of 3 Dailwear AD Stylish Gold Plated Mangalsutra for Women Brass Mangalsutra",
            ID: 53
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/electric-kettle/1/w/q/1-5l-zunvolt-original-imagnrgwdazgurvk.jpeg?q=70&crop=false",
            RS: 409,
            TYPE: "E",
            NAME: "Kettle",
            DESC: "ZunVolt 1.5L Electric Kettle  (1.5 L, Silver, Black)",
            ID: 54
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l5e81ow0/immersion-rod/h/g/d/2000-2022-blue-br-water-proof-shock-proof-mi-star-original-imagg399zedkvzjs.jpeg?q=70&crop=false",
            RS: 389,
            TYPE: "E",
            NAME: "Heater",
            DESC: "mi star classic 208 2000 W Shock Proof Immersion Heater Rod  (Water) ",
            ID: 55
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/iron/5/v/b/-original-imagrb793uzv9nhb.jpeg?q=70&crop=false",
            RS: 349,
            TYPE: "E",
            NAME: "Dry Iron",
            DESC: "Longway Kwid 1100 W Dry Iron  (Blue, White)",
            ID: 56
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/kwdv3bk0/cap/m/5/p/free-dual-cap-5-denolix-original-imag92rzvdd3a5qz.jpeg?q=70&crop=true",
            RS: 134,
            TYPE: "F",
            NAME: "Woven",
            DESC: "Woven Beanie  (Pack of 2)",
            ID: 57
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/brooch/y/5/z/-original-imagqhqnb9ebb3eb.jpeg?q=70&crop=true",
            RS: 106,
            TYPE: "F",
            NAME: "Brooch",
            DESC: "FIABLE COLLECTION Women's Brooches and Pins With Designer Kundan for Dupatta and Saree Brooch Brooch  (Gold, Red)",
            ID: 58
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/turban/q/p/6/12-free-knot-aashiyatrades-6-original-imagnzehwjzkvwsf.jpeg?q=70&crop=false",
            RS: 235,
            TYPE: "F",
            NAME: "Wraps",
            DESC: "AashiyaTrades Printed Head Wraps",
            ID: 59
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/l/t/z/m-av104stripe-blk-green-avolt-original-imagjfuwxqcyzw4u.jpeg?q=70&crop=true",
            RS: 399,
            TYPE: "F",
            NAME: "Pants",
            DESC: "Pack of 2 Men Solid Black, Green Track Pants",
            ID: 60
        }
        ,
        {
            URL: "https://bombaytrooper.com/wp-content/uploads/2022/11/BTFJ002-A.jpg",
            RS: 2475.00,
            TYPE: "F",
            NAME: "JACKET",
            DESC: "Full Sleeve Solid Men Long Jacket",
            ID: 61
        }
        ,
    
        {
            URL: "https://m.media-amazon.com/images/I/61IiivUibAL._AC_UL480_FMwebp_QL65_.jpg",
            RS: 489 ,
            TYPE: "F",
            NAME: "Pixie Fashion",
            DESC: "Stylish and Handsome Mandarin Collar Half Sleeves",
            ID: 62
        }
        ,
        {
            URL: "https://images-eu.ssl-images-amazon.com/images/I/818UhQ1kpdL._AC_UL450_SR450,320_.jpg",
            RS:  12499.00 ,
            TYPE: "E",
            NAME: " realme narzo 60X 5G",
            DESC: " realme narzo Nebula Purple 6GB,128GB Storage )Up to 2TB External Memory |",
            ID: 63
        }
    
    
    
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/t/5/s/9-dx3705-001-9-nike-black-white-original-imagwfnrjdskbx6e.jpeg?q=70&crop=true",
            RS: 7095,
            TYPE: "F",
            NAME: "NIKE ",
            DESC: "Air Max INTRLK Lite Sneakers For Women  (Black)",
            ID: 64
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/d/l/-original-imagmdbwruane5th.jpeg?q=70&crop=false",
            RS:  7019 ,
            TYPE: "Fashion",
            NAME: "ADIDAS ",
            DESC: "ZNSARA Running Shoes For Women  (White)",
            ID: 65
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/x/x/-original-imaguy4ag7rbpshw.jpeg?q=70&crop=false",
            RS: 9999 ,
            TYPE: "E",
            NAME: "OPPO A18 ",
            DESC: "OPPO A18 (Glowing Black, 64 GB)  (4 GB RAM)#JustHere",
            ID: 66
    
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/l2tcfbk0/shirt/e/e/e/l-khsh000750-ketch-original-image2psaexg4yym.jpeg?q=70&crop=false",
            RS: 299,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Checkered Cut Away Collar Casual Shirt ",
            ID: 67
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/m/a/i/-original-imagrcjkpwzzbttr.jpeg?q=70&crop=true",
            RS: 280,
            TYPE: "F",
            NAME: "Watch",
            DESC: "Mesh Strap All Black Avatar Day and Date Functioning Quartz Analog Watch - For Men LS2917",
            ID: 68
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/joen7gw0/headphone/k/7/y/wooky-bass-10-in-ear-earphones-with-mic-original-imafavz8bugtfhhm.jpeg?q=70&crop=false",
            RS: 399,
            TYPE: "E",
            NAME: " Earphones",
            DESC: "Wooky Bass-10 In-Ear Earphones with Mic Wired Headset  (Black, In the Ear) ",
            ID: 69
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l2m78280/mobile-accessories-combo/u/g/m/penta-combo-5-urbbanbeats-original-imagdwyvgw6sfs5e.jpeg?q=70&crop=false",
            RS: 249 ,
            TYPE: "E",
            NAME: "headphone",
            DESC: "URBANBEATS True bass headphone with mic (composit membrane)beautiful case+eartips(pack of 2 Wired Headset  (Multicolor, In the Ear) ",
            ID: 70
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/brief/v/t/n/s-2-xytrnk2pckn363-xyxx-original-imagkb79bvjmytdx.jpeg?q=70&crop=true",
            RS: 484,
            TYPE: "F",
            NAME: "Men Trunk",
            DESC: "Pack of 2 Uno Intellisoft Micro Modal Solid Men Trunk ",
            ID: 71
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/j/u/j/xl-plain-01-n-and-j-original-imagvjntjwpnzzj9.jpeg?q=70&crop=true",
            RS: 399,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Striped Spread Collar Casual Shirt",
            ID: 72
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-shirt/s/n/2/xl-01-aaradhya-enterprise-original-imagh8867j5sxhaz.jpeg?q=70&crop=true",
            RS: 427,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Men Slim Fit Striped Spread Collar Casual Shirt ",
            ID: 73
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/j/g/h/-original-imagtvq8wxhausyq.jpeg?q=70&crop=false",
            RS: 49990,
            TYPE: "E",
            NAME: "Laptop",
            DESC: "ASUS Vivobook 15 AMD Ryzen 7 Octa Core 5800HS - (16 GB/512 GB SSD/Windows 11 Home)",
            ID: 74
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/mouse/l/q/k/ms-0050-wired-usb-gaming-mouse-6-keys-7-led-color-backlit-fun-original-imagvz4hcrqkqhrp.jpeg?q=70&crop=false",
            RS: 399,
            TYPE: "E",
            NAME: "Mouse",
            DESC: "Frontech MS-0050 Wired USB Gaming Mouse |6 Keys |7-Led Color Backlit|Fun Playing| 3600DPI ",
            ID: 75
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/laptop-accessories-combo/c/k/7/set-of-5-keyboard-and-mouse-combo-with-usb-hub-c-type-otg-cable-original-imagubuhpsnynfk3.jpeg?q=70&crop=false",
            RS: 799,
            TYPE: "E",
            NAME: "Mouse",
            DESC: "The Originals Alive Set of 5 Keyboard and Mouse Combo with USB Hub, C-Type OTG",
            ID: 76
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l5fnhjk0/power-bank/2/u/0/-original-imagg3utpq9fj5ry.jpeg?q=70&crop=false",
            RS: 1299,
            TYPE: "E",
            NAME: "Power",
            DESC: "ORAIMO 20000 mAh Power Bank (20 w, Quick Charge 3.0, Power Delivery 2.0)  (Blue, Grey, Lithium Polymer)",
            ID: 77
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/kvr01ow0/power-bank/4/j/p/smart-power-pack-30000-t4-zofia-original-imag8kwjhue2rzg9.jpeg?q=70&crop=false",
            RS: 1999,
            TYPE: "E",
            NAME: "Power",
            DESC: "slainte 50000 mAh Power Bank (18 W, Fast Charging)  (Black, Lithium Polymer) ",
            ID: 78
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/diaper/o/s/l/-original-imagvdzzr8vfys9c.jpeg?q=70&crop=false",
            RS: 889,
            TYPE: "F",
            NAME: "BUMTUM",
            DESC: "BUMTUM Baby Diaper Pants Double Layer Leakage Protection High Absorb Technology - S  (156 Pieces) ",
            ID: 79
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/perfume/a/7/9/-original-imaggavzgyz2pezs.jpeg?q=70&crop=false",
            RS: 445,
            TYPE: "F",
            NAME: "Perfume",
            DESC: "PLAYBOY My VIP Story Eau de Toilette - 100 ml  (For Men)",
            ID: 80
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/face-wash/n/4/n/-original-imaguw7wqccmacrr.jpeg?q=70&crop=false",
            RS: 346,
            TYPE: "F",
            NAME: "FaceWash",
            DESC: "Simple Kind To Skin Refreshing Facial Wash (PACK OF 2) Face Wash  (300 ml)",
            ID: 81
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/fabric/r/4/t/no-2-35-m-unstitched-na-7-iwc-premium-fabrics-izzy-wear-clothing-original-imagwqwzvjhfa2av.jpeg?q=70&crop=false",
            RS: 329,
            TYPE: "F",
            NAME: "Shirt",
            DESC: "Unstitched Polycotton Shirt Fabric Printed",
            ID: 82
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/mangalsutra-tanmaniya/a/l/j/kk520-bhumi09-original-imagrpknzuvt78rz.jpeg?q=70&crop=false",
            RS: 199,
            TYPE: "F",
            NAME: "Nack",
            DESC: "Bhumi09 Fancy Combo of 3 Dailwear AD Stylish Gold Plated Mangalsutra for Women Brass Mangalsutra",
            ID: 83
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/electric-kettle/1/w/q/1-5l-zunvolt-original-imagnrgwdazgurvk.jpeg?q=70&crop=false",
            RS: 409,
            TYPE: "E",
            NAME: "Kettle",
            DESC: "ZunVolt 1.5L Electric Kettle  (1.5 L, Silver, Black)",
            ID: 84
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/l5e81ow0/immersion-rod/h/g/d/2000-2022-blue-br-water-proof-shock-proof-mi-star-original-imagg399zedkvzjs.jpeg?q=70&crop=false",
            RS: 389,
            TYPE: "E",
            NAME: "Heater",
            DESC: "mi star classic 208 2000 W Shock Proof Immersion Heater Rod  (Water) ",
            ID: 85
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/iron/5/v/b/-original-imagrb793uzv9nhb.jpeg?q=70&crop=false",
            RS: 349,
            TYPE: "E",
            NAME: "Dry Iron",
            DESC: "Longway Kwid 1100 W Dry Iron  (Blue, White)",
            ID: 86
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/kwdv3bk0/cap/m/5/p/free-dual-cap-5-denolix-original-imag92rzvdd3a5qz.jpeg?q=70&crop=true",
            RS: 134,
            TYPE: "F",
            NAME: "Woven",
            DESC: "Woven Beanie  (Pack of 2)",
            ID: 87
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/brooch/y/5/z/-original-imagqhqnb9ebb3eb.jpeg?q=70&crop=true",
            RS: 106,
            TYPE: "F",
            NAME: "Brooch",
            DESC: "FIABLE COLLECTION Women's Brooches and Pins With Designer Kundan for Dupatta and Saree Brooch Brooch  (Gold, Red)",
            ID: 88
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/416/416/xif0q/turban/q/p/6/12-free-knot-aashiyatrades-6-original-imagnzehwjzkvwsf.jpeg?q=70&crop=false",
            RS: 235,
            TYPE: "F",
            NAME: "Wraps",
            DESC: "AashiyaTrades Printed Head Wraps",
            ID: 89
        }
        ,
        {
            URL: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/l/t/z/m-av104stripe-blk-green-avolt-original-imagjfuwxqcyzw4u.jpeg?q=70&crop=true",
            RS: 399,
            TYPE: "F",
            NAME: "Pants",
            DESC: "Pack of 2 Men Solid Black, Green Track Pants",
            ID: 90
        }
        ,
       
    
    ]
    let [num, setNum] = useState(0)


    let [TD,setTD]=useState([]);
    let [ShopData, setShopData] = useState([]);
    let [count ,setCount]=useState(0);
    let [CardID,setCardID]=useState([])
    let [total,setTotal]=useState(0);
    let [input,setInput]=useState("");

    return (
        <BGContext.Provider value={{ A: { a: Arr }, N: { num, setNum },Total:{total,setTotal},Data:{Api:ShopAPI}, I:{input,setInput},T:{TD,setTD},D:{ShopData,setShopData},Num:{count,setCount},CID:{CardID,setCardID} }}>
            {children}
        </BGContext.Provider>
    )
}

export default BG