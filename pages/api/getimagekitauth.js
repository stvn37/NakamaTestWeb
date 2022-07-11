import prisma from "../../prisma/client";
import ImageKit from 'imagekit'

export default async function handler(req, res) {
    if (req.method == "GET") {

        const imagekit = new ImageKit({
            urlEndpoint: '<YOUR_IMAGEKIT_URL_ENDPOINT>',
            publicKey: '<YOUR_IMAGEKIT_PUBLIC_KEY>',
            privateKey: '<YOUR_IMAGEKIT_PRIVATE_KEY>'
          });


    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
