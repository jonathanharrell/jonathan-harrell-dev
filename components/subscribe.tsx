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
    <form
      action={formAction}
      className="flex flex-wrap items-center gap-6 w-full max-w-[600px] mx-auto"
    >
      <div className="flex flex-1">
        <div className="flex flex-1">
          <label htmlFor="email" className="hidden">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email for more tips and tricks"
            autoComplete="email"
            required
            className="flex-1 rounded-none py-3 px-4 border border-neutral-200 dark:border-neutral-800 bg-neutral-100 font-sans dark:bg-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400"
            ref={inputRef}
          />
        </div>
        {pending ? "pending" : ""}
        <button
          type="submit"
          disabled={pending}
          className="px-4 bg-accent disabled:brightness-[50%] hover:brightness-[90%] hover:dark:brightness-[80%] font-sans text-neutral-900 transition-all duration-200 ease-in-out"
        >
          Subscribe
        </button>
      </div>
      <div
        className={classNames(
          "flex items-center justify-center gap-2 w-full font-sans text-center",
          {
            "text-green-500": state?.status === 200,
            "text-red-600": state?.status && state.status !== 200,
          },
        )}
      >
        {state?.status === 200 && <CheckCircle size={18} role="presentation" />}
        {Boolean(state?.status && state.status !== 200) && (
          <XCircle size={18} role="presentation" />
        )}
        <p aria-live="assertive" role="status">
          {state?.status === 200 && "Subscribed!"}
          {Boolean(state?.status && state.status !== 200) &&
            "Failed to subscribe"}
        </p>
      </div>
    </form>
  );
};
