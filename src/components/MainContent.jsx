export default function MainContent() {
    return (
        <main className="w-full md:w-2/3 bg-white p-8 text-slate-800">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 tracking-tight uppercase">Luis Eduardo Nieves Avila</h1>
                <h2 className="text-xl text-blue-800 mt-2 font-medium uppercase">Estudiante de Ingeniería en Sistemas Computacionales</h2>
            </header>

            <section className="mb-8">
                <h3 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-4 uppercase text-slate-900"><i className="fas fa-user mr-2"></i>Perfil</h3>
                <p className="text-slate-600 leading-relaxed text-justify">
                    Apasionado por la adquisición de nuevos conocimientos y la exploración
                    continua en campos emergentes. Busco oportunidades que me permitan
                    contribuir y desarrollarme en un entorno de investigación dinámico y
                    colaborativo, mientras adquiero habilidades para desarrollar mis propios
                    proyectos innovadores
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-4 uppercase text-slate-900"><i className="fas fa-graduation-cap mr-2"></i>Educación</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            <h4 className="font-bold text-lg">Ingeniería en Sistemas Computacionales</h4>
                            <span className="text-blue-600 font-medium sm:ml-4 whitespace-nowrap">2023 - 2028</span>
                        </div>
                        <p className="text-slate-600">Instituto tecnológico de Morelia | TecNM</p>
                        <ul className="text-slate-600 text-sm list-disc list-inside sm:ml-4">
                            <li>Especialidad en Tecnologías de Desarrollo de Software</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                            <h4 className="font-bold text-lg">Bachillerato en Físico Matemático</h4>
                            <span className="text-blue-600 font-medium sm:ml-4 whitespace-nowrap">2019 - 2022</span>
                        </div>
                        <p className="text-slate-600">CETis 120 | DGETI</p>
                        <ul className="text-slate-600 text-sm list-disc list-inside sm:ml-4">
                            <li>Especialidad en Programación</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-bold border-b-2 border-slate-200 pb-2 mb-4 uppercase text-slate-900"><i className="fas fa-briefcase mr-2"></i>Experiencia Académica</h3>
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-lg text-slate-800">Página administradora de juegos de rol</h4>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">2025</span>
                        </div>
                        <p className="text-sm font-semibold text-blue-600 mb-2">Desarrollo de una página web alojada en la nube</p>
                        <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
                            <li>Desarrollo de una página web con funcionalidades administrativas.</li>
                            <li>Funciones de gestión de usuarios, contenido y configuración del sitio web.</li>
                            <li>Alojamiento en la nube mediante Azure.</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-lg text-slate-800">Programa Delfín 2025</h4>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">2025</span>
                        </div>
                        <p className="text-sm font-semibold text-blue-600 mb-2">30 verano de la investigación científica y tecnológica del pacífico</p>
                        <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
                            <li>Interacción hombre-robot mediante comandos de voz basados en modelos de lenguaje (LLM/ChatGPT) para la manipulación de objetos con el robot Dofbot.</li>
                            <li>Desarrollo de una aplicación movil educativa para el aprendizaje sobre el brazo robotico (dofbot) mediante tecnologías de realidad aumentada en Unity.</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-lg text-slate-800">EcoMania</h4>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">2024</span>
                        </div>
                        <p className="text-sm font-semibold text-blue-600 mb-2">Tópicos Avanzados de Programación</p>
                        <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
                            <li>Implementación de un simulador para representar la interacción en un ecosistema.</li>
                            <li>Desarrollado en Java con conexiones a una base de datos MySQL utilizando PHP.</li>
                            <li>Diseño y gestión de una base de datos relacional.</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-lg text-slate-800">Talleres de Formación</h4>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">2023</span>
                        </div>
                        <p className="text-sm font-semibold text-blue-600 mb-2">Rocket Pony</p>
                        <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
                            <li>Aprendizaje de los fundamentos del lenguaje de programación Python.</li>
                            <li>Implementación de algoritmos básicos y comprensión de la lógica de programación.</li>
                        </ul>
                        <p className="text-sm font-semibold text-blue-600 mt-2 mb-2">IEEE</p>
                        <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
                            <li>Aprendizaje de los fundamentos de la electrónica y los componentes electrónicos básicos.</li>
                            <li>Realización de circuitos básicos y prácticos utilizando resistencias, condensadores, transistores y otros componentes.</li>
                        </ul>
                    </div>

                </div>
            </section>
        </main>
    );
}