import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArtsCouncil from "../public/arts_council.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-white">
      <div className="container flex flex-col w-full mx-auto md:flex-row">
        <div className="w-full pr-0 border-0 border-gray-200 md:border-r md:pr-8 md:w-2/3">
          <h4>About the project</h4>
          <p>
            GPS Embroidery is a walking performance practice which appropriates
            a tool invented in the service of imperialism and puts it into the
            hands of artists who mother. It is an ongoing political response to
            the reactionary politics of our times, which aims to broaden ideas
            about who-gets-to-write-what-where in and about the British
            landscape.
          </p>
        </div>
        <div className="w-full pl-0 md:pl-8 md:w-1/3">
          <h4>Related links</h4>
          <Link href="https://www.artscouncil.org.uk/">
            <a target="_blank">
              <Image
                src={ArtsCouncil}
                width={300}
                height={95}
                alt={"Arts Council logo"}
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
