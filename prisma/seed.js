const {PrismaClient} = require ("@prisma/client")



const prisma = new PrismaClient ()


async function main () {
    await prisma.order.deleteMany ()
    await prisma.menu.deleteMany ()
    await prisma.category.deleteMany ()

    await prisma.category.createMany ({
        data:categorydata
    })

    for (const menu of menudata) {
        await prisma.menu.create ({
            data:{
                image: menu.image,
                title: menu.title,
                caption: menu.caption,
                recommend:menu.recommend,
                spicy: menu.spicy,
                vege: menu.vege,
                price: menu.price,
                category: {
                    connect: {
                        name: menu.category
                }
        }
            }
        })
    }
    

}

main ().catch (error => {
    console.log(error)
    process.exit(1)
}).finally (async() => {
    await prisma.$disconnect ()
})

const categorydata = [
    {
        name: "Limited"
    },
    {
        name: "Sushi"
    },
    {
        name: "Noodle"
    },
    {
        name: "Rice"
    },
    {
        name: "Snack"
    },
    {
        name: "Drink"
    },
    {
        name: "Dessert"
    }
]

const menudata = [

    //Sushi//

    {
        image: "https://ik.imagekit.io/nakamaresto/Ueno_Salmon_Nigiri_cqu6ffpuy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218276481",
        title: "Ueno Salmon Nigiri",
        caption: "Caption here.",
        recommend: true,
        spicy: false,
        vege: false,
        price: 6.20,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Kumagaya_Unagi_Maki_u0-AnKC3_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218277604",
        title: "Kumagaya Unagi Nigiri",
        caption: "Caption here.",
        recommend: true,
        spicy: false,
        vege: false,
        price: 8.50,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Nakama_Osusume_Maki_2HZEkRqwm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286243833",
        title: "Nakama Osusume Maki",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 10.50,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Kiso_Tuna_Nigiri_9fuHj7MJV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218275570",
        title: "Kiso Tuna Nigiri",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 4.00,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Ashikaga_Tuna_Maki_-DlGuy5xT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218272199",
        title: "Ashikaga Tuna Maki",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 2.50,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Hokuto_Veggie_Maki_RTF-XQUmJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218273644",
        title: "Hokuto Veggie Maki",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: true,
        price: 3.50,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Misawa_Fresh_Maki_u-napcqSX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286243525",
        title: "Misawa Fresh Maki",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: true,
        price: 6.50,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Yokohama_Tamago_Nigiri_xPBOTA3CR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286241840",
        title: "Yokohama Tamago Nigiri",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: true,
        price: 5.00,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Sai_Avocado_Maki_5HZiqw_4y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286242360",
        title: "Sai Avocado Maki",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: true,
        price: 3.00,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Omachi_Mixed_Maki_ChhbGIRAO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218277439",
        title: "Omachi Mixed Maki",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 2.30,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Komoro_Fried_Salmon_Maki__BPvISFCq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218279038",
        title: "Komoro Fried Salmon Maki",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.00,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Tomioka_Wagyu_Maki_0KtAPc3OE0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655220437912",
        title: "Tomioka Wagyu Nigiri",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 13.00,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Miyagi_Tuna_Avocado_Tamaki_0VqiFMteGE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655220439037",
        title: "Miyagi Tuna Avocado Tamaki",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 11.50,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Takko_Tobiko_Maki_yuK69mNC7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286243397",
        title: "Takko Tobiko Maki",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 11.50,
        category: "Sushi"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Morioka_Salmon_Sashimi_ug4I2HU_2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286244124",
        title: "Morioka Salmon Sashimi",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 16.90,
        category: "Sushi"
    },

    

    //Noodle//

    {
        image: "https://ik.imagekit.io/nakamaresto/Fukushima_Tonkotsu_Ramen_kco5_mIyV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218274494",
        title: "Fukushima Tonkotsu Ramen",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 29.00,
        category: "Noodle"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Izumozaki_Shoyu_Ramen_BKnIaW5gO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218281797",
        title: "Izumozaki Shoyu Ramen",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 27.00,
        category: "Noodle"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Ishikawa_Korean_Ramen_XkEJzSgD0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218274786",
        title: "Ishikawa Korean Ramen",
        caption: "Caption here.",
        recommend:false,
        spicy: true,
        vege: false,
        price: 19.00,
        category: "Noodle"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Nishigo_Veggie_Ramen_59eBqzzm_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218276294",
        title: "Nishigo Veggie Ramen",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: true,
        price: 17.50,
        category: "Noodle"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Tamura_Light_Soup_Based_Ramen_S-p72qBEi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218280576",
        title: "Tamura Light Soup Based Ramen",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 24.00,
        category: "Noodle"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Nakama_Sain_Yakisoba_zDBVUD0bh.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218276024",
        title: "Nakama Sain Yakisoba",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 27.00,
        category: "Noodle"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Inawashiro_Yakisoba_zLHwT9W68.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655218278470",
        title: "Inawashiro Yakisoba",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 28.50,
        category: "Noodle"
    },

    //Rice//

    {
        image: "https://ik.imagekit.io/nakamaresto/Imakane_Katsudon_RtPv8H4-w.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286240341",
        title: "Imakane Katsudon",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 18.00,
        category: "Rice"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Saitama_BBQ_Rice_n3rnC6VHT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286240247",
        title: "Saitama BBQ Rice",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 22.40,
        category: "Rice"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Okinawa_Taco_Rice_feAZ57Jpi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655286240223",
        title: "Okinawa Taco Rice",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 16.00,
        category: "Rice"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Aomori_Beef_Rice_FqQmhYLd2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286241325",
        title: "Aomori Beef Rice",
        caption: "Caption here.",
        recommend:true,
        spicy: true,
        vege: false,
        price: 21.00,
        category: "Rice"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Iwanai_Teriyaki_Chicken_UjWPhloXH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286240976",
        title: "Iwanai Teriyaki Chicken + Rice",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 17.50,
        category: "Rice"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Yakumo_Katsu_Curry_Rice_sMcM7erFm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286240784",
        title: "Yakumo Katsu Curry Rice",
        caption: "Caption here.",
        recommend:false,
        spicy: true,
        vege: false,
        price: 20.50,
        category: "Rice"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Kuzumaki_Gyukatsu_lrZ84rFuO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286242609",
        title: "Kuzumaki Gyukatsu + Rice",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 23.00,
        category: "Rice"
    },

    //Snacks//

    {
        image: "https://ik.imagekit.io/nakamaresto/Hongdae_Tteokbokki_-9ylS-VU4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655286244812",
        title: "Hongdae Tteokbokki",
        caption: "Caption here.",
        recommend:false,
        spicy: true,
        vege: false,
        price: 13.00,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Hirono_Fries_QiHxpph4r.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287044087",
        title: "Hirono Fries",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: true,
        price: 8.00,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Osaka_Caesar_Salad_JjmE01wjX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288279371",
        title: "Osaka Caesar Salad",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: true,
        price: 6.00,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Ofunato_Beef_Dumpling_x8O9c5BFK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287044385",
        title: "Ofunato Beef Dumpling",
        caption: "Caption here.",
        recommend:true,
        spicy: true,
        vege: false,
        price: 12.50,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Nakano_Sandwich_S6tyb4-ts.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287044355",
        title: "Nakano Sandwich",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 11.50,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Otari_Hot_Dog_C00tn-I46.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287048104",
        title: "Otari Hot Dog",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 11.00,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Matsumoto_Croquette__a92xNZLv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287044493",
        title: "Matsumoto Croquette",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 7.50,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Osaki_Steamed_Gyoza_YX0tkO2TE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287044614",
        title: "Osaki Steamed Gyoza",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 12.00,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Yuzawa_Ichiban_Gyoza_gONh28T9W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287045915",
        title: "Yuzawa Ichiban Gyoza",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 12.50,
        category: "Snack"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Suwa_Fried_Ebi_Furai_8DWhX-jtw.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287045914",
        title: "Suwa Fried Ebi Furai",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 10.50,
        category: "Snack"
    },

    

    

    //Limited//

    {
        image: "https://ik.imagekit.io/nakamaresto/sushi-boat_XqS2H9n8W.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655218752960",
        title: "Nakama Sushi Boat",
        caption: "Caption here.",
        recommend:true,
        spicy: false,
        vege: false,
        price: 49.00,
        category: "Limited"
    },

    //Drinks//

    {
        image: "https://ik.imagekit.io/nakamaresto/Espresso_ivRjn0jPF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287981333",
        title: "Espresso",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 6.00,
        category: "Drink"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Americano_Ad-ew4SmvQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287980890",
        title: "Americano",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 5.00,
        category: "Drink"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Cafe_Latte_7FoGKPdKv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287985033",
        title: "Cafe Latte",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 8.50,
        category: "Drink"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Matcha_IP32tiCs_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287984058",
        title: "Matcha",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.00,
        category: "Drink"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Green_Tea_sSfXMccX5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287981714",
        title: "Green Tea",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 4.20,
        category: "Drink"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Mineral_Water_Nsb0g3Kry.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655287983320",
        title: "Mineral Water",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 2.40,
        category: "Drink"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Lychee_Ramune_5t8aK9Pfs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287982442",
        title: "Lychee Ramune",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 10.00,
        category: "Drink"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Coca_Cola_ADlivO0iU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287982955",
        title: "Coke",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 4.00,
        category: "Drink"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Sprite_kAJioBmUX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655287983124",
        title: "Sprite",
        caption: "Caption here.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 4.00,
        category: "Drink"
    },

    //Desserts//

    {
        image: "https://ik.imagekit.io/nakamaresto/Tobetsu_Caramel_Pudding_Lnu2ZFrqQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288354255",
        title: "Tobetsu Caramel Pudding",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 6.50,
        category: "Dessert"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Chitose_Mochi_TEAGS2WHX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288350980",
        title: "Chitose Mochi",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 7.50,
        category: "Dessert"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Shiraoi_Houjicha_Kncn1hzpz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288355241",
        title: "Shiraoi Houjicha Kakigori",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.50,
        category: "Dessert"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Mount-Fuji_Cream_kjczDJnBi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288354252",
        title: "Mount Fuji Cream Kakigori",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.50,
        category: "Dessert"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Popcorn-Kakigori_m4xJJkgH1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288354191",
        title: "Popcorn Kakigori",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.50,
        category: "Dessert"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Sapporo_Mount-Mauve_7J8URIlUX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288353212",
        title: "Sapporo Mount Mauve Kakigori",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.50,
        category: "Dessert"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Hokkaido_Passion-Fruit_QwtkbfmMR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288353781",
        title: "Hokkaido Passion Fruit Kakigori",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.50,
        category: "Dessert"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Makubetsu_Pink-Kiss_LocPfioHf.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288353787",
        title: "Makubetsu Pink Kiss Kakigori",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.50,
        category: "Dessert"
    },

    {
        image: "https://ik.imagekit.io/nakamaresto/Atsuma_Chocolate-Banofee_OtpSZqQRq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655288352347",
        title: "Atsuma Chocolate Banofee Kakigori",
        caption: "Start your day with sweetness ice with strawberry fruit flavoured from Japan.",
        recommend:false,
        spicy: false,
        vege: false,
        price: 9.50,
        category: "Dessert"
    }

    
]
