import About from "@/components/client/about";
import Nav from "@/components/client/common/nav";
import Contact from "@/components/client/contact";
import TOP from "@/components/client/home";
import Projects from "@/components/client/projects";
import Skills from "@/components/client/skills";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="w-full">
        <div
          id="home"
          className="pt-[80px] h-screen bg-blue-800 text-white font-bold text-center text-2xl"
        >
          <TOP />
        </div>
        <div
          id="about"
          className="pt-[80px] pb-[80px] bg-green-800 text-white"
        >
          <About />
        </div>
        <div
          id="skill"
          className="pt-[80px] pb-[80px] bg-yellow-800 text-white"
        >
          <Skills />
        </div>
        <div
          id="projects"
          className="pt-[80px] pb-[80px] bg-red-800 text-white"
        >
          <Projects />
        </div>
        <div
          id="contact"
          className="pt-[80px] h-screen bg-purple-800 text-white"
        >
          <Contact />
        </div>
      </div>
    </div>
  );
}
