import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    revalidated: boolean;
    message?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.query.token !== process.env.REVALIDATE_TOKEN) {
        return res.status(401).json({ revalidated: false, message: "Invalid token" });
    }


    if (req.query.data === "produk" || req.query.data === "products") {
        try {
            await res.revalidate("/produk/static");
            return res.status(200).json({ revalidated: true });
        } catch (error) {
            console.error("Error in API route:", error);
            res.status(500).send({ revalidated: false });
        }
    }

    return res.json({ revalidated: false, message: "Invalid query parameter. Expected 'data=produk' or 'data=products'." });
}