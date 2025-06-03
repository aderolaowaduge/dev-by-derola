import skills from './skillsData';

function Skills() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black/0 via-transparent to-black text-main-white" id="skills">
      <h2 className="text-4xl font-normal text-light-pink text-center mb-12">Skills</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {skills.map(({ name, logo, description }) => (
          <div key={name} className="flex flex-col items-center text-center">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-[100px] mb-4 object-contain"
            />
            <p className="leading-relaxed max-w-xs">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
