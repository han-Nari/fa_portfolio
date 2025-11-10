"use client";

import Image from "next/image";

export default function Design() {
  return (
    <>
      <header className="background-top relative">
        <Image
          className="absolute md:right-30 bottom-0 right-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          src={"/evernight.gif"}
          alt="evernight"
          width={300}
          height={300}
        />
        <h1 className="text-center title-header">
          Front end{" "}
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>
        <h4 className="text-center title-h2">
          Building{" "}
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            website
          </span>{" "}
          that people love to use
        </h4>
      </header>
    </>
  );
}
