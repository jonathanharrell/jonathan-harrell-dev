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
      className="flex flex-col gap-3 w-full"
    >
      <div className="flex">
        <div className="flex flex-1">
          <label htmlFor="email" className="hidden">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            required
            className="flex-1 py-2.5 px-3 border border-neutral-200 dark:border-neutral-800 bg-transparent text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
            ref={inputRef}
          />
        </div>
        {pending ? "pending" : ""}
        <button
          type="submit"
          disabled={pending}
          className="px-4 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-sm tracking-wide disabled:opacity-50 hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-colors select-none"
        >
          Subscribe
        </button>
      </div>
      <div
        className={classNames(
          "flex items-center gap-2 text-sm",
          {
            "text-green-600 dark:text-green-400": state?.status === 200,
            "text-red-600 dark:text-red-400": state?.status && state.status !== 200,
          },
        )}
      >
        {state?.status === 200 && <CheckCircle size={14} role="presentation" />}
        {Boolean(state?.status && state.status !== 200) && (
          <XCircle size={14} role="presentation" />
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
