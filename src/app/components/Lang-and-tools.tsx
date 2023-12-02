const Frontend = [
  "Javascript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "SASS",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
];

const Software = [
  "Git",
  "Github",
  "Gitlab",
  "VS Code",
  "Figma",
  "LaTeX",
  "Markdown",
  "Linux",
  "Inkscape",
  "Postman",
];

export default function Tools() {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-screen-2xl px-10 sm:px-6 lg:px-8 py-24">
          <h1 className="text text-[80px]">
            Language and Tools
            <span>MY TECH STACK</span>
          </h1>

          <div className="mt-20 grid gap-6 grid-cols-1 items-center ">
            <div className="card-background px-5 xl:px-10 py-10 h-auto rounded-2xl shadow-lg border border-gray-300">
              {/* <Timeline /> */}
              <h2 className="text-2xl font-bold text-orange-100">
                Languages and Frameworks
              </h2>
              <div className="flex flex-wrap gap-5 mt-5">
                {Frontend.map((item, idx: number) => (
                  <div
                    key={idx}
                    className="bg-orange-100/20 rounded-xl p-3 flex items-center justify-center"
                  >
                    <p className="text-xl text-orange-100">{item}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-orange-100 mt-10">
                Software
              </h2>
              <div className="flex flex-wrap gap-5 mt-5">
                {Software.map((item, idx: number) => (
                  <div
                    key={idx}
                    className="bg-orange-100/20 rounded-xl p-3 flex items-center justify-center"
                  >
                    <p className="text-xl text-orange-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
