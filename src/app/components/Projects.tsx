import SectionHeader from "./_small_components/Section-Header";

export default function Projects() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto w-full max-w-layout ">
          <SectionHeader text="Projects" />

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mt-20">
            <ProjectCard label="BetterBikes" href="/tyzrex/BetterBikes" />
            <ProjectCard label="ICT Meetup v7" href="/tyzrex/Ict" />
            <ProjectCard label="My Anime Dev" href="/tyzrex/SulavBaral.com" />
            <ProjectCard label="SulavBaral.com" href="/tyzrex/SulavBaral.com" />
          </div> */}
        </div>
      </section>
    </>
  );
}
