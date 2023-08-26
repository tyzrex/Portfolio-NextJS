import { LuGraduationCap } from "react-icons/lu";

export default function SmallCards() {
  return (
    <>
      <article className="flex-col-center h-20 w-20 md:h-40 md:w-40 overflow-hidden rounded-lg  bg-secondary p-12 border-b border-b-accent transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded bg-accent p-1 sm:p-2 text-white">
          <LuGraduationCap className="w-5 h-5" />
        </span>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-text-light">
            Bsc.Csit
          </h3>
        </a>
      </article>
    </>
  );
}
