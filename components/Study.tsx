"use client";

import Image from "next/image";

export default function Study() {
  return (
    <>
      <article className="wrapper about">
        <h2 className="text-3xl md:text-4xl border-header flex gap-2">
          <Image
            src={"/educ.gif"}
            alt="about"
            width={40}
            height={40}
            unoptimized
          />
          <span>Education</span>
        </h2>
        <div className="flex flex-col study">
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-book"></i>
            <div>
              <h3 className="text-xl ">Field of Study</h3>
              <p className="text-xs text-[#1b1b1b]">
                Bachelor of Science in Information Technology (BSIT)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-code"></i>
            <div>
              <h3 className="text-xl">Specialization</h3>
              <p className="text-xs text-[#1b1b1b]">
                Front-end Developer & UI Designer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-calendar-days"></i>
            <div>
              <h3 className="text-xl ">Academic Year</h3>
              <p className="text-xs text-[#1b1b1b]">2019 - 2024</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
