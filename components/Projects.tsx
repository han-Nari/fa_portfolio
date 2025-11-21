import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  icon: string;
  title: string;
  image: string;
  year: string;
  technologies: string[];
  description: string;
  links: { label: string; url: string }[];
}

async function myProject(): Promise<Project[]> {
  try {
    const res = await fetch("https://han-nari.github.io/api/");
    if (!res.ok) {
      throw new Error(`Project not found!`);
    }
    const data = await res.json();
    return Array.isArray(data) ? data : data.projects;
  } catch (e) {
    console.log(`fetch error`, e);
    return [];
  }
}

const techColors: any = {
  HTML: "bg-orange-700 text-white",
  CSS: "bg-blue-800 text-white",
  "Tailwind CSS": "bg-sky-700 text-white",
  "React.js": "bg-blue-700 text-white",
  "Redux Toolkit": "bg-purple-700 text-white",
  JavaScript: "bg-yellow-600 text-black",
};

export default async function Projects() {
  const project: Project[] = await myProject();
  return (
    <>
      <article className="mx-auto px-5 about py-20">
        <h2 className="text-3xl md:text-4xl border-header flex gap-1">
          <Image
            src={"/project.gif"}
            alt="project"
            width={40}
            height={40}
            unoptimized
          />
          <span>Featured Work</span>
        </h2>
        <ul className="cards">
          {project.map((proj) => (
            <li key={proj.id} className="card">
              <div className="p-2 card">
                <div className="flex flex-col gap-4">
                  {proj.image ? (
                    <Image
                      src={proj.image}
                      alt="evenight"
                      width={1000}
                      height={1000}
                      className="object-cover"
                      unoptimized
                    />
                  ) : null}
                  <div className="flex flex-col gap-2">
                    <span className="card-prog">
                      {proj.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`${techColors[tech] || "bg-transparent"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </span>
                    <h2 className="card-text text-2xl flex gap-2">
                      {proj.title}
                    </h2>
                    <p className="text-sm text-[#1b1b1b]/70 font-light">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="card-button">
                  {proj.links.map((link, i) => (
                    <Link key={i} href={link.url} target="_blank">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
