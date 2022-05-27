import Link from "next/link";
import type { NextPage } from "next";

export default function Error404(): NextPage {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-screen text-center bg-slate-800 text-sky-300">
      <h1 className="mb-8 font-bold text-black text-9xl">404</h1>
      <p>
        The page you are looking for does not exist.
        <br />
        <br />
        <Link href="/">
          <a className="flex flex-row items-center justify-center mx-auto">
            <button className="flex flex-row items-center justify-center border rounded w-fit m-1 px-4 py-2 text-xl hover:border-sky-400 border-sky-300 text-sky-300 hover:text-sky-400">
              Go to homepage <i className="pi pi-home ml-1" />
            </button>
          </a>
        </Link>
      </p>
    </div>
  );
}
