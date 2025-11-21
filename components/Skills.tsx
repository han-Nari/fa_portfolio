"use client";

import Image from "next/image";

export default function Skills() {
  return (
    <>
      <article className="wrapper about">
        <h2 className="text-3xl md:text-4xl border-header flex gap-2">
          <Image
            src={"/skills.gif"}
            alt="about"
            width={40}
            height={40}
            unoptimized
          />
          <span>Skills</span>
        </h2>
        <div>
          <ul className="skills">
            <li>Mobile-first Design</li>
            <li>Responsive Design</li>
            <li>Wireframing</li>
            <li>Typography</li>
            <li>Layout Systems: Flexbox &amp; Grid</li>
            <li>DOM Manipulation</li>
            <li>Event Handling</li>
            <li>Asynchronous JavaScript</li>
            <li>API</li>
            <li>Objects &amp; Destructuring</li>
            <li>React.js: Hooks, Router</li>
            <li>State Management (Redux Toolkit)</li>
            <li>Version Control (Git/GitHub)</li>
          </ul>
        </div>
      </article>
    </>
  );
}
