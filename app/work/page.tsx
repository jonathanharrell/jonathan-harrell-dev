import ReactMarkdown from "react-markdown";
import { Header } from "@/components/header";
import { default as resumeData } from "@/content/resume.json";
import { Job, Resume } from "@/types";

const resume = resumeData as Resume;

const WorkPage = async () => {
  return (
    <>
      <Header title="Work" />
      <main className="space-y-12">
        {Object.entries(resume).map(([key, section]) => (
          <section key={key}>
            <h2 className="mb-6 font-semibold">{section.title}</h2>
            {section.job && (
              <ul className="space-y-6">
                {section.job.map((job: Job) => (
                  <li key={job.company}>
                    <h3 className="font-medium">{job.position}, {job.company}</h3>
                    <p className="text-sm text-neutral-400 dark:text-neutral-500">
                      {job.startdate} – {job.enddate}
                    </p>
                    <ReactMarkdown className="mt-2 prose prose-ul:pl-4 prose-li:my-0 dark:prose-ul:text-neutral-400">
                      {job.description}
                    </ReactMarkdown>
                  </li>
                ))}
              </ul>
            )}
            {section.description && (
              <div>
                <ReactMarkdown>
                  {section.description}
                </ReactMarkdown>
              </div>
            )}
          </section>
        ))}
      </main>
    </>
  );
}

export default WorkPage;