import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const {orderId} = req.body

        await prisma.order.update({
            where: {
                id: orderId
            },
            data: {
                finish: true
            }
        })


        return res.status(200).json({ message: "Checkout Successful" });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
