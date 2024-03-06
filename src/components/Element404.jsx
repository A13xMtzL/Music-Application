import { Link } from "react-router-dom";

export default function Element404() {
  return (
    <div className="mt-16">
      <main className="flex w-full flex-col items-center justify-center">
        <h1 className="text-9xl font-extrabold tracking-widest dark:text-white">
          404
        </h1>
        <div className="absolute rotate-12 rounded bg-pink-700 px-2 text-sm dark:bg-teal-500">
          Page Not Found
        </div>
        <Link to="/">
          <button className="mt-5">
            <a className="group relative inline-block bg-pink-700 text-sm font-medium text-pink-700 focus:outline-none focus:ring active:text-teal-500 dark:text-teal-500">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-pink-700 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 dark:bg-teal-500" />
              <span className="dark:bg-slate-700tel relative block border border-current bg-[#1A2238] px-8 py-3">
                Go Home
              </span>
            </a>
          </button>
        </Link>
      </main>
    </div>
  )
}
