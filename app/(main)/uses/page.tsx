import { Header } from "@/components/header";

const UsesPage = () => {
  return (
    <>
      <Header title="Uses" />
      <main>
        <section>
          <ul className="space-y-4 [&_li_a]:font-medium [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200 [&_li_a]:dark:decoration-neutral-700">
            <li>
              <p className="dark:text-neutral-400">IDE</p>
              <p><a href="">Webstorm</a></p>
            </li>
            <li>
              <p className="dark:text-neutral-400">UI Design</p>
              <p><a href="">Figma</a></p>
            </li>
            <li>
              <p className="dark:text-neutral-400">Long-form Writing</p>
              <p><a href="">Ulysses</a></p>
            </li>
            <li>
              <p className="dark:text-neutral-400">Backup</p>
              <p><a href="">Backblaze</a></p>
            </li>
            <li>
              <p className="dark:text-neutral-400">Backpack</p>
              <p><a href="">Backpack</a></p>
            </li>
            <li>
              <p className="dark:text-neutral-400">Headphones</p>
              <p><a href="">Airpods</a></p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default UsesPage;