import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import BrandsSection from "../components/BrandsSection";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Bike Service Express "
        }
        imageUrl={"/se.png"}
      />
      
      <Biography imageUrl={"/ser.png"} />
      <BrandsSection /> {}
      <MessageForm />
    </>
  );
};

export default Home;
