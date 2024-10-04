import {ReactNode} from "react";
import "./styles.css";

interface FormInputProps {
  children: ReactNode;
}

export const FormInputExample = ({ children }: FormInputProps) => {
  return (
    <div id="form-input-example" className="example-wrapper p-12 sm:px-16 bg-neutral-100 dark:bg-neutral-800">
      <div>
        {children}
      </div>
    </div>
  );
};