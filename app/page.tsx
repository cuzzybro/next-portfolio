import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(main-bg.webp)'}}>
        <div className="pl-20 md:pl-40 pb-50 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className=" text-[50px] text-white font-semibold">
            Text Header
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Web Development
            </span>
          </h1>
          <p className=" text-gray-200 hidden md:block ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente vel porro totam earum sed harum est adipisci hic voluptates, ex ipsum officia quas voluptate veritatis quia nihil dolores? Aut?
          </p>
          <div className=" flex-col md:flex-row hidden md:flex ">
            <Link href="/my-skills" className=" rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn more
            </Link>
            <Link href="/my-projects" className=" rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              My Projects
            </Link>
            <Link href="/contact" className=" rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
