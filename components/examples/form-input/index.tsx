import {ReactNode} from "react";
import "./styles.css";

interface FormInputProps {
  children: ReactNode;
}

export const FormInputExample = ({children}: FormInputProps) => {
  return (
    <figure>
      <div>
        <div id="form-input-example" className="not-article-body p-12 sm:px-16 bg-neutral-100 dark:bg-neutral-950 font-sans text-base">
          {children}
        </div>
      </div>
    </figure>
  );
};