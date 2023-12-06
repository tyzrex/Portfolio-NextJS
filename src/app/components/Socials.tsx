import SectionHeader from "./_small_components/Section-Header";

export default function Socials() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto w-full max-w-screen-2xl px-10 sm:px-6 lg:px-8">
          <SectionHeader text="Socials" />

          <div className="grid grid-cols-2 gap-10 mt-20">
            <h1 className="text text-[30px] md:text-[40px] xl:text-[50px]">
              FACEBOOK
              <span>ADD ME</span>
            </h1>

            <h1 className="text text-[30px] md:text-[40px] xl:text-[50px]">
              INSTAGRAM
              <span>FOLLOW ME</span>
            </h1>
            <h1 className="text text-[30px] md:text-[40px] xl:text-[50px]">
              LINKEDIN
              <span>LET&apos;S CONNECT</span>
            </h1>
            <h1 className="text text-[30px] md:text-[40px] xl:text-[50px]">
              TWITTER
              <span>FOLLOW ME</span>
            </h1>
            <h1 className="text text-[30px] md:text-[40px] xl:text-[50px]">
              GITHUB
              <span>STAR ME</span>
            </h1>
            <h1 className="text text-[30px] md:text-[40px] xl:text-[50px]">
              GMAIL
              <span>MAIL ME</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
