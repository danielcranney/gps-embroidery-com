import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  title,
  tagline,
  description,
  img,
  width,
  height,
  projectLink,
}) => {
  return (
    <div className="flex flex-col w-full p-6 mb-5 transition-all duration-150 bg-transparent border border-gray-200 rounded-md md:w-49pc group hover:bg-white">
      {/* Header */}
      <div className="w-full">
        <Link href={projectLink}>
          <a>
            <h4>{title}</h4>
          </a>
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse flex-grow w-full md:flex-row">
        <div className="flex flex-col w-full md:w-1/2">
          <p className="font-bold">{tagline}</p>
          <p>{description}</p>
          <Link href={projectLink}>
            <a className="self-start mt-auto bg-gray-200 hover:bg-gray-300 btn-md">
              Read more
            </a>
          </Link>
        </div>
        <div className="w-full pl-0 mt-2 mb-4 md:pl-4 md:w-1/2 md:mb-auto">
          <Link href={projectLink}>
            <a>
              <Image src={img} width={width} height={height} alt={`${title}`} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
