"use client";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <article className="wrapper relative  -top-20 text-center grid gap-5">
        <div className="grid gap-5">
          <Image
            className="mx-auto rounded-full border-5 border-[#f0f8ff]"
            src={"/lek.jpg"}
            alt="felix"
            width={150}
            height={150}
            unoptimized
          />
          <div className="flex flex-col items-center">
            <h2 className="title-h2">Felix Abungan</h2>
            <div className="flex gap-1">
              <Image
                src={"/location.gif"}
                alt="location"
                width={30}
                height={30}
                unoptimized
              />
              <h3 className="text-xl text-white/50">Valenzuela City 1446</h3>
            </div>
          </div>
        </div>
        <div className="media">
          <div>
            <i className="fa-solid fa-envelope"></i>
            <p>abungan082198@gmail.com</p>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
            <Link href={"https://github.com/han-Nari"} target="_blank">
              Han-nari
            </Link>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
            <Link
              href={"https://www.linkedin.com/in/felix-abungan-13a9b8358/"}
              target="_blank"
            >
              My Profile
            </Link>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <p>+63-927-827-557</p>
          </div>
        </div>
      </article>
    </>
  );
}
