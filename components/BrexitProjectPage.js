import React from "react";
import Head from "next/head";
import Header from "/components/Header";
import Footer from "/components/Footer";
import Link from "next/link";

const BrexitProjectPage = ({
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
        <title>{title} | Brexit | GPS Embroidery</title>
      </Head>

      <header
        className={`h-screen w-full flex flex-col pb-8 bg-${bgName} bg-${bgPosition} bg-cover`}
      >
        <div className="pt-8">
          <Header />
        </div>
      </header>

      <main className={`bg-gray-100 w-full py-16 flex`}>
        <div className="container flex items-start mx-auto">
          <div className="flex flex-col w-3/4 pr-8">
            <h1 className="mt-auto mb-6">{title}</h1>
            <h4>{tagline}</h4>
            <p>{secondLine}</p>
            <p>{text}</p>
          </div>
          <div className="flex flex-col w-1/4 pl-8 border-l border-gray-200">
            <h5>More from this project</h5>
            <ul className="list-disc">
              <li className="py-1 ml-4">
                <Link href="stonehenge">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Stonehenge
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="white-cliffs-of-dover">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    White Cliffs of Dover
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="grasmere">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Grasmere, Lake District
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="blaenavon">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Blaenavon
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="langdale">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Langdale
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="british-camp">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    British Camp, Malvern
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="plymouth-hoe">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Plymouth Hoe
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="brean-head">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Brean Head Napoleonic Fort
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="lower-slaughter">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Lower Slaughter, Cotswolds
                  </a>
                </Link>
              </li>

              <li className="py-1 ml-4">
                <Link href="alexandra-park">
                  <a className="transition-all duration-200 opacity-50 hover:opacity-100">
                    Alexandra Park, Belfast
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

export default BrexitProjectPage;
