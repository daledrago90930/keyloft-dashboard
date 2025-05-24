import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { rentOrBuy, minPrice, maxPrice, beds, baths } = req.query;
  const listings = await prisma.listing.findMany({
    where: {
      rentOrBuy: rentOrBuy as string || undefined,
      price: {
        gte: Number(minPrice) || undefined,
        lte: Number(maxPrice) || undefined,
      },
      beds: Number(beds) || undefined,
      baths: Number(baths) || undefined,
    },
    orderBy: { createdAt: "desc" },
  });
  res.json(listings);
}
