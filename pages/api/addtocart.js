import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { orderId, menuId } = req.body;

        await prisma.order.update({
            where: {
                id: orderId,
            },
            data: {
                orderItems: {
                    upsert: {
                        where: {
                            menuId_orderId: {
                                menuId,
                                orderId,
                            },
                        },
                        create: {
                            menuId,
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

        return res.status(200).json({message: `Added to Cart`})
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
