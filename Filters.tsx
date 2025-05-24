export default function Filters({ filters, setFilters }) {
  return (
    <div className="p-4 bg-white shadow mb-4 flex flex-wrap gap-2">
      <select onChange={e => setFilters(f => ({ ...f, rentOrBuy: e.target.value }))}>
        <option value="">Rent or Buy</option>
        <option value="rent">Rent</option>
        <option value="buy">Buy</option>
      </select>
      <input type="number" placeholder="Min Price" onChange={e=>setFilters(f=>({...f,minPrice:e.target.value}))}/>
      <input type="number" placeholder="Max Price" onChange={e=>setFilters(f=>({...f,maxPrice:e.target.value}))}/>
      <input type="number" placeholder="Beds" onChange={e=>setFilters(f=>({...f,beds:e.target.value}))}/>
      <input type="number" placeholder="Baths" onChange={e=>setFilters(f=>({...f,baths:e.target.value}))}/>
    </div>
  );
}
