"use client";

import dynamic from "next/dynamic";

const WhyPeopletInner = dynamic(() => import("./WhyPeopletInner"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] flex items-center justify-center text-neutral-400">
      Loading section...
    </div>
  ),
});

export default function WhyPeoplet() {
  return <WhyPeopletInner />;
}
