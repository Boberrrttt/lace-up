import { Metadata } from "next";
import { FeaturedList } from "./sections/featured-list.section";
import { getProductList } from "../products/service";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Featured Products",
  description: "Discover our handpicked selection of premium sneakers and featured products",
};

export default async function Page() {
  const data = await getProductList();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
              FEATURED
              <span className="text-yellow-500"> KICKS</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our handpicked selection of premium sneakers. From performance athletes to street style icons, 
              find the perfect pair that matches your vibe.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <FeaturedList data={data} />
    </div>
  );
}
