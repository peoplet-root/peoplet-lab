import BentoGrid from "@/components/products/BentoGrid";
import ProductsSection from "@/components/products/ProductsSection";

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