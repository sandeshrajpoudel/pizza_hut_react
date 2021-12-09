import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../SideBar";
import {
  HeroContainer,
  HeroBtn,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./HeroElement";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toogle =()=>{
        setIsOpen(!isOpen);
    }
  return (
    <HeroContainer>
      <Navbar  toogle={toogle}/>
      <Sidebar isOpen={isOpen} toogle={toogle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 2 minutes</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
