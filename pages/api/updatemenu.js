import prisma from "../../prisma/client";

export default async function handler(req, res) {
    if (req.method == "POST") {
        const { id, title, categoryId, price, recommend, spicy, vege, available, imageUrl} = req.body;

        await prisma.menu.update({
            where: {
                id
            },
            data: {
                title,
                categoryid: parseInt(categoryId),
                price: parseInt(price),
                recommend,
                spicy,
                vege,
                image: imageUrl,
                available
            },
        });
        return res.status(201).json({ message: "Update Menu Successful" });
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
