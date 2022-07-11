import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { code, discount} = req.body;

        await prisma.coupon.create({
            data: {
                code,
                discount: parseInt(discount),
                active: true
            },
        });
        return res.status(201).json({ message: "Create Coupon Successful" });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
