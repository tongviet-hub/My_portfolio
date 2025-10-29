export default function Skills() {
  const ICON_BASE = "https://iconic-api.onrender.com/dark"

  const iconMap: Record<string, string> = {
    "HTML5": "html",
    "CSS3": "css",
    "JavaScript": "js",
    "React": "react",
    "Next.js": "nextjs",
    "Tailwind CSS": "tailwind",
    "TypeScript": "typescript",
    "Node.js": "nodejs",
    "Express": "express",
    "Python": "python",
    "SQL": "sql",
    "MongoDB": "mongodb",
    "REST API": "api",
    "Git": "git",
    "GitHub": "github",
    "VS Code": "vscode",
    "Figma": "figma",
    "Docker": "docker",
    "Linux": "linux",
  }

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "SQL", "MongoDB", "REST API"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Linux"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Kỹ năng</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const iconKey = iconMap[skill]
                  const src = iconKey ? `${ICON_BASE}/${iconKey}` : null

                  return (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-2"
                    >
                      {src ? (
                        <img
                          src={src}
                          alt={`${skill} icon`}
                          className="w-5 h-5"
                          width={20}
                          height={20}
                        />
                      ) : null}
                      <span>{skill}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
