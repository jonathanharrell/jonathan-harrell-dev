import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import { HeaderAnimation } from "@/components/header-animation";

export const metadata: Metadata = {
  title:
    "Jonathan Harrell | CSS Blogger & Teacher, UI/UX Designer, Front-End Engineer",
  description:
    "Want to stay up-to-date on the latest developments in CSS and JavaScript? Get tips, tutorials and thoughts from designer/developer Jonathan Harrell.",
  openGraph: {
    images: ["/assets/seo/og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const HomePage = async () => {
  return (
    <section className="flex flex-col items-center justify-center relative md:h-[calc(100vh-120px)] md:min-h-[600px] pb-6 sm:pb-10">
      <HeaderAnimation className="w-[400px] h-[400px] md:min-w-[400px] md:min-h-[400px] md:w-[50vh] md:h-[50vh] md:max-w-[600px] md:max-h-[600px]" />
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl text-center">
          UI/UX Designer & <br />
          <span className="italic">Front-End Engineer</span>
        </h1>
        <p className="max-w-[520px] mt-4 mx-auto font-sans leading-relaxed text-center text-neutral-600 dark:text-neutral-400">
          I’m a designer and developer committed to making the web a more
          empowering and accessible place. I create engaging user experiences
          and bring them to life through maintainable, high-quality code.
        </p>
        <p className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 py-3 pl-5 pr-3 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 font-sans transition-colors"
          >
            Learn more
            <ChevronRight size={18} className="opacity-50" />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomePage;
