import HeroSection from "@/app/components/HeroSection";
import TrendingSection from "@/app/components/TrendingSection";
import CategoryTabs from "@/app/components/CategoryTab";
import RecommendedSection from "@/app/components/RecommendationSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <main className="max-w-7xl mx-auto px-6">
        <TrendingSection />
        <CategoryTabs />
        <RecommendedSection />
      </main>
    </div>
  );
}
