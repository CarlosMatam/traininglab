"use client"

import { useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pablo Salas",
    text: "Invertir en la formación de mi equipo en Training Lab ha sido una de las mejores decisiones que he tomado. Los cursos han tenido un impacto muy positivo en el desempeño de mi equipo y en los resultados de nuestra empresa. ¡Recomiendo encarecidamente Training Lab a cualquier empresa que busque potenciar el talento de sus colaboradores!",
    image: "/Persona1.jpg",
  },
  {
    id: 2,
    name: "Juan Carlos Vegas",
    text: "Lo que más valoro de Training Lab es la flexibilidad que ofrecen. Puedo adaptar los cursos a mis necesidades y horarios. Además, el equipo de Training Lab está siempre dispuesto a personalizar la experiencia de aprendizaje para cada participante. ¡Es un gran aliado para el desarrollo profesional!",
    image: "/Persona1.jpg",
  },
  {
    id: 3,
    name: "Gustavo Morales",
    text: "¡Training Lab superó todas mis expectativas! Me inscribí en el curso de liderazgo para impulsar mi carrera y las herramientas que adquirí han sido fundamentales para mejorar mi gestión de equipos. Los instructores son expertos en su campo y adaptaron el contenido a las necesidades específicas de nuestra empresa. ¡Recomiendo encarecidamente Training Lab a cualquier profesional que busque desarrollar sus habilidades!",
    image: "/Persona1.jpg",
  },
  {
    id: 4,
    name: "Ana Martínez",
    text: "La calidad de la formación en Training Lab es excepcional. Los instructores son muy profesionales y el contenido está perfectamente estructurado. Ha sido una experiencia de aprendizaje transformadora.",
    image: "/Persona1.jpg",
  },
  {
    id: 5,
    name: "Carlos Ruiz",
    text: "Training Lab me ha ayudado a desarrollar habilidades cruciales para mi carrera. El formato flexible y la calidad del contenido hacen que sea una inversión que vale la pena.",
    image: "/Persona1.jpg",
  },
  {
    id: 6,
    name: "Laura Sánchez",
    text: "Una experiencia educativa excepcional. Los cursos están muy bien diseñados y el soporte del equipo es excelente. Altamente recomendado para desarrollo profesional.",
    image: "/Persona1.jpg",
  },
]

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(testimonials.length / 3)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentTestimonials = () => {
    const start = currentSlide * 3
    return testimonials.slice(start, start + 3)
  }

  return (
    <div id="testimonios" className="w-full bg-[#145DA0] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Reseñas de Graduados Exitosos</h2>
        <p className="text-white text-center mb-12 text-lg">
          La experiencia es la suma de todo lo que hemos vivido y aprendido
        </p>

        <div className="relative">
          {/* Botón Anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getCurrentTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-lg flex flex-col justify-between h-full"
              >
                <div className="mb-6 flex-grow">
                  <p className="text-gray-700 text-sm line-clamp-6">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full  object-center "
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

