import React from "react";

function Mission() {
  return (
    <section className="py-16 px-6 bg-muted-navy text-main-white" id="mission">
      <div className="max-w-5xl mx-auto bg-navy rounded-2xl shadow-2xl p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
            {/*Show Title here on small/medium screens*/}
          <h2 className="text-4xl text-light-pink font-normal mt-2 hidden sm:block lg:hidden">
            Mission
          </h2>

          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/assets/hobbies.JPEG"
              alt="Mission visual"
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Right: Title + Paragraph */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            {/*Show Title here on large screens*/}
            <h2 className="text-4xl text-light-pink font-normal mb-6 hidden lg:block">
              Mission
            </h2>
            <p className="leading-relaxed mb-5">
              I'm a rising senior at the University of Michigan–Ann Arbor, majoring in Computer Science with a minor in Computing for Scientific Discovery.
            </p>
            <p className="leading-relaxed">
              I aspire to be a full stack developer who seamlessly blends
              creativity with technology. With a passion for photography and the
              arts, I strive to bring artistic expression into a field that
              leans more practical, crafting intuitive and visually engaging
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
