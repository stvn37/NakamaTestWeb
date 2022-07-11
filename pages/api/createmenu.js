import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { title, categoryId, price, recommend, spicy, vege} = req.body;

        await prisma.menu.create({
            data: {
                title,
                categoryid: parseInt(categoryId),
                price: parseInt(price),
                recommend,
                spicy,
                vege,
                image: '/blank.jpg'
            },
        });
        return res.status(201).json({ message: "Create Menu Successful" });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
