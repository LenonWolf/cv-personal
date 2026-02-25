export default function Projects() {
  const projects = [
    {
      title: "RAITEC",
      description: "Aplicación móvil diseñada para estudiantes con un modelo de viaje compartido similar a Blablacar. Desarrollada como parte de Tópicos Selectos de Ingeniería de Software.",
      tags: ["Ingeniería de Software", "Desarrollo Móvil", "Database"]
    },
    {
      title: "Gamificación Educativa",
      description: "Proyecto de investigación y desarrollo para implementar estrategias de gamificación en Fundamentos de Programación, con el objetivo de reducir el índice de reprobación.",
      tags: ["Educación", "Innovación", "Investigación"]
    }
  ];

  return (
    <section className="py-8 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold border-b-2 border-slate-200 pb-2 mb-6">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-medium text-slate-800">{proj.title}</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              {proj.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {proj.tags.map(tag => (
                <span key={tag} className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}