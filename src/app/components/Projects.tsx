import SectionHeader from "./_small_components/Section-Header";

export default function Projects() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto w-full max-w-screen-2xl px-10 sm:px-6 lg:px-8">
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
