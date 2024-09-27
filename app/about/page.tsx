import { HeaderAnimation } from "@/components/header-animation";

const AboutPage = () => {
  return (
    <div className="container max-w-3xl py-20">
      <div className="relative">
        <button className="absolute right-0">theme</button>
        <header>
          <HeaderAnimation className="w-16 h-16" style={{ viewTransitionName: "about-image" }} />
          <h1 className="mt-12 font-semibold">About</h1>
        </header>
        <section className="mt-12">
          <p className="max-w-[60ch] mt-2 leading-relaxed">I’m Jonathan Harrell, a designer and front-end engineer. I’ve been developing websites and applications for the last six years for a wide range of clients, from SaaS startups to established software companies to global hedge funds. While I am now a full-time software engineer, I am also passionate about design, and have worked as a UI/UX designer in an agency context. I am currently based in Brooklyn, New York.</p>
        </section>
        <figure className="mt-12">
          <img src="../assets/jonathan.webp" alt="Image of Jonathan Harrell" />
        </figure>
        <section className="mt-12">
          <h2 className="font-medium">Connect</h2>
          <ul className="space-y-4 mt-4 [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200">
            <li><a href="">Email</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">RSS</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;