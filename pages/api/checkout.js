import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const {orderId, tableNo, orderType, couponId} = req.body

        await prisma.order.update({
            where: {
                id: orderId
            },
            data: {
                finish: true,
                type: orderType,
                tableNo: orderType === 'DineIn' ? parseInt(tableNo) : undefined,
                couponId
            }
        })


        return res.status(200).json({ message: "Checkout Successful" });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
