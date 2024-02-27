import React from "react";
import { Fab } from "@mui/material";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Splines from "./Splines";
const Nav = () => {
  return (
    <div className="flex flex justify-between px-4 py-2 md:px-8 md:py-4">
      
      <div className="flex flex-col items-center sm:flex-row">
        <Image
          src="/logo_poke_cloud.png"
          width={50}
          height={50}
          alt="logo"
          className="sm:mr-3"
        />
        <h1 className="font-bold text-white mt-2 sm:mt-0">PocketForecast</h1>
      </div>
      <div className="absolute z-1">
       
      </div>

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
        Sign up
      </Fab>

      
    </div>
  );
};

export default Nav;
