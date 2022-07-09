import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const {orderItemId} = req.body

        await prisma.orderItem.update({
            where: {
                id: orderItemId
            },
            data: {
                quantity: {
                    increment: 1
                }
            }
        })

        return res.status(200).json({message: 'Increment success'})
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
