import React, { useState, useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

export default function OnePagerSite() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [currentPage, setCurrentPage] = useState("home");
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("theme");
      if (saved === "light") {
        setIsDark(false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (isDark) {
        root.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [isDark]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const productCategories = [
    {
      name: "Categoría 1",
      icon: "🪑",
      models: [
        {
          title: "Llanta 1",
          description:
            "Una silla de oficina ergonómica diseñada para máxima comodidad durante largas horas de trabajo. Cuenta con soporte lumbar ajustable y material de malla transpirable.",
          modelUrl: "/models/llanta+de+tractor+3d.glb",
          pdfUrl: "#",
          bullets: [
            "Altura y apoyabrazos ajustables",
            "Base giratoria 360° con ruedas suaves",
            "Acolchado de espuma de alta densidad",
          ],
        },
        {
          title: "Llanta 2",
          description:
            "Diseño de escritorio limpio y funcional con gestión de cables integrada y acabado duradero en madera de roble. Perfecto para oficinas en casa modernas.",
          modelUrl: "/models/metal+ring+3d+model.glb",
          pdfUrl: "#",
          bullets: [
            "Construcción en roble sólido",
            "Sistema integrado de gestión de cables",
            "Revestimiento resistente al agua",
          ],
        },
        {
          title: "Lanta 3",
          description:
            "Sofá modular versátil que puede configurarse en múltiples arreglos. Cuenta con tela premium y cojines de espuma viscoelástica.",
          modelUrl: "/models/off-road+tire+3d+model (1).glb",
          pdfUrl: "#",
          bullets: [
            "Diseño modular con múltiples configuraciones",
            "Fundas removibles y lavables",
            "Cojines de asiento de espuma viscoelástica",
          ],
        },
      ],
    },
    {
      name: "Electrónicos",
      icon: "📱",
      models: [
        {
          title: "Hub Inteligente para el Hogar",
          description:
            "Unidad de control central para ecosistemas de hogar inteligente. Cuenta con compatibilidad de control por voz e integración perfecta de dispositivos.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
          pdfUrl: "#",
          bullets: [
            "Compatible con control por voz",
            "Soporta más de 100 dispositivos inteligentes",
            "Protocolos de seguridad integrados",
          ],
        },
        {
          title: "Audífonos Inalámbricos",
          description:
            "Audífonos inalámbricos premium con cancelación activa de ruido y 30 horas de duración de batería. Perfectos para música y llamadas.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
          pdfUrl: "#",
          bullets: [
            "Cancelación activa de ruido",
            "30 horas de batería total",
            "Resistencia al agua IPX7",
          ],
        },
        {
          title: "Monitor Gaming",
          description:
            "Monitor gaming de 27 pulgadas 4K con tasa de refresco de 144Hz y tiempo de respuesta de 1ms. Experiencia de juego inmersiva con soporte HDR.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
          pdfUrl: "#",
          bullets: [
            "Resolución 4K con HDR",
            "Tasa de refresco de 144Hz",
            "Tecnología AMD FreeSync",
          ],
        },
      ],
    },
    {
      name: "Arquitectura",
      icon: "🏛️",
      models: [
        {
          title: "Diseño de Villa Moderna",
          description:
            "Villa contemporánea con planos de planta abiertos, grandes ventanales de vidrio y materiales de construcción sostenibles. Perfecta para ubicaciones en colinas.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
          pdfUrl: "#",
          bullets: [
            "Plano de planta de concepto abierto",
            "Diseño energéticamente eficiente",
            "Integración de hogar inteligente",
          ],
        },
        {
          title: "Torre de Oficinas Comercial",
          description:
            "Torre comercial de 45 pisos con certificación LEED. Cuenta con sistemas HVAC avanzados y vistas panorámicas de la ciudad.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
          pdfUrl: "#",
          bullets: [
            "Certificado LEED Platino",
            "Sistemas HVAC avanzados",
            "Vistas panorámicas desde los ascensores",
          ],
        },
        {
          title: "Centro Comunitario Sostenible",
          description:
            "Centro comunitario diseñado con sostenibilidad en mente. Cuenta con paneles solares, recolección de agua de lluvia y techos verdes.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
          pdfUrl: "#",
          bullets: [
            "Generación de energía solar",
            "Sistema de recolección de agua de lluvia",
            "Instalación de techo verde",
          ],
        },
      ],
    },
    {
      name: "Joyería",
      icon: "💎",
      models: [
        {
          title: "Anillo de Compromiso de Diamantes",
          description:
            "Exquisito anillo de compromiso con un diamante central de 2 quilates con engaste pavé. Elaborado en oro blanco de 18k.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
          pdfUrl: "#",
          bullets: [
            "Diamante central de 2 quilates",
            "Engaste de oro blanco 18k",
            "Acentos de diamantes micro-pavé",
          ],
        },
        {
          title: "Reloj Deportivo de Lujo",
          description:
            "Reloj mecánico automático con función de cronógrafo. Cuenta con cristal de zafiro y resistencia al agua de 200m.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
          pdfUrl: "#",
          bullets: [
            "Movimiento mecánico automático",
            "Cristal de zafiro",
            "Resistencia al agua de 200m",
          ],
        },
        {
          title: "Colección de Collar de Perlas",
          description:
            "Elegante collar de perlas con perlas Akoya y cierre de diamantes. Perfecto para ocasiones formales y eventos especiales.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
          pdfUrl: "#",
          bullets: [
            "Perlas Akoya grado AAA",
            "Cierre con incrustaciones de diamantes",
            "Longitud ajustable de 18 pulgadas",
          ],
        },
      ],
    },
    {
      name: "Auto",
      icon: "🚗",
      models: [
        {
          title: "Auto Deportivo Eléctrico",
          description:
            "Auto deportivo eléctrico de alto rendimiento con autonomía de 500 millas y 0-60mph en 2.5 segundos. Diseño futurista con aerodinámica avanzada.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
          pdfUrl: "#",
          bullets: [
            "Autonomía eléctrica de 500 millas",
            "0-60mph en 2.5 segundos",
            "Conducción autónoma avanzada",
          ],
        },
        {
          title: "SUV de Lujo",
          description:
            "SUV premium que combina comodidad de lujo con capacidad todoterreno. Cuenta con interior artesanal y sistemas de seguridad avanzados.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
          pdfUrl: "#",
          bullets: [
            "Interior de cuero artesanal",
            "Gestión avanzada de terreno",
            "Sistema de audio de 21 altavoces",
          ],
        },
        {
          title: "Scooter Eléctrico Urbano",
          description:
            "Scooter eléctrico compacto diseñado para desplazamientos urbanos. Diseño ligero plegable con autonomía de 40 millas.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
          pdfUrl: "#",
          bullets: [
            "Autonomía máxima de 40 millas",
            "Plegable para fácil almacenamiento",
            "Funciones de conectividad por app",
          ],
        },
      ],
    },
    {
      name: "Industrial",
      icon: "🏭",
      models: [
        {
          title: "Prototipo de Máquina CNC",
          description:
            "Máquina CNC de alta precisión para manufactura industrial. Cuenta con cambio automático de herramientas y monitoreo en tiempo real.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
          pdfUrl: "#",
          bullets: [
            "Mecanizado de precisión de 5 ejes",
            "Cambiador automático de herramientas",
            "Sistema de monitoreo en tiempo real",
          ],
        },
        {
          title: "Brazo de Ensamblaje Robótico",
          description:
            "Brazo robótico industrial para automatización de líneas de ensamblaje. Programable para múltiples tareas con precisión submilimétrica.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb",
          pdfUrl: "#",
          bullets: [
            "Capacidad de movimiento de 6 ejes",
            "Precisión submilimétrica",
            "Interfaz de programación fácil",
          ],
        },
        {
          title: "Impresora 3D Industrial",
          description:
            "Impresora 3D industrial a gran escala capaz de imprimir con múltiples materiales incluyendo metales y compuestos.",
          modelUrl: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
          pdfUrl: "#",
          bullets: [
            "Impresión multi-material",
            "Gran volumen de construcción",
            "Capacidad de alta temperatura",
          ],
        },
      ],
    },
  ];

  const services = [
    {
      title: "Modelado 3D",
      description: "Servicios profesionales de modelado 3D para productos, arquitectura y conceptos.",
      icon: "🎨",
    },
    {
      title: "Renderizado",
      description: "Renderizado y visualización fotorrealista para marketing y presentaciones.",
      icon: "📸",
    },
    {
      title: "Animación",
      description: "Animaciones 3D dinámicas para mostrar tus productos en movimiento.",
      icon: "🎬",
    },
    {
      title: "Consultoría",
      description: "Consultoría experta en flujos de trabajo 3D y optimización de procesos.",
      icon: "💡",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productCategories[currentCategory].models.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + productCategories[currentCategory].models.length) % productCategories[currentCategory].models.length
    );
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    setFormData({ name: "", email: "", phone: "", comment: "" });
  };

  const CataloguePage: React.FC<{ isDark: boolean; onToggleTheme: () => void }> = ({ isDark, onToggleTheme }) => {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedModel, setSelectedModel] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchMode, setSearchMode] = useState("current");

    const searchAllModels = (term: string) => {
      if (!term.trim()) return [] as Array<{
        categoryIndex: number;
        modelIndex: number;
        category: (typeof productCategories)[number];
        model: (typeof productCategories)[number]["models"][number];
      }>;

      const results: Array<{
        categoryIndex: number;
        modelIndex: number;
        category: (typeof productCategories)[number];
        model: (typeof productCategories)[number]["models"][number];
      }> = [];
      for (let categoryIndex = 0; categoryIndex < productCategories.length; categoryIndex++) {
        const category = productCategories[categoryIndex];
        for (let modelIndex = 0; modelIndex < category.models.length; modelIndex++) {
          const model = category.models[modelIndex];
          if (
            model.title.toLowerCase().includes(term.toLowerCase()) ||
            model.description.toLowerCase().includes(term.toLowerCase()) ||
            category.name.toLowerCase().includes(term.toLowerCase())
          ) {
            results.push({
              categoryIndex,
              modelIndex,
              category,
              model,
            });
          }
        }
      }
      return results;
    };

    const globalSearchResults = searchAllModels(searchTerm);
    const hasGlobalSearchResults = searchTerm.trim() && globalSearchResults.length > 0;

    const handleModelSelect = (categoryIndex: number, modelIndex: number) => {
      setSelectedCategory(categoryIndex);
      setSelectedModel(modelIndex);
      setSearchTerm("");
    };

    const filteredModels = productCategories[selectedCategory].models.filter(
      (model) =>
        model.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className={isDark ? "min-h-screen bg-gray-900 pt-32" : "min-h-screen bg-gray-100 pt-32"}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-40 bg-opacity-90 backdrop-blur-md bg-gray-900 dark:bg-gray-900">
          <button
            onClick={() => setCurrentPage("home")}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Inicio
          </button>
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className={
              isDark
                ? "p-2 rounded-full bg-gray-800 border border-gray-700 text-yellow-300 hover:bg-gray-700 transition"
                : "p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
            }
          >
            {isDark ? (
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 3.22l.61 1.87a1 1 0 00.95.69h1.97l-1.6 1.16a1 1 0 00-.36 1.12l.61 1.87-1.6-1.16a1 1 0 00-1.18 0l-1.6 1.16.61-1.87a1 1 0 00-.36-1.12L6.47 5.78h1.97a1 1 0 00.95-.69L10 3.22z" />
                <path d="M4 13a6 6 0 1112 0 6 6 0 01-12 0z" />
              </svg>
            )}
          </button>
        </div>

        <div className="container mx-auto px-4 py-8 pt-12">
          <h1 className={isDark ? "text-4xl md:text-5xl font-bold text-center text-white mb-12" : "text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"}>
            Catálogo de Modelos 3D
          </h1>

          <div className="flex justify-center mb-12">
            <div className="flex overflow-x-auto pb-4 scrollbar-hide max-w-full">
              <div className="flex space-x-2 md:space-x-3">
                {productCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(index);
                      setSelectedModel(0);
                      setSearchTerm("");
                    }}
                    className={
                      selectedCategory === index
                        ? "flex items-center space-x-2 px-4 py-3 rounded-lg transition whitespace-nowrap bg-blue-600 text-white"
                        : isDark
                        ? "flex items-center space-x-2 px-4 py-3 rounded-lg transition whitespace-nowrap bg-gray-700 text-gray-300 hover:bg-gray-600"
                        : "flex items-center space-x-2 px-4 py-3 rounded-lg transition whitespace-nowrap bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium text-sm md:text-base">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <div className={isDark ? "bg-gray-800 rounded-xl p-6 border border-gray-700 h-full" : "bg-white rounded-xl p-6 border border-gray-200 h-full"}>
                <div className="mb-6">
                  <label htmlFor="search" className={isDark ? "block text-gray-300 font-medium mb-2" : "block text-gray-700 font-medium mb-2"}>
                    Buscar Todos los Modelos
                  </label>
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar en todas las categorías..."
                    className={
                      isDark
                        ? "w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                        : "w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400"
                    }
                  />
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => setSearchTerm("")} className={isDark ? "text-xs text-gray-400 hover:text-gray-300 transition" : "text-xs text-gray-500 hover:text-gray-700 transition"}>
                      Limpiar Búsqueda
                    </button>
                  </div>
                </div>

                {hasGlobalSearchResults && (
                  <div className="mb-6">
                    <h3 className={isDark ? "text-lg font-semibold text-white mb-3" : "text-lg font-semibold text-gray-900 mb-3"}>
                      Resultados de Búsqueda ({globalSearchResults.length})
                    </h3>
                    <div className={isDark ? "space-y-3 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700" : "space-y-3 max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"}>
                      {globalSearchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleModelSelect(result.categoryIndex, result.modelIndex)}
                          className={
                            isDark
                              ? "w-full text-left p-4 rounded-lg transition bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
                              : "w-full text-left p-4 rounded-lg transition bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                          }
                        >
                          <div className="font-medium text-sm mb-1">{result.model.title}</div>
                          <div className={isDark ? "text-xs text-gray-400 flex items-center gap-1" : "text-xs text-gray-500 flex items-center gap-1"}>
                            <span>{result.category.icon}</span>
                            <span>{result.category.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div
                  className={
                    hasGlobalSearchResults
                      ? isDark
                        ? "space-y-3 max-h-96 overflow-y-auto pr-2 opacity-50 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700"
                        : "space-y-3 max-h-96 overflow-y-auto pr-2 opacity-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                      : isDark
                      ? "space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700"
                      : "space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                  }
                >
                  <h3 className={isDark ? "text-lg font-semibold text-white mb-3 sticky top-0 bg-gray-800 py-2" : "text-lg font-semibold text-gray-900 mb-3 sticky top-0 bg-white py-2"}>
                    Modelos de {productCategories[selectedCategory].name}
                    {!hasGlobalSearchResults && searchTerm && (
                      <span className="text-sm font-normal text-gray-400 ml-2">
                        ({filteredModels.length} de {productCategories[selectedCategory].models.length})
                      </span>
                    )}
                  </h3>

                  {!hasGlobalSearchResults && (
                    <>
                      {filteredModels.map((model, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedModel(index)}
                          className={
                            selectedModel === index
                              ? "w-full text-left p-4 rounded-lg transition bg-blue-600 text-white"
                              : isDark
                              ? "w-full text-left p-4 rounded-lg transition bg-gray-700 text-gray-300 hover:bg-gray-600"
                              : "w-full text-left p-4 rounded-lg transition bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                          }
                        >
                          <div className="font-medium text-sm">{model.title}</div>
                        </button>
                      ))}
                      {filteredModels.length === 0 && searchTerm && (
                        <div className={isDark ? "text-gray-400 text-center py-4" : "text-gray-500 text-center py-4"}>
                          No se encontraron modelos en esta categoría.
                        </div>
                      )}
                      {filteredModels.length === 0 && !searchTerm && (
                        <div className={isDark ? "text-gray-400 text-center py-4" : "text-gray-500 text-center py-4"}>
                          No hay modelos disponibles.
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className={isDark ? "bg-gray-800 rounded-xl p-6 border border-gray-700 h-full" : "bg-white rounded-xl p-6 border border-gray-200 h-full"}>
                <div className={isDark ? "bg-gray-700 rounded-xl overflow-hidden border border-gray-600" : "bg-gray-100 rounded-xl overflow-hidden border border-gray-200"} style={{ height: "500px" }}>
                  <model-viewer
                    src={productCategories[selectedCategory].models[selectedModel].modelUrl}
                    alt={productCategories[selectedCategory].models[selectedModel].title}
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    exposure="1.0"
                    environment-image="neutral"
                    style={{ width: "100%", height: "100%" }}
                  ></model-viewer>
                </div>
                <div className="mt-4 text-center">
                  <div className={isDark ? "text-sm text-gray-400" : "text-sm text-gray-500"}>
                    Viendo actualmente: <span className={isDark ? "text-white font-medium" : "text-gray-900 font-medium"}>{productCategories[selectedCategory].models[selectedModel].title}</span>
                  </div>
                  <div className={isDark ? "text-xs text-gray-500 flex items-center justify-center gap-1 mt-1" : "text-xs text-gray-400 flex items-center justify-center gap-1 mt-1"}>
                    <span>{productCategories[selectedCategory].icon}</span>
                    <span>{productCategories[selectedCategory].name}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 hidden lg:block">
              <div className={isDark ? "bg-gray-800 rounded-xl p-6 border border-gray-700 h-full" : "bg-white rounded-xl p-6 border border-gray-200 h-full"}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{productCategories[selectedCategory].icon}</span>
                  <h2 className={isDark ? "text-xl font-bold text-white" : "text-xl font-bold text-gray-900"}>
                    {productCategories[selectedCategory].models[selectedModel].title}
                  </h2>
                </div>

                <p className={isDark ? "text-gray-300 mb-6 leading-relaxed text-sm" : "text-gray-700 mb-6 leading-relaxed text-sm"}>
                  {productCategories[selectedCategory].models[selectedModel].description}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className={isDark ? "text-lg font-semibold text-white mb-3" : "text-lg font-semibold text-gray-900 mb-3"}>Características Principales:</h4>
                  {productCategories[selectedCategory].models[selectedModel].bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className={isDark ? "w-4 h-4 text-blue-400 mt-1 flex-shrink-0" : "w-4 h-4 text-blue-500 mt-1 flex-shrink-0"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className={isDark ? "text-gray-300 text-sm" : "text-gray-700 text-sm"}>{bullet}</span>
                    </div>
                  ))}
                </div>

                <button className={isDark ? "w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2 justify-center border border-blue-500 cursor-pointer" : "w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2 justify-center cursor-pointer"}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Descargar PDF
                </button>
              </div>
            </div>
          </div>

          <div className="lg:hidden mt-8">
            <div className={isDark ? "bg-gray-800 rounded-xl p-6 border border-gray-700" : "bg-white rounded-xl p-6 border border-gray-200"}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{productCategories[selectedCategory].icon}</span>
                <h2 className={isDark ? "text-xl font-bold text-white" : "text-xl font-bold text-gray-900"}>
                  {productCategories[selectedCategory].models[selectedModel].title}
                </h2>
              </div>

              <p className={isDark ? "text-gray-300 mb-6 leading-relaxed text-sm" : "text-gray-700 mb-6 leading-relaxed text-sm"}>
                {productCategories[selectedCategory].models[selectedModel].description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className={isDark ? "text-lg font-semibold text-white mb-3" : "text-lg font-semibold text-gray-900 mb-3"}>Características Principales:</h4>
                {productCategories[selectedCategory].models[selectedModel].bullets.map((bullet, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className={isDark ? "w-4 h-4 text-blue-400 mt-1 flex-shrink-0" : "w-4 h-4 text-blue-500 mt-1 flex-shrink-0"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={isDark ? "text-gray-300 text-sm" : "text-gray-700 text-sm"}>{bullet}</span>
                  </div>
                ))}
              </div>

              <button className={isDark ? "w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2 justify-center border border-blue-500 cursor-pointer" : "w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2 justify-center cursor-pointer"}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (currentPage === "catalogue") {
    return <CataloguePage isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />;
  }

  return (
    <div className={isDark ? "min-h-screen bg-gray-900" : "min-h-screen bg-gray-100"}>
      <nav
        className={
          isDark
            ? "fixed top-8 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-md shadow-lg rounded-full px-4 py-3 md:px-8 md:py-4 z-50 w-11/12 max-w-5xl border border-gray-700"
            : "fixed top-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-lg rounded-full px-4 py-3 md:px-8 md:py-4 z-50 w-11/12 max-w-5xl border border-gray-200"
        }
      >
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrentPage("home")}
            className={isDark ? "text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition cursor-pointer" : "text-xl md:text-2xl font-bold text-gray-900 hover:text-blue-600 transition cursor-pointer"}
          >
            LOGO
          </button>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={isDark ? "text-gray-300 hover:text-white transition font-medium cursor-pointer text-sm lg:text-base" : "text-gray-600 hover:text-gray-900 transition font-medium cursor-pointer text-sm lg:text-base"}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={isDark ? "text-gray-300 hover:text-white transition font-medium cursor-pointer text-sm lg:text-base" : "text-gray-600 hover:text-gray-900 transition font-medium cursor-pointer text-sm lg:text-base"}
            >
              Servicios
            </button>
            <button
              onClick={() => setCurrentPage("catalogue")}
              className={isDark ? "text-gray-300 hover:text-white transition font-medium cursor-pointer text-sm lg:text-base" : "text-gray-600 hover:text-gray-900 transition font-medium cursor-pointer text-sm lg:text-base"}
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={isDark ? "text-gray-300 hover:text-white transition font-medium cursor-pointer text-sm lg:text-base" : "text-gray-600 hover:text-gray-900 transition font-medium cursor-pointer text-sm lg:text-base"}
            >
              Contacto
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className={
                isDark
                  ? "p-2 rounded-full bg-gray-700 border border-gray-600 text-yellow-300 hover:bg-gray-600 transition"
                  : "p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
              }
            >
              {isDark ? (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 3.22l.61 1.87a1 1 0 00.95.69h1.97l-1.6 1.16a1 1 0 00-.36 1.12l.61 1.87-1.6-1.16a1 1 0 00-1.18 0l-1.6 1.16.61-1.87a1 1 0 00-.36-1.12L6.47 5.78h1.97a1 1 0 00.95-.69L10 3.22z" />
                  <path d="M4 13a6 6 0 1112 0 6 6 0 01-12 0z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={isDark ? "md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer text-sm font-medium" : "md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer text-sm font-medium"}
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className={isDark ? "pt-32 md:pt-32 min-h-screen flex items-center bg-gradient-to-br from-gray-800 to-gray-900" : "pt-32 md:pt-32 min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100"}>
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className={isDark ? "text-4xl md:text-6xl font-bold text-white mb-6" : "text-4xl md:text-6xl font-bold text-gray-900 mb-6"}>
                Dando Vida a Tus
                <br />
                Visiones en 3D
              </h1>
              <p className={isDark ? "text-lg md:text-xl text-gray-300 mb-8" : "text-lg md:text-xl text-gray-600 mb-8"}>
                Servicios profesionales de modelado 3D, renderizado y animación para empresas y creadores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => setCurrentPage("catalogue")}
                  className="bg-blue-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-blue-700 transition text-center cursor-pointer text-sm md:text-base"
                >
                  Ver Catálogo Completo
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={isDark ? "border-2 border-gray-300 text-gray-300 px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition text-center cursor-pointer text-sm md:text-base" : "border-2 border-gray-400 text-gray-700 px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition text-center cursor-pointer text-sm md:text-base"}
                >
                  Contáctanos
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
                <span className="text-white text-6xl">🎨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={isDark ? "py-16 bg-gray-800" : "py-16 bg-white"}>
        <div className="container mx-auto px-4">
          <h2 className={isDark ? "text-3xl md:text-4xl font-bold text-center text-white mb-12" : "text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"}>
            Nuestros Servicios
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={
                  isDark
                    ? "bg-gray-700 rounded-xl p-6 hover:shadow-lg transition border border-gray-600"
                    : "bg-white rounded-xl p-6 hover:shadow-lg transition border border-gray-200"
                }
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={isDark ? "text-xl font-bold text-white mb-2" : "text-xl font-bold text-gray-900 mb-2"}>{service.title}</h3>
                <p className={isDark ? "text-gray-300 text-sm md:text-base" : "text-gray-600 text-sm md:text-base"}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogue" className={isDark ? "py-16 bg-gray-900" : "py-16 bg-gray-100"}>
        <div className="container mx-auto px-4">
          <h2 className={isDark ? "text-3xl md:text-4xl font-bold text-center text-white mb-12" : "text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"}>
            Vista Previa del Catálogo 3D
          </h2>

          <div className={isDark ? "bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-700" : "bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200"}>
            <div className="flex justify-center mb-8">
              <div className="flex overflow-x-auto pb-4 scrollbar-hide max-w-full">
                <div className="flex space-x-2 md:space-x-3">
                  {productCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentCategory(index);
                        setCurrentSlide(0);
                      }}
                      className={
                        currentCategory === index
                          ? "flex items-center space-x-2 px-4 py-3 rounded-lg transition whitespace-nowrap bg-blue-600 text-white"
                          : isDark
                          ? "flex items-center space-x-2 px-4 py-3 rounded-lg transition whitespace-nowrap bg-gray-700 text-gray-300 hover:bg-gray-600"
                          : "flex items-center space-x-2 px-4 py-3 rounded-lg transition whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium text-sm md:text-base">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <div className={isDark ? "bg-gray-700 rounded-xl overflow-hidden border border-gray-600" : "bg-gray-100 rounded-xl overflow-hidden border border-gray-200"} style={{ height: "300px", minHeight: "300px" }}>
                  <model-viewer
                    src={productCategories[currentCategory].models[currentSlide].modelUrl}
                    alt={productCategories[currentCategory].models[currentSlide].title}
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    exposure="1.0"
                    environment-image="neutral"
                    style={{ width: "100%", height: "100%" }}
                  ></model-viewer>
                </div>

                <div className="flex items-center justify-center mt-6">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={prevSlide}
                      className={isDark ? "bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition border border-gray-600 cursor-pointer" : "bg-white text-gray-700 p-2 rounded-full hover:bg-gray-100 transition border border-gray-200 cursor-pointer"}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <div className="flex gap-2">
                      {productCategories[currentCategory].models.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={
                            index === currentSlide
                              ? "w-6 md:w-8 h-2 rounded-full bg-blue-500 transition cursor-pointer"
                              : isDark
                              ? "w-2 h-2 rounded-full bg-gray-600 transition cursor-pointer"
                              : "w-2 h-2 rounded-full bg-gray-300 transition cursor-pointer"
                          }
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className={isDark ? "bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 transition border border-gray-600 cursor-pointer" : "bg-white text-gray-700 p-2 rounded-full hover:bg-gray-100 transition border border-gray-200 cursor-pointer"}
                    >
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{productCategories[currentCategory].icon}</span>
                  <h3 className={isDark ? "text-2xl md:text-3xl font-bold text-white" : "text-2xl md:text-3xl font-bold text-gray-900"}>
                    {productCategories[currentCategory].models[currentSlide].title}
                  </h3>
                </div>
                <p className={isDark ? "text-gray-300 mb-6 leading-relaxed text-sm md:text-base" : "text-gray-600 mb-6 leading-relaxed text-sm md:text-base"}>
                  {productCategories[currentCategory].models[currentSlide].description}
                </p>

                <div className="space-y-3 mb-8">
                  {productCategories[currentCategory].models[currentSlide].bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className={isDark ? "w-4 h-4 md:w-5 md:h-5 text-blue-400 mt-1 flex-shrink-0" : "w-4 h-4 md:w-5 md:h-5 text-blue-500 mt-1 flex-shrink-0"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className={isDark ? "text-gray-300 text-sm md:text-base" : "text-gray-600 text-sm md:text-base"}>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition inline-flex items-center gap-2 border border-blue-500 cursor-pointer text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Descargar PDF
                  </button>
                  <button
                    onClick={() => setCurrentPage("catalogue")}
                    className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-700 transition inline-flex items-center gap-2 border border-green-500 cursor-pointer text-sm md:text-base"
                  >
                    Ver Catálogo Completo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={isDark ? "py-16 bg-gray-800" : "py-16 bg-white"}>
        <div className="container mx-auto px-4">
          <h2 className={isDark ? "text-3xl md:text-4xl font-bold text-center text-white mb-12" : "text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"}>
            Contáctanos
          </h2>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className={isDark ? "block text-gray-300 font-medium mb-2" : "block text-gray-700 font-medium mb-2"}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className={
                      isDark
                        ? "w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                        : "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400"
                    }
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={isDark ? "block text-gray-300 font-medium mb-2" : "block text-gray-700 font-medium mb-2"}>
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className={
                      isDark
                        ? "w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                        : "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400"
                    }
                    placeholder="tu.correo@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className={isDark ? "block text-gray-300 font-medium mb-2" : "block text-gray-700 font-medium mb-2"}>
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className={
                    isDark
                      ? "w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                      : "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400"
                  }
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div>
                <label htmlFor="comment" className={isDark ? "block text-gray-300 font-medium mb-2" : "block text-gray-700 font-medium mb-2"}>
                  Comentario
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleFormChange}
                  rows={5}
                  required
                  className={
                    isDark
                      ? "w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                      : "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400"
                  }
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium border border-blue-500 cursor-pointer"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className={isDark ? "bg-gray-900 text-white py-8 border-t border-gray-800" : "bg-gray-100 text-gray-700 py-8 border-t border-gray-200"}>
        <div className="container mx-auto px-4 text-center">
          <p className={isDark ? "text-gray-400" : "text-gray-500"}>© 2024 Estudio 3D. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
