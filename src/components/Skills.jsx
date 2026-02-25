export default function Skills() {
  const skills = [
    "Programación Web",
    "Arduino",
    "Java",
    "Python",
    "SQL"
  ];

  return (
    <section className="py-8 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold border-b-2 border-slate-200 pb-2 mb-6">
        Habilidades e Intereses Técnicos
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span 
            key={skill} 
            className="bg-slate-800 text-slate-50 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
