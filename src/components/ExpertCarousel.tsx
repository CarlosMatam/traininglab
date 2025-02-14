"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Expert {
  name: string
  title: string
  subtitle: string
  bio: string
}

const experts: Expert[] = [
  {
    name: "Natalia Sánchez",
    title: "Human Capital Services",
    subtitle: "Regional Manager",
    bio: "Experta en desarrollo organizacional con amplia experiencia en psicología y comunicación. Su especialidad es potenciar el talento humano en las empresas, diseñando e implementando estrategias para mejorar el clima laboral, la selección de personal y los programas de capacitación. Además, es una destacada coach ejecutiva, ayudando a líderes a alcanzar su máximo potencial.",
  },
  {
    name: "Carlos Mendoza",
    title: "Leadership Development",
    subtitle: "Senior Consultant",
    bio: "Especialista en desarrollo de liderazgo con más de 12 años de experiencia en consultoría empresarial. Su enfoque innovador combina metodologías ágiles con principios de neurociencia para potenciar el desarrollo de habilidades directivas. Ha implementado programas exitosos de transformación cultural en organizaciones multinacionales.",
  },
  {
    name: "Ana María Torres",
    title: "Executive Education",
    subtitle: "Program Director",
    bio: "Doctora en Psicología Organizacional especializada en aprendizaje ejecutivo. Pionera en la implementación de metodologías híbridas de formación. Su experiencia incluye el diseño y dirección de programas de desarrollo para altos ejecutivos en más de 15 países de Latinoamérica. Experta en gestión del cambio y transformación organizacional.",
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
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
      <h2 className="text-center mb-2">
          <span className="text-[#0D47A1] text-4xl md:text-5xl font-bold">Aprende de los Mejores:</span>
        </h2>
        <h3 className="text-center text-black text-2xl md:text-3xl mb-16 max-w-4xl mx-auto">
          Expertos en Gerencia y Liderazgo
          <br />
          al Frente de tu Formación
        </h3>
        <div className="relative flex items-center justify-center">
          <button
            onClick={previousExpert}
            className="absolute left-0 z-10 p-2 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Previous expert"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="px-16 max-w-2xl mx-auto text-center text-justify">
            <h3 className="text-2xl text-black font-bold mb-2">{experts[currentExpert].name}</h3>
            <p className="text-gray-700 font-medium mb-1">{experts[currentExpert].title}</p>
            <p className="text-gray-600 mb-6">{experts[currentExpert].subtitle}</p>
            <p className="text-gray-700 leading-relaxed">{experts[currentExpert].bio}</p>
          </div>

          <button
            onClick={nextExpert}
            className="absolute right-0 z-10 p-2 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Next expert"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {experts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentExpert(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
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

