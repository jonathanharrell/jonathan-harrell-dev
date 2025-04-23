import Image from "next/image";
import { Header } from "@/components/header";
import {Subscribe} from "@/components/subscribe";

const AboutPage = () => {
  return (
    <main>
      <Header/>
      <div className="max-w-[1100px] mx-auto">
        <section className="my-20">
          <div className="flex gap-8">
            <div className="flex-1">
              <h1 className="text-5xl mb-6">About Jonathan</h1>
              <p className="text-xl mb-6">
                I’m Jonathan Harrell, a designer and front-end engineer. I’ve been developing websites and applications
                for the last six years for a wide range of clients, from SaaS startups to established software companies
                to global hedge funds. While I am now a full-time software engineer, I am also passionate about design,
                and have worked as a UI/UX designer in an agency context. I am currently based in Brooklyn, New York.
              </p>
              <p className="text-xl">
                Talk about my other blog, Human in the Loop.
              </p>
            </div>
            <div className="flex justify-end flex-1">
              <figure className="relative -mt-[80px]">
                <Image src="/assets/jonathan-2023.jpg" alt="Image of Jonathan Harrell" width={440} height={440}
                       className="aspect-square max-w-full rounded-full"/>
                <svg className="absolute top-0 left-0 w-full h-full translate-x-[-16px] translate-y-[-16px]">
                  <circle cx="50%" cy="50%" r="49%" fill="none" stroke="var(--accent)" stroke-width="1"></circle>
                </svg>
                <svg className="absolute top-0 left-0 w-full h-full  translate-x-[16px] translate-y-[16px]">
                  <circle cx="50%" cy="50%" r="49%" fill="none" stroke="var(--accent)" stroke-width="1"></circle>
                </svg>
              </figure>
            </div>
          </div>
        </section>
        <section>
          <header>
            <h2 className="text-3xl italic">Connect</h2>
          </header>
          <hr className="my-6 border-neutral-800 border-dashed"/>
          <ul
            className="list-disc space-y-2 [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200 text-lg">
            <li><a href="">Email</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">RSS</a></li>
          </ul>
        </section>
        <Subscribe />
      </div>
    </main>
  );
}

export default AboutPage;