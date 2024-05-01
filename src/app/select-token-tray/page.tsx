import Link from "next/link";
import { ArrowElbowUpLeft } from "@phosphor-icons/react/dist/ssr";

export default function SelectTokenTray() {
  return (
    <div className="max-w-screen-md p-6 mx-auto space-y-40">
      <div className="my-10 space-y-2">
        <div className="flex flex-col gap-10">
          <Link
            href="/"
            className="p-2 rounded-lg -m-2 bg-zinc-800 self-start hover:opacity-50 transition hover:text-zinc-100"
          >
            <span className="sr-only">Home</span>
            <ArrowElbowUpLeft />
          </Link>
          <h2>Select token tray</h2>
        </div>
      </div>
    </div>
  );
}
