"use client";
import Image from "next/image";

export default function About() {
  return (
    <>
      <article className="wrapper pt-20 about">
        <h2 className="text-3xl md:text-4xl border-header flex gap-2">
          <Image
            src={"/aboutme.gif"}
            alt="about"
            width={40}
            height={40}
            unoptimized
          />
          <span>About Me</span>
        </h2>
        <p>
          Hi, I’m Felix, a junior front-end developer specializing in React. I’m
          dedicated to crafting smooth, responsive web applications while
          continuously learning new technologies to improve my skills.
        </p>
      </article>
    </>
  );
}
