import type { NextApiRequest, NextApiResponse } from "next";
import {
  retrieveDataById,
  retrieveProducts,
} from "@/utils/db/servicefirebase";

type Data = {
  status: boolean;
  status_code: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.produk?.[1]) {
    // Ada ID → ambil satu produk by ID
    const data = await retrieveDataById("products", req.query.produk[1]);
    res.status(200).json({ status: true, status_code: 200, data });
    return;
  } else {
    // Tidak ada ID → ambil semua produk
    const data = await retrieveProducts("products");
    res.status(200).json({ status: true, status_code: 200, data });
  }
}