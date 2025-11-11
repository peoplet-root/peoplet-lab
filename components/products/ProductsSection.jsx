"use client";

import dynamic from "next/dynamic";

const ProductsSectionInner = dynamic(() => import("./ProductsSectionInner"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center text-neutral-500">
      Loading products...
    </div>
  ),
});

export default function ProductsSection() {
  return <ProductsSectionInner />;
}
