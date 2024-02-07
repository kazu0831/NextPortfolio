import Nav from "@/components/client/common/nav";
import Dino from "@/components/client/three/Dino";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="w-full">
        <div
          id="home"
          className="pt-[80px] h-screen bg-blue-800 text-white font-bold text-center text-2xl"
        >
          <Dino />
        </div>
        <div
          id="about"
          className="pt-[80px] h-screen bg-green-800 text-white font-bold text-center text-2xl"
        >
          about
        </div>
        <div
          id="skill"
          className="pt-[80px] h-screen bg-yellow-800 text-white font-bold text-center text-2xl"
        >
          skill
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
