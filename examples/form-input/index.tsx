import { ReactNode } from "react";
import "./styles.css";

interface FormInputProps {
  children: ReactNode;
}

export const FormInputExample = ({ children }: FormInputProps) => {
  return (
    <figure>
      <div>
        <div
          id="form-input-example"
          className="not-article-prose p-8 sm:py-12 sm:px-16 bg-neutral-950 font-sans text-base"
        >
          {children}
        </div>
      </div>
    </figure>
  );
};
