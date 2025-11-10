import Design from "@/components/Design";
import Profile from "@/components/Profile";
import Study from "@/components/Study";
import About from "@/components/About";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Design />
      <div className="md:flex">
        {/* Left side - 40% */}
        <div className="md:w-[30%]">
          <Profile />
          <div className="grid gap-15">
            <Study />
            <div className="hidden md:block">
              <Skills />
            </div>
          </div>
        </div>

        {/* Right side - 60% */}
        <div className="md:w-[70%] flex flex-col gap-20">
          <About />
          <div className="md:hidden">
            <Skills />
          </div>
          <Tech />
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}
