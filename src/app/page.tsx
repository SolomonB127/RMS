import Image from "next/image";
import Hero from "./components/Hero";
import Trustees from "./components/Trustees";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Trustees />
      </main>
    </div>
  );
}
