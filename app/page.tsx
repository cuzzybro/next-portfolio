import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hiddenmx-auto sm:px-10 px-5" >
      <div className=" max-w-7xl w-full ">
        <Hero></Hero>
      </div>
    </main>
  );
}
