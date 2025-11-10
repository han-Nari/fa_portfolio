"use client";
import { useState } from "react";
import Image from "next/image";

export default function Tech() {
  const [stack, setStack] = useState("prog");
  return (
    <>
      <article className="wrapper flex flex-col gap-5">
        <h2 className="text-3xl md:text-4xl border-header flex gap-1">
          <Image
            src={"/tech.gif"}
            alt="tech"
            width={40}
            height={40}
            unoptimized
          />
          <span>Tech Stack</span>
        </h2>
        <div className="stack">
          <button
            onClick={() => {
              setStack("prog");
            }}
            className={
              stack === "prog"
                ? "text-[#0cb6b6]  border-dotted border-b border-[#1b1b1b]/50"
                : ""
            }
          >
            <div className="flex items-center  gap-1">
              <Image
                src={"/laptop.gif"}
                alt="laptop"
                width={40}
                height={40}
                unoptimized
              />
              <span>Languages</span>
            </div>
          </button>
          <button
            onClick={() => {
              setStack("frameworks");
            }}
            className={
              stack === "frameworks"
                ? "text-[#0cb6b6] border-dotted border-b border-[#1b1b1b]/50"
                : ""
            }
          >
            <div className="flex items-center  gap-1">
              <Image
                src={"/frame.gif"}
                alt="laptop"
                width={40}
                height={40}
                unoptimized
              />
              <span>Frameworks</span>
            </div>
          </button>
          <button
            onClick={() => {
              setStack("tools");
            }}
            className={
              stack === "tools"
                ? "text-[#0cb6b6] border-dotted border-b border-[#1b1b1b]/50"
                : ""
            }
          >
            <div className="flex items-center  gap-1">
              <Image
                src={"/laptop.gif"}
                alt="laptop"
                width={40}
                height={40}
                unoptimized
              />
              <span>Tools</span>
            </div>
          </button>
        </div>
        {stack === "prog" && (
          <>
            <article className="programming">
              <div>
                <Image src={"/html.svg"} alt="html" width={30} height={30} />
                <p>Html</p>
              </div>
              <div>
                <Image src={"/css.svg"} alt="css" width={30} height={30} />
                <p>Css</p>
              </div>
              <div>
                <Image src={"/js.svg"} alt="js" width={30} height={30} />
                <p>JavaScript</p>
              </div>
            </article>
          </>
        )}
        {stack === "frameworks" && (
          <>
            <article className="programming">
              <div>
                <Image
                  src={"/tailwind.png"}
                  alt="tailwind"
                  width={30}
                  height={30}
                />
                <p>TailwindCss</p>
              </div>
              <div>
                <Image
                  src={"/reactjs.svg"}
                  alt="react"
                  width={30}
                  height={30}
                />
                <p>React.Js</p>
              </div>
              <div>
                <Image src={"/redux.svg"} alt="rtk" width={30} height={30} />
                <p>Redux Toolkit</p>
              </div>
              <div>
                <Image src={"/next.png"} alt="nextjs" width={30} height={30} />
                <p>NextJs</p>
              </div>
              <div>
                <Image
                  src={"/typescript.png"}
                  alt="typescript"
                  width={30}
                  height={30}
                />
                <p>TypeScript</p>
              </div>
            </article>
          </>
        )}
        {stack === "tools" && (
          <>
            <article className="programming">
              <div>
                <Image src={"/figma.svg"} alt="figma" width={30} height={30} />
                <p>Figma</p>
              </div>
              <div>
                <Image src={"/git.svg"} alt="git" width={30} height={30} />
                <p>Git Bash</p>
              </div>
              <div>
                <Image src={"/vs.svg"} alt="vs" width={30} height={30} />
                <p>Vs Code</p>
              </div>
              <div>
                <Image src={"/github.png"} alt="vs" width={30} height={30} />
                <p>Vs Code</p>
              </div>
            </article>
          </>
        )}
      </article>
    </>
  );
}
