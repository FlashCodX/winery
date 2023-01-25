import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
type Data = {
  wines: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { id, quantity } = req.body;

      if (!id && !quantity) res.status(500).json({ wines: [] });

      await axios.patch(`http://localhost:3001/wines/${id}/`, {
        quantity,
      });
      res.status(200).json({ wines: "Wine quantity updated successfully" });
    } catch (err: any) {
      res.status(500).json({ wines: "Error updating wine quantity" });
    }
  } else {
    const { data } = await axios.get("http://localhost:3001/wines");
    res.status(200).json({ wines: data });
  }
}
