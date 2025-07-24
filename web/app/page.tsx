import Hero from "@/components/hero";
import Installation from "@/components/installation";
import Showcase from "@/components/showcase";
import ConfigSpotlight from "@/components/configSpotlight";
import ShellPrompt from "@/components/shellPrompt";
export default function Home() {
  return (
    <>
      <Hero />
      <Installation />
      <ConfigSpotlight />
      <Showcase />
      <ShellPrompt />
    </>
  );
}
