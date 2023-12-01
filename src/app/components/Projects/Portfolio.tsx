export default function Portfolio() {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold md:text-5xl text-white">
            Portfolio
          </h2>
          <p className="msm:text-base mb-8 mt-4 text-sm text-gray-400 md:mb-12 lg:mb-16">
            Some of my recent works
          </p>
          <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
            <a
              href="#"
              className="relative flex h-[300px] items-end [grid-area:1/1/3/2] md:h-auto"
            >
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg"
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm font-medium sm:text-xl">Project Name</p>
                <p className="text-sm sm:text-base">Microsoft</p>
              </div>
            </a>
            <a href="#" className="relative flex h-[300px] items-end">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg"
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm font-medium sm:text-xl">Project Name</p>
                <p className="text-sm sm:text-base">Paypal</p>
              </div>
            </a>
            <a href="#" className="relative flex h-[300px] items-end">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a942fd2e6cfa2_Rectangle%201%20(2).svg"
                alt=""
                className="inline-block h-full w-full rounded-lg object-cover"
              />
              <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-lg bg-white px-8 py-4">
                <p className="text-sm font-medium sm:text-xl">Project Name</p>
                <p className="text-sm sm:text-base">Airbnb</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
