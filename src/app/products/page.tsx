import { Metadata } from "next";
import { ProductList } from "./product-list";
import { getProductList } from "./service";
import { ShopHeroSection } from "../shop/sections/hero.section";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Products",
  description: "All products on the store",
};

export default async function Page() {
  const data = await getProductList();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ShopHeroSection />

      {/* Products Grid */}
      <ProductList data={data} />
    </div>
  );
}
