import React from "react";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Splines from "./Splines";
import { Fab } from "@mui/material";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col content-center mt-2">
        <div className="flex justify-center item-center text-white ">
        <h1 className="text-4xl font-bold">Checking weather was never a fun activity... until now!</h1>
        
        </div>
        <div><p className="flex justify-center item-center text-white mt-2 text-2xl">Pokemon is here with you.</p></div>
        <Spline scene="https://prod.spline.design/fucZFLG5YLXBIrAQ/scene.splinecode" />
        <div className="mx-auto max-w-screen-md">
    <p className="text-white flex justify-center px-4 md:px-20 mb-10">
        With pocketforecast, add a touch of adventure to weather awareness. Turn your everyday forecast into a delightful experience, blended with the magic of Pokemons with accurate weather updates. Say goodbye to the boring and dull weather updates and immerse yourself in a world where Pokemon come to life.
    </p>
</div>
<div className="flex justify-center">
<Fab
          variant="extended"
          className="text-white"
          style={{
            borderRadius: 35,
            backgroundColor: "#5ac9a1",
          }}
          sx={{
            bgcolor: "#5ac9a1",
            color: "#fff",
            "&:hover": {
              bgcolor: "#40c998",
            },
          }}
        >
          Subscribe to learn more...
        </Fab>
</div>
        
      </div>
    </div>
  );
};

export default HeroSection;
