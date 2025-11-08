export default function Study() {
  return (
    <>
      <article className="wrapper study">
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-graduation-cap "></i>
          <div>
            <h3 className="text-xl ">Field of Study</h3>
            <p className="text-sm text-white/50">BSIT</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-graduation-cap  "></i>
          <div>
            <h3 className="text-xl ">Academic Year</h3>
            <p className="text-sm text-white/50">July 2024</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <i className="fa-solid fa-graduation-cap  "></i>
          <div>
            <h3 className="text-xl ">Status</h3>
            <p className="text-sm text-white/50">Single</p>
          </div>
        </div>
      </article>
    </>
  );
}
