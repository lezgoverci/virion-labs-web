import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type MyData = {
  name: string;
  email: string;
};

const strapiEndpoint = process.env.API_URI;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyData>
) {

    const response = await axios.get(`${strapiEndpoint}/nft-projects`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });


    const data = response.data;

    res.status(200).json(data);

}
