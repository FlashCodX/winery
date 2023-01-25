// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { WineType } from "@/typings";
type Data = {
  wines: WineType[];
};

// 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { data } = await axios.get("http://localhost:3001/wines");
    res.status(200).json({ wines: data });
  } catch (e: any) {
    res.status(500).json({ wines: [] });
  }
}
