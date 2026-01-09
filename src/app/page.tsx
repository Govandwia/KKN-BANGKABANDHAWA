import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionMission } from "@/components/VisionMission";
import { SectionDivider } from "@/components/SectionDivider";
import { Programs } from "@/components/Programs";
import { Timeline } from "@/components/Timeline";
import { Location } from "@/components/Location";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Hero />
      <SectionDivider />
      <About />
      <VisionMission />
      <Programs />
      <Timeline />
      <Location />
    </main>
  );
}
