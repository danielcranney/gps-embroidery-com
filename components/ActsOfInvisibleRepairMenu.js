import React from "react";
import Link from "next/link";

const ActsOfInvisibleRepairMenu = () => {
  return (
    <>
      <h5>More from this project</h5>
      <ul className="list-disc">
        <li className="py-1 ml-4">
          <Link href="northernhay">
            <a className="transition-all duration-200 opacity-50 hover:opacity-100">
              Northernhay Gardens
            </a>
          </Link>
        </li>

        <li className="py-1 ml-4">
          <Link href="higher-cemetery">
            <a className="transition-all duration-200 opacity-50 hover:opacity-100">
              Higher Cemetery
            </a>
          </Link>
        </li>

        <li className="py-1 ml-4">
          <Link href="st-thomas">
            <a className="transition-all duration-200 opacity-50 hover:opacity-100">
              St Thomas Pleasure Gardens
            </a>
          </Link>
        </li>

        <li className="py-1 ml-4">
          <Link href="riverside-valley-park">
            <a className="transition-all duration-200 opacity-50 hover:opacity-100">
              Riverside Valley Park
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ActsOfInvisibleRepairMenu;
