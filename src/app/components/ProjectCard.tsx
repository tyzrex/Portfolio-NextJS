export default function ProjectCard({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-[300px] max-w-[350px] h-[400px] card-background rounded-2xl">
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="w-full h-[80%] flex items-center justify-center">
            <img
              src="https://via.placeholder.com/300x200"
              alt="project"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="w-full h-[20%] px-10 my-8 flex flex-col items-start gap-2">
            <h1 className="text-2xl font-bold text-orange-100">{label}</h1>

            <div className="flex mt-2 gap-2 justify-between">
              <button className="bg-orange-100/20 px-5 py-2 rounded-xl text-orange-100">
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
