import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Link from "next/link";

const PeopleProjectPage = ({
  title,
  bgName,
  bgPosition,
  tagline,
  secondLine,
  text,
}) => {
  return (
    <div>
      <Head>
        <title>{title} | People Who Mother | GPS Embroidery</title>
      </Head>

      <header
        className={`h-screen w-full flex flex-col pb-8 ${bgName} ${bgPosition} bg-cover`}
      >
        <div className="pt-8">
          <Header />
        </div>
      </header>

      <main className={`bg-gray-100 w-full py-16 flex`}>
        <div className="container flex flex-col flex-wrap items-start justify-between mx-auto md:flex-row">
          <div className="flex flex-col w-full pr-0 md:pr-8 md:w-3/4">
            <h1 className="mt-auto mb-6">{title}</h1>
            <h4>{tagline}</h4>
            <p>{secondLine}</p>
            <p>{text}</p>
          </div>
          <div className="flex flex-col w-full pl-0 border-l-0 border-gray-200 md:w-1/4 md:border-l md:pl-8">
            <h5>More from this project</h5>
            <ul className="list-disc">
              <li className="py-1 ml-4">
                <Link href="ashton-court">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Ashton Court
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="knowle-west">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Knowle West
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="cam-peak-view">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Cam Peak View
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="victoria-park">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Victoria Park
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="whale-wharf">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Whale Wharf
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="groznez-point">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Groznez Point
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="la-rocque">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    La Rocque, Jersey
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="uphill-beach">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Uphill Beach, Weston Super Mare
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="london-suburbs">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    London Suburbs
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PeopleProjectPage;
