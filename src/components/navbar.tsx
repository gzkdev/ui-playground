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
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Components</Link>
            </li>
            <Link href="/">Github</Link>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
