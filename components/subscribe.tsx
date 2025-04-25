"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import {CheckCircle, XCircle} from "react-feather";
import {subscribe} from "@/actions";
import classNames from "classnames";

const initialState = {
  status: null,
};

export const Subscribe = () => {
  const [state, formAction] = useActionState(subscribe, initialState);
  const { pending } = useFormStatus();

  return (
    <section id="subscribe" className="py-10">
      <header className="flex flex-col gap-4">
        <h2 className="text-3xl italic">Subscribe</h2>
      </header>
      <hr role="presentation" className="my-6 border-neutral-800 border-dashed"/>
      <div className="flex flex-col gap-6">
        <p className="text-lg">Want more front-end tips and tricks? Sign up for my newsletter to stay up-to-date.</p>
        <form action={formAction} className="flex items-center gap-6">
          <div className="flex gap-2">
            <div>
              <label htmlFor="email" className="hidden">Email</label>
              <input name="email" type="email" placeholder="Enter your email address" required
                     className="w-[260px] max-w-full py-1.5 px-3 border border-transparent bg-neutral-800 text-lg text-neutral-100 placeholder:text-neutral-500"/>
            </div>
            {pending ? 'pending' : ''}
            <button type="submit" disabled={pending}
                    className="px-3 bg-accent disabled:brightness-[50%] hover:brightness-[80%] text-lg text-neutral-900 transition-all duration-200 ease-in-out">Subscribe
            </button>
          </div>
          {state?.status && (
            <div className={classNames("flex items-center gap-2", {
              "text-green-500": state.status === "subscribed",
              "text-red-600": state.status !== "subscribed"
            })}>
              {state.status !== 200 ? (
                <XCircle size={18} />
              ) : (
                <CheckCircle size={18} />
              )}
              <p aria-live="polite" role="status" className="text-lg">
                {state.status === "subscribed" ? "Subscribed!" : "Failed to subscribe"}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}