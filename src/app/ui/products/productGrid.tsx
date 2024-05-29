import { fetchFilteredProducts,  } from "@/app/lib/data";
import Search from "@/app/ui/search";
import ProductCard from "@/app/ui/products/productCard";

export default async function ProductGrid({
  query,
  category,
  minPrice,
  maxPrice
}: {
  query: string;
  category: number;
  minPrice: number;
  maxPrice: number;
}) {
  const products = await fetchFilteredProducts(query, category, minPrice, maxPrice);
  //console.log(products);

  return (
    <main className="m-3">
      <div className="">
        <Search placeholder="Search products..." />
      </div>
      <div className="pt-[80px] grid grid-cols-1 pb-20 w-[365px] m-auto gap-5 md:grid-cols-3 md:w-[750px] lg:w-[1405px] lg:grid-cols-4">
        {products.map((card) => {
          return <ProductCard key={card.id} {...card} />;
        })}
      </div>
    </main>
  );
}
