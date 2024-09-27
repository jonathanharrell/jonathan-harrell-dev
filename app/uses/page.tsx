import { Header } from "@/components/header";

const UsesPage = () => {
  return (
    <>
      <Header title="Uses" />
      <main>
        <section>
          <ul className="space-y-4 [&_li_a]:font-medium [&_li_a]:underline [&_li_a]:underline-offset-2 [&_li_a]:decoration-neutral-200">
            <li>
              <p>IDE</p>
              <p><a href="">Webstorm</a></p>
            </li>
            <li>
              <p>UI Design</p>
              <p><a href="">Figma</a></p>
            </li>
            <li>
              <p>Long-form Writing</p>
              <p><a href="">Ulysses</a></p>
            </li>
            <li>
              <p>Backup</p>
              <p><a href="">Backblaze</a></p>
            </li>
            <li>
              <p>Backpack</p>
              <p><a href="">Backpack</a></p>
            </li>
            <li>
              <p>Headphones</p>
              <p><a href="">Airpods</a></p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default UsesPage;