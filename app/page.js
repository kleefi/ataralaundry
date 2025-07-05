import About from "@/components/About";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
export const metadata = {
  title: "Atara Laundry - #1 Layanan Laundry Pickup Delivery Express",
  description:
    "Melayani laundry kiloan | satuan | sepatu | tas | baby stroller | karpet | dan lainnya.",
};
export default function Home() {
  return (
    <div className="bg-[linear-gradient(120deg,_#fbefff_0%,_#e4d9ff_30%,_#dcecff_70%,_#ffffff_100%)]">
      <CTA />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Contact />
    </div>
  );
}
