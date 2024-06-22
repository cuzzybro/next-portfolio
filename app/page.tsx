import Grid from "@/components/Grid";
import Hero from "@/components/hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hiddenmx-auto sm:px-10 px-5" >
      <div className=" max-w-7xl w-full ">
        <FloatingNav
            navItems={[
              { name: "Home", link: "/", icon: <IconHome className='h-4 w-4 text-neutral-500 dark:text-white'/> },
              { name: "About", link: "/", icon: <IconUser className='h-4 w-4 text-neutral-500 dark:text-white'/> },
              { name: "Contact", link: "/", icon: <IconMessage className='h-4 w-4 text-neutral-500 dark:text-white'/> },
            ]}
          />
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
