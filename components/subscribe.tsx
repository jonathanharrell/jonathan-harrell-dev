"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {subscribe} from "@/actions";

const initialState = {
  message: "",
};

export const Subscribe = () => {
  const [state, formAction] = useActionState(subscribe, initialState);
  const { pending } = useFormStatus();

  return (
    <section id="subscribe" className="py-10">
      <header className="flex flex-col gap-4">
        <h2 className="text-3xl italic">Subscribe</h2>
        <p className="text-lg">Want more front-end tips and tricks? Sign up for my newsletter to stay up-to-date.</p>
      </header>
      <form action={formAction} className="flex gap-2">
        <div>
          <label htmlFor="email" className="hidden">Email</label>
          <input name="email" type="email" placeholder="Enter your email address" required/>
        </div>
        <button type="submit" disabled={pending}>Subscribe</button>
      </form>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </section>
  );
}