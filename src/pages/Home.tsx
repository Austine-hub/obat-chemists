// ===============================================================
// 🏠 Home.tsx — Optimized Home Page Component (2025)
// ===============================================================

import {type FC, Suspense, lazy } from "react";

// ===============================================================
// 🧩 Eagerly Loaded Components (Critical for FCP)
// ===============================================================
import Hero from "../components/hero/Hero";
import ServiceGrid from "../services/ServicesGrid";
import ProductCarousel from "../pages/ProductCarousel";
import DiscountCards from "../services/DiscountCards";
import Shop from "../components/Shop";


// ===============================================================
// 💤 Lazy Loaded Components (Non-Critical Sections)
// ===============================================================
const Offers1 = lazy(() => import("../pages/Offers1"));
const ShopByCategory = lazy(() => import("../pages/ShopByCategory"));
const BeautyProducts = lazy(() => import("../pages/BeautyProducts"));

// ===============================================================
// ⏳ Loading Fallback Component
// ===============================================================
const LoadingFallback: FC = () => (
  <div className="py-16 text-gray-500 animate-pulse text-lg font-medium">
    Loading content, please wait...
  </div>
);

// ===============================================================
// 🏠 Home Page
// ===============================================================
const Home: FC = () => {
  return (
    <main className="p-8 text-center">
      <Hero />
      <Shop/>
      <ProductCarousel />
     
     

      <Suspense fallback={<LoadingFallback />}>
        <DiscountCards/>
        <ServiceGrid />
        <ShopByCategory />
        <Offers1 />
        <BeautyProducts />
        </Suspense>
    </main>
  );
};

export default Home;
