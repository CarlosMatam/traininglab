'use client'
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Expert {
  name: string
  title: string
  subtitle: string
  bio: string
  image: string
}

const experts: Expert[] = [
  {
    name: "Natalia Sánchez",
    title: "Human Capital Services",
    subtitle: "Regional Manager",
    bio: "Experta en desarrollo organizacional con amplia experiencia en psicología y comunicación. Su especialidad es potenciar el talento humano en las empresas, diseñando e implementando estrategias para mejorar el clima laboral, la selección de personal y los programas de capacitación. Además, es una destacada coach ejecutiva, ayudando a líderes a alcanzar su máximo potencial.",
    image: "/Persona.jpg", // Ajusta con la ruta correcta
  },
  {
    name: "Max Santamaria",
    title: "Leadership Development",
    subtitle: "Senior Consultant",
    bio: "Especialista en desarrollo de liderazgo con más de 12 años de experiencia en consultoría empresarial. Su enfoque innovador combina metodologías ágiles con principios de neurociencia para potenciar el desarrollo de habilidades directivas. Ha implementado programas exitosos de transformación cultural en organizaciones multinacionales.",
    image: "/Persona1.jpg",
  },
  {
    name: "Ana María Torres",
    title: "Executive Education",
    subtitle: "Program Director",
    bio: "Doctora en Psicología Organizacional especializada en aprendizaje ejecutivo. Pionera en la implementación de metodologías híbridas de formación. Su experiencia incluye el diseño y dirección de programas de desarrollo para altos ejecutivos en más de 15 países de Latinoamérica. Experta en gestión del cambio y transformación organizacional.",
    image: "/Persona.jpg",
  },
]

export function ExpertCarousel() {
  const [currentExpert, setCurrentExpert] = useState(0)

  const nextExpert = () => {
    setCurrentExpert((prev) => (prev + 1) % experts.length)
  }

  const previousExpert = () => {
    setCurrentExpert((prev) => (prev - 1 + experts.length) % experts.length)
  }

  return (
    <section id="instructores" className="py-20 px-4 bg-white relative">
      <div className="container mx-auto">
        <h2 className="text-center mb-2">
          <span className="text-[#0D47A1] text-4xl md:text-5xl font-bold">Aprende de los Mejores:</span>
        </h2>
        <h3 className="text-center text-black text-2xl md:text-3xl mb-16 max-w-4xl mx-auto">
          Expertos en Gerencia y Liderazgo
          <br />
          al Frente de tu Formación
        </h3>

        {/* Contenedor del carrusel */}
        <div className="relative flex items-center">
          {/* Botón izquierdo */}
          <button
            onClick={previousExpert}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Previous expert"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Contenido del carrusel */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto max-w-5xl">
            {/* Imagen del experto */}
            <div className="flex justify-center">
              <Image
                src={experts[currentExpert].image}
                alt={experts[currentExpert].name}
                width={300} // Ajusta según tu necesidad
                height={400}
                className="rounded-lg object-cover shadow-md"
              />
            </div>

            {/* Información del experto */}
            <div className="text-left">
              <h3 className="text-2xl text-black font-bold mb-2">{experts[currentExpert].name}</h3>
              <p className="text-gray-700 font-medium mb-1">{experts[currentExpert].title}</p>
              <p className="text-gray-600 mb-6">{experts[currentExpert].subtitle}</p>
              <p className="text-gray-700 leading-relaxed text-justify">{experts[currentExpert].bio}</p>
            </div>
          </div>

          {/* Botón derecho */}
          <button
            onClick={nextExpert}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Next expert"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        {/* Indicadores de navegación */}
        <div className="flex justify-center mt-8 gap-2">
          {experts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExpert(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentExpert ? "bg-[#0D47A1]" : "bg-gray-300"
              }`}
              aria-label={`Go to expert ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
