import { HeroSection } from "./sections/hero.section"
import { FeaturedSection } from "./sections/featured.section"
import { CategoriesSection } from "./sections/categories.section"
import { BrandShowcaseSection } from "./sections/brand-showcase.section"
import { CtaSection } from "./sections/cta.section"
import { FooterSection } from "./sections/footer.section"

function LandingPage() {
    return (
        <>
            <HeroSection />
            {/* <FeaturedSection /> */}
            <CategoriesSection />
            <BrandShowcaseSection />
            <CtaSection />
            <FooterSection />
        </>
    )
}

export default LandingPage