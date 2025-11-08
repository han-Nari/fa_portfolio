import Design from "@/components/Design";
import Profile from "@/components/Profile";
import Study from "@/components/Study";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Design />
      <div className="md:flex">
        <div>
          <Profile />
          <Study />
        </div>
        <div className="flex flex-col gap-20">
          <About />
          <Tech />
          <Projects />
        </div>
      </div>
    </>
  );
}
