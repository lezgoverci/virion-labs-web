// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/users`, {
      headers: {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }) // strapi API
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .catch((err) => console.log(err));

    res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
}
