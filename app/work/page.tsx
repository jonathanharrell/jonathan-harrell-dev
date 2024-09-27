import { Header } from "@/components/header";
import resume from "@/content/resume.json";

const WorkPage = async () => {
  return (
    <>
      <Header title="Work" />
      <main>
        <section>
          {JSON.stringify(resume)}
        </section>
      </main>
    </>
  );
}

export default WorkPage;