import { Metadata } from "next";
import { HeroSection } from "./sections/hero.section"
import { CollectionsSection } from "./sections/collections.section"
import { BrandShowcaseSection } from "./sections/brand-showcase.section"
import { CtaSection } from "./sections/cta.section"
import { FooterSection } from "@/components/footer.section";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "KICKS - Premium Sneakers & Streetwear",
  description: "Discover the latest collection of premium sneakers and streetwear at KICKS. From performance athletes to street style icons, find the perfect pair that matches your vibe.",
};

async function LandingPage() {
    return (
        <>
            <HeroSection />
            <CollectionsSection />
            <BrandShowcaseSection />
            <CtaSection />
            <FooterSection />
        </>
    )
}

export default LandingPage