import React from "react";
import projects from "./projectList";

function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-main-white">
      <h2 className="text-center text-4xl text-light-pink font-normal mb-16">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map(
          ({
            id,
            title,
            titleLink,
            description,
            mediaType,
            mediaSrc,
            mediaPoster,
            mediaAlt,
            links,
          }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center gap-10"
            >
              {/* Left: Title & Description */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl text-sky-blue font-normal mb-4">
                  {titleLink ? (
                    <a
                      href={titleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline"
                    >
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                </h3>
                {description.map((para, i) => (
                  <p
                    key={i}
                    className={`mb-4 ${
                      i === description.length - 1 && para.startsWith("*")
                        ? "italic text-gray-400"
                        : ""
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Right: Media + Links */}
              <div className="md:w-1/2 flex flex-col items-center text-center">
                {mediaType === "image" && (
                  <a
                    href={titleLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 w-full max-w-lg"
                  >
                    <img
                      src={mediaSrc}
                      alt={mediaAlt}
                      className="rounded-lg shadow-lg w-full h-[275px] object-cover"
                    />
                  </a>
                )}
                {mediaType === "video" && (
                  <video
                    className="rounded-lg shadow-lg w-full max-w-lg h-[275px]"
                    poster={mediaPoster}
                    autoPlay
                    muted
                    loop
                    controls
                  >
                    <source src={mediaSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {/* Optional Links */}
                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  {links.map(({ href, label }, idx) => (
                    <React.Fragment key={idx}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light-pink hover:underline text-sm"
                      >
                        {label}
                      </a>
                      {/* Add separator unless it's the last item */}
                      {idx < links.length - 1 && (
                        <span className="text-light-pink mx-2">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-20 text-center italic text-gray-400 max-w-xl mx-auto px-4">
        Site update in progress — Additional completed projects are being added.
        Feel free to reach out below if you’d like to learn more!
      </div>
    </section>
  );
}

export default Projects;
