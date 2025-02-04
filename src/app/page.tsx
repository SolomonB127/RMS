import Hero from "./components/Hero";
import Trustees from "./components/Trustees";
import Process from "./components/Process";
import Categories from "./components/Categories";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Trustees />
        <Process />
        <Categories />
        <Contact />
      </main>
    </div>
  );
}
