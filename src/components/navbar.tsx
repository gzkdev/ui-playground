import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <nav>
      <div className="max-w-screen-lg mx-auto p-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold">
            ui playground
          </Link>
        </div>
      </div>
    </nav>
  );
}
