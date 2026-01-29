import { Metadata } from "next";
import { Cart } from "./cart";

export const metadata: Metadata = {
  title: "Shopping Cart - KICKS",
  description: "Review your shopping cart and checkout for premium sneakers at KICKS",
};

export default function Page() {
  return <Cart />;
}
