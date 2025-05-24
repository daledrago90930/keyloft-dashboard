export default function ListingCard({ listing }) {
  return (
    <div className="border rounded overflow-hidden shadow">
      <img src={listing.imageUrls[0]} className="h-48 w-full object-cover"/>
      <div className="p-4">
        <h3 className="font-bold">{listing.title}</h3>
        <p>${listing.price}</p>
      </div>
    </div>
  );
}
