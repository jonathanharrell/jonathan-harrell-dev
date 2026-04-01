"use client";

import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X } from "react-feather";
import { ThemeRadio } from "@/components/theme-radio";

const navItems = [
  { href: "/", label: "Home", num: "01" },
  { href: "/blog", label: "Articles", num: "02" },
  { href: "/about", label: "About", num: "03" },
];

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
        className="text-xs tracking-widest uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        onClick={showModal}
      >
        <span className="sr-only">Site Navigation Dialog</span>
        <span aria-hidden="true">Menu</span>
      </button>
      <dialog
        onClose={handleDialogClose}
        className="w-screen max-w-[100vw] h-dvh max-h-screen m-0 p-8 bg-white dark:bg-neutral-950"
        ref={modalRef}
      >
        <div className="flex flex-col relative h-full">
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-5">
            <span className="text-sm tracking-widest uppercase">Jonathan Harrell</span>
            <button autoFocus onClick={closeModal} className="p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              <X size={20} />
              <span className="sr-only">Close site navigation dialog</span>
            </button>
          </div>
          <div className="flex flex-col gap-10 justify-center flex-1">
            <nav
              aria-labelledby="mobile-navigation-label"
              className="flex flex-col"
            >
              <h2
                id="mobile-navigation-label"
                className="sr-only"
                aria-hidden="true"
              >
                Site navigation
              </h2>
              <ul className="flex flex-col gap-6">
                {navItems.map(({ href, label, num }) => (
                  <li key={href} className="border-t border-neutral-100 dark:border-neutral-900 pt-4">
                    <Link
                      href={href}
                      aria-current={pathname === href ? "page" : undefined}
                      onClick={closeModal}
                      className="flex items-baseline gap-3 group"
                    >
                      <span className="text-[10px] text-accent">{num}</span>
                      <span className="text-3xl font-normal tracking-tight group-hover:text-accent transition-colors">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeRadio />
          </div>
        </div>
      </dialog>
    </div>
  );
};
