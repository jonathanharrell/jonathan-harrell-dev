import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex items-start md:justify-end md:order-1">
            <figure className="relative max-w-[300px] md:max-w-[200px] lg:max-w-[400px] mx-auto">
              <Image src="/assets/jonathan-2023.jpg" alt="Image of Jonathan Harrell" width={440} height={440}
                     className="aspect-square max-w-full rounded-full"/>
              <svg className="absolute top-0 left-0 w-full h-full translate-x-[-16px] translate-y-[-16px]">
                <circle cx="50%" cy="50%" r="49%" fill="none" stroke="var(--accent)" strokeWidth="1"></circle>
              </svg>
              <svg className="absolute top-0 left-0 w-full h-full  translate-x-[16px] translate-y-[16px]">
                <circle cx="50%" cy="50%" r="49%" fill="none" stroke="var(--accent)" strokeWidth="1"></circle>
              </svg>
            </figure>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <h1 className="text-4xl md:text-5xl">About Jonathan</h1>
            <p className="text-xl">
              I’m Jonathan Harrell, a designer and front-end engineer. I’ve been developing websites and applications
              for the last six years for a wide range of clients, from SaaS startups to established software companies
              to global hedge funds. While I am now a full-time software engineer, I am also passionate about design,
              and have worked as a UI/UX designer in an agency context.
            </p>
            <p className="text-xl">
              I have another blog, called <a href="https://blog.jonathan-harrell.com" target="_blank"
                                             className="underline hover:no-underline underline-offset-2 decoration-[1px]">Human
              in the Loop</a>, which I treat as a digital commonplace book—a repository for poems, photos, art, and
              more. I am currently based in Brooklyn, New York.
            </p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <header>
          <h2 className="text-3xl italic">Uses</h2>
        </header>
        <hr className="my-6 border-neutral-800 border-dashed"/>
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200">
          <li>
            <p className="text-lg text-neutral-400">IDE</p>
            <p><a href="" className="text-xl">Webstorm</a></p>
          </li>
          <li>
            <p className="text-lg text-neutral-400">UI Design</p>
            <p><a href="" className="text-xl">Figma</a></p>
          </li>
          <li>
            <p className="text-lg text-neutral-400">Long-form Writing</p>
            <p><a href="" className="text-xl">Ulysses</a></p>
          </li>
          <li>
            <p className="text-lg text-neutral-400">Photo Editing</p>
            <p><a href="" className="text-xl">Lightroom</a></p>
          </li>
          <li>
            <p className="text-lg text-neutral-400">Backup</p>
            <p><a href="" className="text-xl">Backblaze</a></p>
          </li>
          <li>
            <p className="text-lg text-neutral-400">Backpack</p>
            <p><a href="" className="text-xl">eBags Pro Slim</a></p>
          </li>
          <li>
            <p className="text-lg text-neutral-400">Headphones</p>
            <p><a href="" className="text-xl">Airpods Pro</a></p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default AboutPage;