import Encryption from "@/components/Encryption";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
const HomePage = () => {
  return (
    <main className="h-full w-full">
      <div className="flex  flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
};

export default HomePage;
