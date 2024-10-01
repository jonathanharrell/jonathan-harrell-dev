import { Header } from "@/components/header";
import {Link} from "next-view-transitions";

const ExperimentsPage = () => {
  return (
    <>
      <Header title="Experiments" />
      <main>
        <section>
          <ul className="space-y-8 [&_li_a]:font-medium [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200 [&_li_a]:dark:decoration-neutral-700">
            <li>
              <Link href="/experiments/css-grid-callouts">CSS Grid</Link>
            </li>
            <li>
              <Link href="/experiments/css-grid-callouts">CSS Grid Callouts</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default ExperimentsPage;