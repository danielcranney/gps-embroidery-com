import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../components/Menu";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      {navbarOpen ? (
        <div className="fixed z-50 w-full h-screen -mt-10 bg-brand bg-opacity-95">
          <div className="container relative flex flex-col items-center mx-auto mt-10 text-white bg-transparent">
            <div className="flex w-full">
              <div className="mr-auto">
                <div className="p-4 border-4 border-white">
                  <p className="pb-0 mb-0 text-xl font-bold text-white">
                    GPS Embroidery
                  </p>
                </div>
              </div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="z-50 flex h-12 mt-2 ml-auto text-white transition-all duration-200 opacity-75 fill-current md:hidden hover:opacity-100"
              >
                <svg
                  className="w-6 h-6 ml-auto text-white fill-current"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    className="text-white fill-current"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="w-full mt-10">
              <ul className="flex flex-col items-stretch">
                <li className="h-12">
                  <Link href="/">
                    <a className="self-stretch block w-full menu-link">Home</a>
                  </Link>
                </li>
                <li className="h-12">
                  <Link href="/about" className="self-stretch w-full">
                    <a className="self-stretch block w-full menu-link">About</a>
                  </Link>
                </li>
                <li className="h-12">
                  <Link href="/projects">
                    <a className="self-stretch block w-full menu-link">
                      Projects
                    </a>
                  </Link>
                </li>
                <li className="h-12">
                  <Link href="/brexit">
                    <a className="self-stretch block w-full ml-3 menu-link">
                      - Brexit
                    </a>
                  </Link>
                </li>
                <li className="h-12">
                  <Link href="/people-who-mother">
                    <a className="self-stretch block w-full ml-3 menu-link">
                      - People Who Mother
                    </a>
                  </Link>
                </li>
                <li className="h-12">
                  <Link href="/acts-of-invisible-repair">
                    <a className="self-stretch block w-full ml-3 menu-link">
                      - Acts of (in)visible Repair
                    </a>
                  </Link>
                </li>
                <li className="h-12">
                  <Link href="/films">
                    <a className="self-stretch block w-full menu-link">Films</a>
                  </Link>
                </li>
                <li className="h-12">
                  <Link href="/contact">
                    <a className="self-stretch block w-full menu-link">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : null}

      <div className="container relative z-30 flex items-center mx-auto bg-transparent">
        <div className="mr-auto">
          <div className="p-4 border-4 border-white">
            <p className="pb-0 mb-0 text-xl font-bold text-white">
              GPS Embroidery
            </p>
          </div>
        </div>
        {navbarOpen ? null : (
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="z-50 flex h-12 ml-auto transition-all duration-200 opacity-75 fill-current md:hidden hover:opacity-100"
          >
            <svg
              className="w-6 h-6"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                className="text-white fill-current"
              ></path>
            </svg>
          </button>
        )}
        <div className="hidden md:flex" id="menuContainer">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default Header;
