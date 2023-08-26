import SmallCards from "../reusables/SmallCards";

export default function About() {
  return (
    <section className="about flex-center mb-10">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8 w-full ">
          <div className="flex-center w-full gap-5">
            <div className="text-center w-[70%] flex-center  bg-secondary h-full rounded-l-lg rounded-r-full">
              <div>
                <h1 className="font-big font-bold text-text-light">
                  About <span className="text-accent">Me</span>
                </h1>
                <h3 className="h2-font font-bold text-text-light">
                  My Introduction
                </h3>
              </div>
            </div>

            <div className=" text-text-light text-center gap-5 flex-col-center w-full">
              <div className="grid grid-cols-3 gap-5 ">
                <SmallCards />
                <SmallCards />
                <SmallCards />
              </div>

              <h3 className="text-gray-400 text-lg">
                I&apos;m a 3rd year Computer Science student from Tribhuvan
                University, unravelling the art of frontend wizardry. Imagine
                crafting virtual experiences that sparkle and dance—yep,
                that&apos;s my jam! ✨ My arsenal includes React and Next.js,
                and currently, I&apos;m interning with React.js conjurers while
                moonlighting as a Next.js enthusiast.Step into my realm, the
                portfolio—a collection of spells woven with bits and pixels.
                Ready to be charmed?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
