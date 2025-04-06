const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
                {/* Lado izquierdo: Nombre y contacto */}
                <div className="md:w-1/3 bg-indigo-600 text-white flex flex-col justify-center items-center p-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
                        Luis Carlos Tercero Rodriguez
                    </h1>
                    <div className="text-sm space-y-2 text-center">
                        <div>
                            <span className="block font-semibold">Correo:</span>
                            <a
                                href="mailto:tercerohshshsh@gmail.com"
                                className="hover:underline"
                            >
                                tercerohshshsh@gmail.com
                            </a>
                        </div>
                        <div>
                            <span className="block font-semibold">Teléfono:</span>
                            <span>33341900</span>
                        </div>
                    </div>
                </div>

                
                <div className="md:w-2/3 p-8 space-y-6">
                <p className="text-gray-800 text-lg leading-relaxed">
    Soy un desarrollador web con interés en construir soluciones tecnológicas que marquen la diferencia. Me especializo en frontend utilizando tecnologías modernas como React y Tailwind CSS, y disfruto diseñar interfaces limpias, funcionales y enfocadas en la experiencia del usuario. Siempre estoy en constante aprendizaje y buscando nuevos retos que impulsen mi crecimiento profesional.
</p>


                    <div>
                        <h2 className="text-xl font-bold text-indigo-700 mb-2">Habilidades</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">React + Tailwind CSS</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">JavaScript moderno (ES6+)</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Consumo y manejo de APIs REST</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Diseño UX/UI y accesibilidad</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Control de versiones con Git</span>
                            <span className="bg-indigo-100 px-3 py-1 rounded-full">Scrum / Metodologías ágiles</span>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-xl font-bold text-indigo-700 mb-2">Proyectos</h2>
                        <p className="text-gray-800">
                            He desarrollado sistemas web como plataformas de gestión, catálogos interactivos y dashboards administrativos. Entre mis proyectos destacados se encuentran:
                            <br /><br />
                            - <strong>TodoAudio:</strong> Sistema completo de gestión de reservas y facturación para eventos de audio. Incluye autenticación de usuarios, generación de facturas en PDF y control de inventario.<br />
                            - <strong>Portafolio Web:</strong> Sitio personal diseñado con React para presentar mis proyectos, habilidades y formas de contacto.<br />
                            - <strong>Gestor de tareas:</strong> Aplicación productiva con CRUD, filtros y almacenamiento local.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
