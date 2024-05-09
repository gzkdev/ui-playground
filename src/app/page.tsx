import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 space-y-20">
      <div className="my-10 space-y-2 text-center">
        <h1 className="text-4xl">UI Playground</h1>
        <p>A personal repository for user interface prototypes</p>
      </div>
      <div className="max-w-md mx-auto space-y-6 text-sm">
        <ul>
          <li>
            <Link
              href="/select-token-tray"
              className="flex p-2 -m-2 transition rounded-xl border border-transparent hover:bg-zinc-200/50 hover:text-zinc-800 hover:border-zinc-200"
            >
              Select token tray
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
