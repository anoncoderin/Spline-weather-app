import Image from "next/image";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Spline from '@splinetool/react-spline';
import ImgMediaCard from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-[#1c0d37cd] p-14`}>
       
      <Nav/>

      <HeroSection/>
      
      <ImgMediaCard/>
      <Footer/>
      
    </main>
  );
}
