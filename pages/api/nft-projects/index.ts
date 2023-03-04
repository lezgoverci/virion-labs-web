import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type MyData = {
  name: string;
  email: string;
};

const strapiEndpoint = process.env.NEXT_PUBLIC_API_URI;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyData>
) {

    const response = await axios.get(`${strapiEndpoint}/nft-projects?populate=blockchain,project_founders,drop_date`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });


    const data = response.data;

    res.status(200).json(data);

}
