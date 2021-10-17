import React from "react";
import Link from "next/link";

export const Menu = () => {
  return (
    <nav>
      <ul className="flex items-center">
        <li className="self-stretch h-12 mr-6 group">
          <Link href="/">
            <a className="menu-link">Home</a>
          </Link>
        </li>
        <li className="self-stretch h-12 mr-6 group">
          <Link href="/about">
            <a className="menu-link">About</a>
          </Link>
        </li>
        <li className="relative self-stretch h-12 mr-6 group">
          <Link href="/projects">
            <a className="menu-link">Projects</a>
          </Link>
          <div className="absolute z-10 hidden mt-4 overflow-hidden bg-black rounded-md bg-opacity-30 w-60 group-hover:block">
            <div className="flex flex-col p-3 rounded-md">
              <Link href="/brexit">
                <a className="menu-link">Brexit</a>
              </Link>
              <Link href="/people-who-mother" className="pt-4">
                <a className="menu-link">People Who Mother</a>
              </Link>
              <Link href="/acts-of-invisible-repair" className="pt-4">
                <a className="menu-link">Acts of (In) visible Repair</a>
              </Link>
            </div>
          </div>
        </li>
        <li className="self-stretch h-12 mr-6">
          <Link href="/films">
            <a className="menu-link">Films</a>
          </Link>
        </li>
        <li className="self-stretch h-12 mr-6">
          <Link href="/contact">
            <a className="menu-link">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
