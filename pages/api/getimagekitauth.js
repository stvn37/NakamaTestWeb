import ImageKit from "imagekit";

export default async function handler(req, res) {
    if (req.method == "GET") {
        const imagekit = new ImageKit({
            urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
            publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        });

        const result = imagekit.getAuthenticationParameters();
        return res.status(200).send(result)
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}
