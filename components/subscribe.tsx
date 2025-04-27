"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle, XCircle } from "react-feather";
import { subscribe } from "@/actions";
import classNames from "classnames";

const subscribeId = "subscribe";

const initialState = {
  status: null,
};

export const Subscribe = () => {
  const [state, formAction] = useActionState(subscribe, initialState);
  const { pending } = useFormStatus();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onHashChanged = () => {
      if (window.location.hash === `#${subscribeId}`) {
        inputRef.current?.focus();
      }
    };

    window.addEventListener("hashchange", onHashChanged);

    return () => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  return (
    <section id={subscribeId} className="py-6 sm:py-10">
      <header className="flex flex-col gap-4">
        <h2 className="text-3xl italic">Subscribe</h2>
      </header>
      <hr
        role="presentation"
        className="my-6 border-neutral-800 border-dashed"
      />
      <div className="flex flex-col gap-6">
        <p className="text-lg">
          Want more front-end tips and tricks? Sign up for my newsletter to stay
          up-to-date.
        </p>
        <form action={formAction} className="flex flex-wrap items-center gap-6">
          <div className="flex gap-2 max-sm:flex-1">
            <div className="flex max-sm:flex-1">
              <label htmlFor="email" className="hidden">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className="flex-1 sm:w-[300px] rounded-none py-1.5 px-3 border border-transparent bg-neutral-800 text-lg text-neutral-100 placeholder:text-neutral-400"
                ref={inputRef}
              />
            </div>
            {pending ? "pending" : ""}
            <button
              type="submit"
              disabled={pending}
              className="px-3 bg-accent disabled:brightness-[50%] hover:brightness-[80%] text-lg text-neutral-900 transition-all duration-200 ease-in-out"
            >
              Subscribe
            </button>
          </div>
          <div
            className={classNames("flex items-center gap-2", {
              "text-green-500": state?.status === 200,
              "text-red-600": state?.status && state.status !== 200,
            })}
          >
            {state?.status === 200 && (
              <CheckCircle size={18} role="presentation" />
            )}
            {Boolean(state?.status && state.status !== 200) && (
              <XCircle size={18} role="presentation" />
            )}
            <p aria-live="assertive" role="status" className="text-lg">
              {state?.status === 200 && "Subscribed!"}
              {Boolean(state?.status && state.status !== 200) &&
                "Failed to subscribe"}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
