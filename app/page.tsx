import Link from "next/link";
import {
  PiGithubLogoBold,
  PiLinkedinLogoBold,
  PiInstagramLogoBold,
  PiTwitterLogoBold,
} from "react-icons/pi";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 mx-auto grid max-w-ctn lg:grid-cols-2">
        <div className="top-0 w-full px-5 py-10 lg:sticky lg:h-screen lg:py-20">
          <div className="mx-2 flex h-full flex-col justify-between gap-10">
            <header className="max-w-[400px]">
              <h1 className="text-6xl font-semibold tracking-tighter text-gray-600">
                <Link href="/">Godswill Ezihe</Link>
              </h1>
              <div className="mb-5 mt-3 text-lg tracking-tight sm:text-xl">
                Software Engineer
              </div>
              <div className="">
                I build accessible, inclusive products and digital experiences
                for the web.
              </div>
            </header>
            <ul className="flex flex-wrap items-center gap-6 text-2xl">
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                >
                  <PiGithubLogoBold />
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <PiInstagramLogoBold />
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <PiTwitterLogoBold />
                </a>
              </li>
              <li>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <PiLinkedinLogoBold />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[300vh]">
          <div className="flex flex-col gap-20 py-10 lg:py-20">
            <section id="about">
              <header className="sticky top-0 my-5 bg-inherit p-5 text-sm font-semibold uppercase tracking-widest text-gray-600 lg:hidden">
                About
              </header>
              <div className="flex flex-col gap-4 px-5">
                <p>
                  Back in 2012, I decided to try my hand at creating custom
                  Tumblr themes and tumbled head first into the rabbit hole of
                  coding and web development. Fast-forward to today, and
                  I&apos;ve had the privilege of building software for an
                  advertising agency, a start-up, a student-led design studio,
                  and a huge corporation.
                </p>
                <p>
                  My main focus these days is building products and leading
                  projects for our clients at Upstatement. In my free time I've
                  also released an online video course that covers everything
                  you need to know to build a web app with the Spotify API.
                </p>
                <p>
                  When I&apos;m not at the computer, I&apos;m usually rock
                  climbing, hanging out with my wife and two cats, or running
                  around Hyrule searching for Korok seeds
                </p>
              </div>
            </section>
            <section id="experience">
              <header className="sticky top-0 my-5 bg-inherit p-5 text-sm font-semibold uppercase tracking-widest text-slate-600 lg:hidden">
                Experience
              </header>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
