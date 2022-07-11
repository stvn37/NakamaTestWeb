import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const {couponCode} = req.body

        const coupon = await prisma.coupon.findFirst({
            where: {
                code: couponCode,
                active: true
            },
        })

        if(coupon)
            return res.status(200).json({ message: "Coupon Exist", exist: true, coupon });
        else 
            return res.status(200).json({message: "Coupon Not Exist", exist: false, coupon: null})
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
