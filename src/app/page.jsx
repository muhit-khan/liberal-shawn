import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import Mission from "@/components/Mission/Mission";
import About from "@/components/About/About";
import Accomplishment from "@/components/Accomplishment/Accomplishment";
import Issues from "@/components/Issues/Issues";
import GoToTopButton from "@/components/GoToTopButton";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Accomplishment />
      <Issues />
      <GoToTopButton />
    </>
  );
}
