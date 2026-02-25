"use client";

import { useEffect } from "react";
import { Link } from "@/i18n/navigation";

type MobileMenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

/**
 * Full-screen overlay menu for mobile/tablet. Content stacked vertically with
 * horizontal borders below each section. Closes on link click or Escape.
 */
export function MobileMenuModal({ isOpen, onClose }: MobileMenuModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-white flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <nav className="flex flex-col flex-1 pt-16 px-6 pb-8" aria-label="Mobile navigation">
        <ul className="flex flex-col list-none m-0 p-0 gap-0">
          <li>
            <a
              href="#turkey"
              className="block py-4 text-black no-underline text-lg hover:underline"
              onClick={onClose}
            >
              Turkey
            </a>
          </li>
          <li>
            <a
              href="#greece"
              className="block py-4 text-black no-underline text-lg hover:underline"
              onClick={onClose}
            >
              Greece
            </a>
          </li>
          <li>
            <a
              href="#croatia"
              className="block py-4 text-black no-underline text-lg hover:underline"
              onClick={onClose}
            >
              Croatia
            </a>
          </li>
        </ul>
        <hr className="border-t border-black/20 my-2 w-full" />

        <ul className="flex flex-col list-none m-0 p-0 gap-0">
          <li>
            <Link
              href="/routes"
              className="block py-4 text-black no-underline text-lg hover:underline"
              onClick={onClose}
            >
              Gulet Cruise Routes
            </Link>
          </li>
        </ul>
        <hr className="border-t border-black/20 my-2 w-full" />

        <ul className="flex flex-col list-none m-0 p-0 gap-0">
          <li>
            <Link
              href="/about"
              className="block py-4 text-black no-underline text-lg hover:underline"
              onClick={onClose}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-4 text-black no-underline text-lg hover:underline"
              onClick={onClose}
            >
              Contact
            </Link>
          </li>
        </ul>
        <hr className="border-t border-black/20 my-2 w-full" />
      </nav>
    </div>
  );
}
