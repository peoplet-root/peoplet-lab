import BentoGrid from "@/components/bentogrid/BentoGrid";
import ProductsSection from "@/components/productssection/ProductsSection";

export const metadata = {
  title: "Products | Peoplet Lab",
};

export default function ProductsPage() {
  return (
    <main>
      <ProductsSection />
      <BentoGrid />
    </main>
  );
}