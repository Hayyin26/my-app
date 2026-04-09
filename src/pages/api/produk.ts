import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts } from "../utlis/db/servicefirebase";

type Data = {
    status: Boolean;
    status_code: number;
    data: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const data = await retrieveProducts("products");
        console.log('Products from Firebase:', data);
        res.status(200).json({ status: true, status_code: 200, data });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ status: false, status_code: 500, data: [] });
    }
}