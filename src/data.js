import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// --- HERRAMIENTAS (TOOLS) ---
// 1. Importaciones corregidas y unificadas
import CSharpImg from "/assets/tools/csharp.png";
import CppImg from "/assets/tools/cplusplus.png";
import CImg from "/assets/tools/c.png";
import SqlImg from "/assets/tools/sql.png";
import JsImg from "/assets/tools/js.png";
import HtmlImg from "/assets/tools/html.png";
import CssImg from "/assets/tools/css.png";
import NodeImg from "/assets/tools/nodejs.png";
import PythonImg from "/assets/tools/python.png";
import MongoImg from "/assets/tools/mongo.png";
import GitImg from "/assets/tools/git.png";
import GithubImg from "/assets/tools/github.png";
import ReactImg from "/assets/tools/reactjs.png";
import TailwindImg from "/assets/tools/tailwind.png";
import BootstrapImg from "/assets/tools/bootstrap.png";
import MySqlImg from "/assets/tools/mysql.png";
import ViteImg from "/assets/tools/vite.png";
import VsCodeImg from "/assets/tools/vscode.png";
import ArduinoImg from "/assets/tools/arduino.png";

export const listTools = [
  // --- NIVEL AVANZADO ---
  {
    id: 1,
    gambar: CSharpImg,
    nama: "C#",
    ket: "Lenguaje Principal",
    dad: "100",
  },
  {
    id: 2,
    gambar: CppImg,
    nama: "C++",
    ket: "Sistemas",
    dad: "200",
  },
  {
    id: 3,
    gambar: CImg,
    nama: "C",
    ket: "Bajo Nivel",
    dad: "300",
  },
  {
    id: 4,
    gambar: SqlImg,
    nama: "SQL Server",
    ket: "Base de Datos",
    dad: "400",
  },
  {
    id: 5,
    gambar: MySqlImg,
    nama: "MySQL",
    ket: "Base de Datos",
    dad: "500",
  },

  // --- NIVEL INTERMEDIO (Full Stack) ---
  {
    id: 6,
    gambar: JsImg,
    nama: "JavaScript",
    ket: "Lenguaje Web",
    dad: "600",
  },
  {
    id: 7,
    gambar: NodeImg,
    nama: "Node JS",
    ket: "Runtime Environment",
    dad: "700",
  },
  {
    id: 9,
    gambar: HtmlImg,
    nama: "HTML5",
    ket: "Estructura",
    dad: "1000",
  },
  {
    id: 10,
    gambar: CssImg,
    nama: "CSS3",
    ket: "Estilos",
    dad: "1100",
  },
  {
    id: 12,
    gambar: BootstrapImg,
    nama: "Bootstrap",
    ket: "Framework CSS",
    dad: "1300",
  },

  // --- OTROS & HERRAMIENTAS ---
  {
    id: 13,
    gambar: PythonImg,
    nama: "Python",
    ket: "IA / Scripting",
    dad: "1400",
  },
  {
    id: 14,
    gambar: MongoImg,
    nama: "MongoDB",
    ket: "NoSQL DB",
    dad: "1500",
  },
  {
    id: 15,
    gambar: GitImg,
    nama: "Git",
    ket: "Version Control",
    dad: "1600",
  },
  {
    id: 16,
    gambar: GithubImg,
    nama: "GitHub",
    ket: "Repositorio",
    dad: "1700",
  },
  {
    id: 17,
    gambar: ArduinoImg,
    nama: "Arduino",
    ket: "IoT / Hardware",
    dad: "1800",
  },
];

// --- PROYECTOS ---
import Proyek1 from "/assets/proyek/tecbus.png";
import Proyek2 from "/assets/proyek/pos.png";
import Proyek3 from "/assets/proyek/torreta.png";
import Proyek4 from "/assets/proyek/kinder.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "TecBus - Transporte Inteligente",
    subtitle: "Plataforma de rastreo universitario en tiempo real.",
    fullDescription:
      "Plataforma inteligente diseñada para optimizar, monitorear y analizar el servicio de transporte universitario en tiempo real. Conecta a estudiantes, conductores y administradores en una sola plataforma, permitiendo el rastreo en vivo de las unidades, la gestión de rutas y horarios. Tecnologías: Node.js, Express, MongoDB, Leaflet, PWA.",
    borderColor: "#3B82F6", // Azul
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/carlosarielcuadrascamacho-svg/TecBus",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Sistema Punto de Venta (POS)",
    subtitle: "Aplicación de escritorio en C# y SQL Server.",
    fullDescription:
      "Sistema completo de ventas desarrollado como aplicación de escritorio, enfocado en lógica de negocio robusta. Gestiona inicio de sesión, productos, stock y registro de ventas. Destacado académicamente por su calidad visual y potencial de comercialización.",
    borderColor: "#10B981", // Verde
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/carlosarielcuadrascamacho-svg",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Torreta con Detección Facial",
    subtitle: "Sistema IoT con Visión Artificial y Arduino.",
    fullDescription:
      "Sistema automatizado que integra software y hardware. Utiliza C# y Emgu CV (OpenCV) para detectar rostros en tiempo real y calcular coordenadas, enviando instrucciones a un Arduino para mover una torreta física que sigue al usuario automáticamente.",
    borderColor: "#F59E0B", // Naranja
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/carlosarielcuadrascamacho-svg",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Sistema de Gestión Escolar",
    subtitle: "Digitalización de procesos para institución educativa.",
    fullDescription:
      "Software administrativo desarrollado para un Kinder local. Permite el registro y control eficiente de la información de los alumnos y datos administrativos, enfocado en una interfaz clara y simple para usuarios no técnicos.",
    borderColor: "#8B5CF6", // Violeta
    gradient: "linear-gradient(180deg, #8B5CF6, #000)",
    url: "https://github.com/carlosarielcuadrascamacho-svg",
    dad: "400",
  },
];
