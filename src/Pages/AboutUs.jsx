import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Bike..."}
        imageUrl={"/vi.png"}
      />
      <Biography imageUrl={"/as.png"} />
    </>
  );
};

export default AboutUs;
