import Image from "next/image";

export default function Profile() {
  return (
    <>
      <article className="wrapper relative  -top-20 text-center grid gap-5">
        <div className="grid gap-5">
          <Image
            className="mx-auto"
            src={"/evernight.gif"}
            alt="evernight"
            width={150}
            height={150}
          />
          <h2 className="title-h2">Evernight</h2>
        </div>
        <div className="media">
          <div>
            <i className="fa-solid fa-envelope"></i>
            <p>abungan082198@gmail.com</p>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
            <p>Han-nari</p>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
            <p>My Profile</p>
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
