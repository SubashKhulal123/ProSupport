import React from "react";
import { useTitle } from "../useTitle.js";
import Hero from "../components/Hero.jsx";
import IntroText from "../components/IntroText.jsx";
import Concerns from "../components/Concerns.jsx";
import Promise from "../components/Promise.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Services from "../components/Services.jsx";

export default function Home() {
  useTitle("home");
  return (
    <>
      <Hero />
      <Promise />
      <Concerns />
      <IntroText />
      <WhyChooseUs />
      <Services />
    </>
  );
}
