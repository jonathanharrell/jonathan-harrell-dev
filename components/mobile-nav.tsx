"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { X } from "react-feather";
import { usePathname } from "next/navigation";

export const MobileNav = () => {
  const pathname = usePathname();

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const [_isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    if (typeof document.startViewTransition !== "undefined") {
      document.startViewTransition(() => {
        modalRef.current?.showModal();

        flushSync(() => {
          setIsModalOpen(true);
        });
      });
    } else {
      modalRef.current?.showModal();
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    if (typeof document.startViewTransition !== "undefined") {
      document.startViewTransition(() => {
        modalRef.current?.close();
      });
    } else {
      modalRef.current?.close();
    }
  };

  const handleDialogClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        className="py-1.5 px-3 rounded-full border border-neutral-700 hover:border-neutral-500 leading-none transition-colors duration-200 ease-in-out"
        onClick={showModal}
      >
        <span className="sr-only">Site Navigation Dialog</span>
        <span aria-hidden="true">Menu</span>
      </button>
      <dialog
        onClose={handleDialogClose}
        className="w-screen max-w-[100vw] h-dvh max-h-[100vh] m-0 p-6 bg-neutral-100 dark:bg-neutral-900"
        ref={modalRef}
      >
        <div className="flex flex-col relative h-full">
          <button
            autoFocus
            onClick={closeModal}
            className="absolute top-0 right-0 p-3"
          >
            <X />
            <span className="sr-only">Close site navigation dialog</span>
          </button>
          <nav
            aria-labelledby="mobile-navigation-label"
            className="flex flex-col flex-1"
          >
            <h2
              id="mobile-navigation-label"
              className="sr-only"
              aria-hidden="true"
            >
              Site navigation
            </h2>
            <ul className="flex flex-col items-center justify-center gap-8 flex-1 text-3xl">
              <li>
                <Link
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                  onClick={closeModal}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  aria-current={pathname === "/blog" ? "page" : undefined}
                  onClick={closeModal}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  aria-current={pathname === "/about" ? "page" : undefined}
                  onClick={closeModal}
                >
                  About
                </Link>
              </li>
              <li>
                <Link href="#subscribe" onClick={closeModal}>
                  Subscribe
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </dialog>
    </div>
  );
};
