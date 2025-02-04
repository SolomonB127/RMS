import Image from "next/image";
import Hero from "./components/Hero";
import Trustees from "./components/Trustees";
import Process from "./components/Process";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Trustees />
        <Process />
        <Categories />
      </main>
    </div>
  );
}
