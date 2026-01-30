import { Metadata } from "next";
import { FooterSection } from "@/components/footer.section";
import { StorySection } from "./sections/story.section";
import { ValuesSection } from "./sections/values.section";;

export const metadata: Metadata = {
  title: "About KICKS - Our Story, Mission & Values",
  description: "Learn about KICKS - your premium destination for authentic sportswear. Discover our story, mission to empower athletes, and commitment to quality footwear.",
  keywords: ["about kicks", "sportswear company", "athletic footwear", "sneaker store", "sports brand mission"],
  openGraph: {
    title: "About KICKS - Our Story & Mission",
    description: "Discover the story behind KICKS and our mission to provide premium sportswear for athletes everywhere.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About KICKS - Our Story & Mission",
    description: "Learn about our commitment to quality sportswear and empowering athletes.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <StorySection />
      <ValuesSection />
      <FooterSection />
    </main>
  );
}
