import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { id, code, discount, active} = req.body;

        await prisma.coupon.update({
            where: {
                id
            },
            data: {
                code,
                discount: parseInt(discount),
                active
            },
        });
        return res.status(201).json({ message: "Update Coupon Successful" });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
