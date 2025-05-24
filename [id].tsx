import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function PropertyPage({ listing }) {
  if (!listing) return <p>Not found</p>;
  return (
    <div className="container mx-auto p-4">
      <img src={listing.imageUrls[0]} alt={listing.title} className="w-full h-64 object-cover rounded"/>
      <h1 className="text-3xl font-bold my-4">{listing.title}</h1>
      <p>{listing.description}</p>
      <p className="mt-2 font-semibold">${listing.price}</p>
      <p>{listing.beds} beds · {listing.baths} baths</p>
      <p className="mt-2 text-gray-600">{listing.address}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const listing = await prisma.listing.findUnique({ where: { id: ctx.params!.id as string } });
  return { props: { listing } };
};
