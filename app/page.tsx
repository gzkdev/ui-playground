import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="bg-slate-800 p-6 text-slate-300">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="space-y-6 py-20 text-2xl">
            <h1 className="text-5xl font-bold text-slate-100">
              React Code Playground
            </h1>
            <p>A personal repository for design prototypes built with React</p>
          </div>
        </div>
      </div>

      <div className="px-6 py-10">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            <Link href="/" className="rounded-lg bg-slate-200 p-4">
              <span>Animated Tabs</span>
            </Link>
            <Link href="/" className="rounded-lg bg-slate-200 p-4">
              <span>Draggable box</span>
            </Link>
            <Link href="/" className="rounded-lg bg-slate-200 p-4">
              <span>Shared layout animation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
