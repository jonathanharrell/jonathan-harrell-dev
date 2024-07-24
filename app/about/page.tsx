import { Nav } from "@/components/nav";

const AboutPage = () => {
  return (
    <div className="max-w-[700px] mx-auto py-6">
      <header className="flex items-center gap-8">
        <span>JH</span>
        <Nav/>
      </header>
      <h1 className="my-12 font-forza font-bold text-3xl">About Jonathan</h1>
      <section className="bio flex gap-8 my-12">
        <div className="flex-shrink-0 w-48 h-48 bg-neutral-200 dark:bg-neutral-800 rounded-full mb-6" />
        <p className="prose">I’m Jonathan Harrell, a designer and front-end engineer. I’ve been developing websites and applications for the last six years for a wide range of clients, from SaaS startups to established software companies to global hedge funds. While I am now a full-time software engineer, I am also passionate about design, and have worked as a UI/UX designer in an agency context. I am currently based in Brooklyn, New York.</p>
      </section>
      <section className="my-12">
        <h2 className="mb-8 font-forza italic font-bold text-2xl text-accent">Involvement</h2>
        <div className="grid grid-cols-2 gap-8">
          <section className="flex flex-col gap-2">
            <h3 className="font-bold">Zapier</h3>
            <p className="prose">I am proud to be a UI engineer at Vowel, a video conferencing tool for remote teams that includes some exciting AI features, like auto-generated summaries and action items.</p>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-bold">Vowel</h3>
            <p className="prose">I am proud to be a UI engineer at Vowel, a video conferencing tool for remote teams that includes some exciting AI features, like auto-generated summaries and action items.</p>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-bold">InVision</h3>
            <p className="prose">I am proud to be a UI engineer at Vowel, a video conferencing tool for remote teams that includes some exciting AI features, like auto-generated summaries and action items.</p>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-bold">WHQ</h3>
            <p className="prose">I am proud to be a UI engineer at Vowel, a video conferencing tool for remote teams that includes some exciting AI features, like auto-generated summaries and action items.</p>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-bold">LogRocket</h3>
            <p className="prose">I occasionally write for the LogRocket blog, a valuable information resource for front-end developers. LogRocket is an advanced error tracking and session recording service.</p>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="font-bold">HiQ</h3>
            <p className="prose">I maintain a very lightweight CSS library that provides foundational styles for developers to quickly get started, including responsive typography and input styling.</p>
          </section>
        </div>
      </section>
      <section className="my-12">
        <h2 className="mb-8 font-forza italic font-bold text-2xl text-accent">What I Use</h2>
        <ul className="space-y-2">
          <li className="flex justify-between gap-8">
            <span>IDE</span>
            <span className="text-accent">Webstorm</span>
          </li>
          <li className="flex justify-between gap-8">
            <span>Terminal</span>
            <span className="text-accent">Hyper</span>
          </li>
          <li className="flex justify-between gap-8">
            <span>UI Design</span>
            <span className="text-accent">Figma</span>
          </li>
          <li className="flex justify-between gap-8">
            <span>Backup</span>
            <span className="text-accent">Backblaze</span>
          </li>
          <li className="flex justify-between gap-8">
            <span>Backpack</span>
            <span className="text-accent">Backpack</span>
          </li>
          <li className="flex justify-between gap-8">
            <span>Headphones</span>
            <span className="text-accent">Airpods</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutPage;