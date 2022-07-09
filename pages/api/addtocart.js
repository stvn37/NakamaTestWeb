import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { orderId, item } = req.body;
        console.log(item)

        await prisma.order.update({
            where: {
                id: orderId,
            },
            data: {
                orderItems: {
                    upsert: {
                        where: {
                            menuId_orderId: {
                                menuId: item.id,
                                orderId,
                            },
                        },
                        create: {
                            menuId: item.id,
                            title: item.title,
                            category: item.category.name,
                            price: item.price,
                            caption: item.caption,
                            recommend: item.recommend,
                            spicy: item.spicy,
                            vege: item.vege,
                            image: item.image,
                            quantity: 1
                        },
                        update: {
                            quantity: {
                                increment: 1
                            }
                        }
                    },
                },
            },
        });

        return res.status(200).json({message: `Added ${item.title} to Cart`})
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
