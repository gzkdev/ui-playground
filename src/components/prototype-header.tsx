import Link from "next/link";
import { ArrowElbowUpLeft } from "@phosphor-icons/react/dist/ssr";

export function PrototypeHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-10">
      <Link
        href="/"
        className="p-2 rounded-lg -m-2 bg-zinc-300 self-start hover:opacity-50 transition hover:text-zinc-800"
      >
        <span className="sr-only">Home</span>
        <ArrowElbowUpLeft />
      </Link>
      <h2>{title}</h2>
    </div>
  );
}
