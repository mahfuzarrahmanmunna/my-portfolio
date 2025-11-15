import Image from "next/image";
import { Hero } from "./components/section/Hero/Hero";
import { About } from "./components/section/about/about";
import { Services } from "./components/section/services/services";
import { Skills } from "./components/section/skills/skills";
import { Portfolio } from "./components/section/portfolio/portfolio";
import { Contact } from "./components/section/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
