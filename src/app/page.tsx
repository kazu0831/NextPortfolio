import About from "@/components/client/about";
import Nav from "@/components/client/common/nav";
import TOP from "@/components/client/home";
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
          className="pt-[80px] h-screen bg-green-800 text-white font-bold text-center text-2xl"
        >
          <About />
        </div>
        <div
          id="skill"
          className="pt-[80px] h-screen bg-yellow-800 text-white font-bold text-center text-2xl"
        >
          <Skills />
        </div>
        <div
          id="projects"
          className="pt-[80px] h-screen bg-red-800 text-white font-bold text-center text-2xl"
        >
          projects
        </div>
        <div
          id="contact"
          className="pt-[80px] h-screen bg-purple-800 text-white font-bold text-center text-2xl"
        >
          contact
        </div>
      </div>
    </div>
  );
}
