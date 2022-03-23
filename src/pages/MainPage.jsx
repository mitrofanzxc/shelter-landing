import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Slider } from "../components/Slider/Slider";
import { Help } from "../components/Help/Help";
import { Donate } from "../components/Donate/Donate";

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Slider />
      <Help />
      <Donate />
    </>
  );
};

export { MainPage };
