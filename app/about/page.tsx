import { HeaderAnimation } from "@/components/header-animation";
import { Header } from "@/components/header";

const AboutPage = () => {
  return (
    <>
      <Header title="About" />
      <main className="space-y-12">
        <section>
          <p className="max-w-[60ch] mt-2 leading-relaxed">I’m Jonathan Harrell, a designer and front-end engineer. I’ve been developing websites and applications for the last six years for a wide range of clients, from SaaS startups to established software companies to global hedge funds. While I am now a full-time software engineer, I am also passionate about design, and have worked as a UI/UX designer in an agency context. I am currently based in Brooklyn, New York.</p>
        </section>
        {/*<figure className="mt-12">*/}
        {/*  <img src="../assets/jonathan.webp" alt="Image of Jonathan Harrell" />*/}
        {/*</figure>*/}
        <section>
          <h2 className="font-medium">Connect</h2>
          <ul className="space-y-4 mt-4 [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200">
            <li><a href="">Email</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">RSS</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default AboutPage;