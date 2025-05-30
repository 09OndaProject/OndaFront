import BannerSection from "@/components/homeComponents/BannerSection";
import GatheringListSection from "@/components/homeComponents/gatheringListSection";
import HeroSection from "@/components/homeComponents/HeroSection";
import MainBannerSection from "@/components/homeComponents/MainBannerSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <HeroSection />
      <MainBannerSection />
      <BannerSection />
      <GatheringListSection />
    </main>
  );
}
