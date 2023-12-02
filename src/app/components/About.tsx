export default function About() {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-screen-2xl px-10 sm:px-6 lg:px-8 py-24">
          <h1
            className="text
            xl:text-[80px] text-[40px] md:text-[50px]   
          "
          >
            About Me
            <span>SELF-SUMMARY</span>
          </h1>

          <div className="mt-20 grid gap-6 grid-cols-3 lg:grid-cols-6 items-center ">
            <>
              <div className="card-background col-span-3 md:col-span-1 lg:col-span-2 px-5 xl:px-10 py-10 min-h-[250px] rounded-2xl shadow-lg border border-gray-300">
                <div className="flex flex-col gap-5 items-start justify-between h-full">
                  <div>
                    <h1 className="text-3xl text-blue-100">{"< SB />"}</h1>
                    <p className="text-lg text-orange-100">
                      Sulav Baral&apos;s Portfolio
                    </p>
                  </div>
                  <div className="flex flex-col xl:items-end xl:flex-row xl:justify-between w-full">
                    <div>
                      <h1 className="text-2xl font-bold text-orange-100">
                        Sulav Baral
                      </h1>
                      <p className="text-lg text-orange-100">
                        Frontend Developer
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-sm text-orange-100">
                        sulavbaral58&#64;gmail.com
                      </p>
                      <p className="text-sm text-orange-100">+977 9861841559</p>
                      <p className="text-sm text-orange-100">
                        123, Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>

            <div className="flex flex-col items-center justify-center col-span-3 md:col-span-2 lg:col-span-4 gap-2 card-background h-full rounded-2xl">
              <div className="xl:px-10 px-5 my-10">
                <h1 className="text-xl font-bold text-green-100">
                  INTRODUCTION
                </h1>
                <p className="text-xl mt-5 text-orange-100/80 sm:text-xl">
                  I&apos;m a 3rd year Computer Science student from Tribhuvan
                  University, unravelling the art of frontend wizardry. Imagine
                  crafting virtual experiences that sparkle and dance—yep,
                  that&apos;s my jam! My arsenal includes React and Next.js
                </p>
              </div>
            </div>

            <div className="flex flex-col col-span-3 gap-2 card-background h-full rounded-2xl">
              <div className="px-5 xl:px-10 py-10">
                <h1 className="text-xl font-bold text-green-100">EXPERIENCE</h1>
                <div className="mt-10 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col  gap-2">
                      <h2 className="text-xl text-orange-100/60">
                        2023 June - Present
                      </h2>
                      <h1 className="text-2xl text-orange-100">
                        Internship / Junior Frontend Developer
                      </h1>
                      <p className="text-lg text-orange-100/60">eParamarsha</p>
                    </div>

                    <div className="flex flex-col  gap-2">
                      <h2 className="text-xl text-orange-100/60">
                        2023 August - Present
                      </h2>
                      <h1 className="text-2xl text-orange-100">
                        Frontend Developer
                      </h1>
                      <p className="text-lg text-orange-100/60">
                        Fatafat Sewa Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-3 gap-2 card-background h-full rounded-2xl">
              <div className="px-5 xl:px-10 py-10">
                <h1 className="text-xl font-bold text-blue-100">EDUCATION</h1>
                <div className="mt-10 ">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col  gap-2">
                      <h2 className="text-xl text-orange-100/60">
                        2021 June - Present
                      </h2>
                      <h1 className="text-2xl text-orange-100">
                        Bachelor&apos;s in Computer Science
                      </h1>
                      <p className="text-lg text-orange-100/60">
                        Prime College, Kathmandu
                      </p>
                    </div>

                    <div className="flex flex-col  gap-2">
                      <h2 className="text-xl text-orange-100/60">
                        2019 - 2021
                      </h2>
                      <h1 className="text-2xl text-orange-100">High School</h1>
                      <p className="text-lg text-orange-100/60">
                        Trinity International College, Kathmandu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </section>
    </>
  );
}
