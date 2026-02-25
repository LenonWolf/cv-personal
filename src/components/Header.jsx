export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Luis Eduardo Nieves Avila
        </h1>
        <p className="mt-4 text-xl text-slate-300 font-light">
          Estudiante de Ingeniería en Sistemas Computacionales
        </p>
        
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
          <a href="mailto:l23120522@morelia.tecnm.mx" className="hover:text-white transition-colors">
            l23120522@morelia.tecnm.mx
          </a>
          <span className="hidden md:inline">•</span>
          <span>Instituto Tecnológico de Morelia</span>
          <span className="hidden md:inline">•</span>
          <span>Morelia, Michoacán</span>
        </div>
      </div>
    </header>
  );
}