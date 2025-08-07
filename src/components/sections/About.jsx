import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const technicalSkills = [
    "Web",
    "Cloud",
    "Data",
    "Technical Support",
  ];

  const technologies = ["HTML", "CSS", "JavaScript", "React",
  "Python", "PostgreSQL", "Snowflake",
  "AWS", "Git", "GitHub"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-900 mb-6">
                Passionate IT professional building expertise in cloud computing, web technologies,
                 data management, and technical support to create effective and practical solutions.
             </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-900 space-y-2">
                <li>
                  <strong> Master of Computer Applications  </strong> - Nitte  University
                </li>
                <li>
                  Certificate III in Information Technology- Chisholm Institute          
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              {/*<h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>*/}
              <h3 className="text-xl font-bold mb-4"> 💼 Certifications </h3>
              <div className="space-y-4 text-gray-900">
                <div>
                  <p>
                   
                  </p>
                </div>

                <div>
                  
                  <p>
                    PCEP – Certified Entry-Level Python Programmer -Python Institute
                  </p>
                </div>
                <div>
                  
                  <p>
                    AWS Academy Graduate - AWS Academy Cloud Foundations
                  </p>
                </div>
                <div>
                  
                  <p>
                    Snowflake Hands-On Essentials: Data Warehousing Workshop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};