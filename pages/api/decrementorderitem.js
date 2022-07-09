import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { orderItemId } = req.body;

        const orderitem = await prisma.orderItem.findUnique({
            where: {
                id: orderItemId,
            },
        });

        if (orderitem.quantity <= 1) {
            await prisma.orderItem.delete({
                where: {
                    id: orderItemId,
                },
            });
        } else {
            await prisma.orderItem.update({
                where: {
                    id: orderItemId,
                },
                data: {
                    quantity: {
                        decrement: 1,
                    },
                },
            });
        }

        return res.status(200).json({message: 'Decrement success'})
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
