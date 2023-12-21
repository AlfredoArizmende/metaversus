import Image from "next/image";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}
