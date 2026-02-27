export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/3 bg-slate-900 text-white p-8">
      <div className="mb-8">
        <h3 className="text-lg font-bold border-b border-slate-700 pb-2 mb-4 tracking-wider">HABILIDADES</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li>Aprendizaje rápido</li>
          <li>Tolerancia a la presión</li>
          <li>Trabajo en equipo</li>
          <li>Programación (Java, C#, Python)</li>
          <li>Desarrollo web (HTML, CSS, JavaScript)</li>
          <li>Framework y librerias (Vue, React)</li>
          <li>Despliegue y Administración Cloud</li>
          <li>Base de datos SQL</li>
          <li>Pensamiento lógico-matemático</li>
          <li>Fundamentos Electrónicos</li>
          <li>Sistemas Embebidos y Microcontroladores</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold border-b border-slate-700 pb-2 mb-4 tracking-wider">LENGUAJES</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
          <li>Español (Lengua Materna)</li>
          <li>Inglés (B1 | Intermedio)</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold border-b border-slate-700 pb-2 mb-4 tracking-wider">CONTACTO</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li><i className="fas fa-phone mr-2"></i>(+52) 443-390-0321</li>
          <li><i className="fas fa-envelope mr-2"></i>l23120522@morelia.tecnm.mx</li>
          <li><i className="fas fa-map-marker-alt mr-2"></i>Morelia, Michoacán, México</li>
        </ul>
      </div>
    </aside>
  );
}