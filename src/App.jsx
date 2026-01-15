import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
// import ScrambledText from "./components/ScrambledText/ScrambledText"; // (Opcional si no lo usas)
// import SplitText from "./components/SplitText/SplitText"; // (Opcional si no lo usas)
import Lanyard from "./components/Lanyard/Lanyard";
// import GlassIcons from "./components/GlassIcons/GlassIcons"; // (Opcional)
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fondo Aurora */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HERO SECTION --- */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img
                src="./assets/perfil.png"
                className="w-10 h-10 rounded-full object-cover"
                alt="Avatar"
              />
              <q className="italic">
                Construyendo soluciones reales con código y creatividad.
              </q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hola, soy Carlos Ariel Cuadras"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <BlurText
              text="Estudiante de Ingeniería en Sistemas Computacionales y Desarrollador Full Stack. Me enfoco en crear software sólido, escalable y funcional, desde sistemas robustos de escritorio hasta aplicaciones web modernas."
              delay={50}
              animateBy="words"
              direction="top"
              className="mb-6 text-lg text-gray-300"
            />

            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV.pdf"
                download="CV_Carlos_Cuadras.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Descargar CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Carlos Ariel"
              title="Full Stack Dev"
              handle="Carlos Ariel"
              status="Open to Work"
              contactText="Contáctame"
              avatarUrl="./assets/perfil.png"
              showUserInfo={true}
              enableTilt={true}
            />
          </div>
        </div>

        {/* --- ABOUT SECTION --- */}
        <div
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-linear-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  Sobre Mí
                </h2>
                <BlurText
                  text="Soy Carlos Ariel Cuadras Camacho, a punto de culminar mi Ingeniería en Sistemas. Me especializo en el desarrollo de soluciones 'end-to-end', integrando bases de datos SQL/NoSQL, lógica de backend compleja y arquitecturas modernas. He liderado proyectos académicos y reales que van desde la IoT con visión artificial hasta plataformas web progresivas (PWA). Mi objetivo es simple: desarrollar software eficiente que resuelva problemas reales."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />
                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      6<span className="text-violet-500">+</span>
                    </h1>
                    <p className="text-sm text-gray-400">
                      Proyectos Completados
                    </p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      4<span className="text-violet-500">+</span>
                    </h1>
                    <p className="text-sm text-gray-400">Años de Formación</p>
                  </div>
                </div>
                <ShinyText
                  text="Ingenio y pasión en cada línea."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* --- TOOLS SECTION --- */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p
            className="w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My Profesional Skills
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PROJECTS SECTION --- */}
        <div className="proyek mt-32 py-10" id="project">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Projects
          </h1>
          <p
            className="text-base/loose text-center opacity-50 mb-14"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Proyectos que demuestran mi capacidad técnica y mi enfoque en crear
            soluciones digitales reales y funcionales.
          </p>

          <div className="proyek-box">
            {/* Componente de la Grid de Proyectos */}
            <div
              style={{ height: "auto", position: "relative" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <ChromaGrid
                items={listProyek}
                onItemClick={handleProjectClick}
                radius={500}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>

            {/* --- CONTACT FORM MEJORADO --- */}
            {/* Agregamos mt-24 para separar y flex/justify-center para centrar */}
            <div className="mt-24 w-full flex flex-col items-center justify-center pb-20">
              <h2
                className="text-3xl md:text-4xl font-bold mb-8 text-center"
                data-aos="fade-up"
              >
                Contáctame
              </h2>

              <form
                action="https://formsubmit.co/carlosarielcuadrascamacho@gmail.com"
                method="POST"
                // Aquí limitamos el ancho a max-w-2xl para que no se estire
                className="bg-zinc-800 p-8 sm:p-12 w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                {/* Campos ocultos opcionales para FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="Nuevo mensaje desde tu Portfolio!"
                />

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-300">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Tu nombre..."
                      className="border border-zinc-600 bg-zinc-900 p-3 rounded-lg focus:outline-none focus:border-violet-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-300">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="tucorreo@ejemplo.com"
                      className="border border-zinc-600 bg-zinc-900 p-3 rounded-lg focus:outline-none focus:border-violet-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="font-semibold text-gray-300"
                    >
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="6"
                      placeholder="Escribe tu mensaje aquí..."
                      className="border border-zinc-600 bg-zinc-900 p-3 rounded-lg focus:outline-none focus:border-violet-500 transition-colors resize-none"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="font-semibold bg-violet-600 hover:bg-violet-700 text-white p-4 px-8 rounded-full w-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-violet-500/20"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Fin Contact Form */}
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
