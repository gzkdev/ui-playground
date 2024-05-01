import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-screen-md p-6 mx-auto space-y-20">
      <div className="my-10 space-y-2">
        <h1>UI Playground</h1>
        <p>A personal repository for user interface prototypes</p>
      </div>

      <div className="space-y-6">
        <h2>Components</h2>

        <ul>
          <li>
            <Link
              href="/select-token-tray"
              className="flex p-3 -m-3 transition rounded-lg hover:bg-zinc-300 hover:text-zinc-800"
            >
              Select token tray
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
