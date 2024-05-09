import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-lg mx-auto p-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-zinc-800">
            ui playground
          </Link>

          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link href="/">Components</Link>
            </li>
            <Link
              href="/"
              className="flex py-2 px-4 rounded-full border border-transparent bg-zinc-800 text-zinc-100"
            >
              Github
            </Link>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
