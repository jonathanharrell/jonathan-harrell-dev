import ReactMarkdown from "react-markdown";
import { Header } from "@/components/header";
import { default as resumeData } from "@/content/resume.json";
import { Job, Project, Resume } from "@/types";

const resume = resumeData as Resume;

const WorkPage = async () => {
  return (
    <>
      <Header title="Work" />
      <main className="space-y-12">
        {Object.entries(resume).map(([key, section]) => (
          <section key={key}>
            <h2 className="font-medium">{section.title}</h2>
            {section.job && (
              <ul className="space-y-4 mt-4">
                {section.job.map((job: Job) => (
                  <li key={job.company}>
                    <h3>{job.company}</h3>
                    <p>{job.position}</p>
                    <p>{job.startdate}</p>
                    <p>{job.enddate}</p>
                    <ReactMarkdown className="prose">{job.description}</ReactMarkdown>
                  </li>
                ))}
              </ul>
            )}
            {section.description && (
              <ReactMarkdown>{section.description}</ReactMarkdown>
            )}
            {section.project && (
              <ul>
                {section.project.map((project: Project) => (
                  <li key={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.link}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>
    </>
  );
}

export default WorkPage;