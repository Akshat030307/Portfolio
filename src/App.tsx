import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollIndicator } from "./components/ScrollIndicator";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SkillGaps } from "./components/SkillGaps";
import { FailedProjects } from "./components/FailedProjects";
import { BadDecisions } from "./components/BadDecisions";
import { UnderPressure } from "./components/UnderPressure";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div className="bg-[#F5F1EA] text-[#1A1A1A]">
      <ScrollProgress />
      <ScrollIndicator />
      <Navbar />
      <Hero />
      <SkillGaps />
      <FailedProjects />
      <BadDecisions />
      <UnderPressure />
      <FinalCTA />
    </div>
  );
}