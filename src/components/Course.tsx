"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface CourseDetails {
  date: string
  location: string
  duration: string
  instructors: string[]
  cost: string
}

interface Course {
  id: number
  title: string
  description: string
  temario: string[]
  objectives: string[]
  details: CourseDetails
  image: string
}

const courses: Course[] = [
  {
    id: 1,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },
  {
    id: 2,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },
  {
    id: 3,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },
  {
    id: 4,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },
  {
    id: 5,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },
  {
    id: 6,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },
  {
    id: 7,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },
  {
    id: 8,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },

  {
    id: 9,
    title: "THE X LEARNING FACTOR: RUNNING TRAINING LIKE A BUSINESS",
    description: "¿Cómo tener una capacitación alineada con el desarrollo y el cambio en sus dirigidos?",
    temario: [
      "Mapeo por clusters de puestos y brechas de capacitación y aprendizaje como base",
      "¡Adiós a los objetivos borrosos! Diseño de objetivos de aprendizaje alineados con el desempeño",
      "Puntos clave en los cuatro niveles de impacto de la capacitación",
      "Método de training: catalizando el USO masivo sobre modelos",
    ],
    objectives: [
      "Definir y diferenciar conceptos clave como mapeo de puestos",
      "Explicar cómo el mapeo de puestos por clusters",
      "Diseñar un plan de capacitación utilizando las herramientas",
      "Calcular el ROI de un programa de capacitación",
    ],
    details: {
      date: "PRÓXIMAMENTE",
      location: "DELTA BY MARRIOTT, SAN JOSÉ AUROLA",
      duration: "8 HORAS",
      instructors: ["ENRIQUE MARGERY Y MAX SANTAMARÍA"],
      cost: "$199+ IVA",
    },
    image: "/Cursos.jpg",
  },
]

export function CourseGrid() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isLargeScreen = windowWidth >= 1024

  const getCardSize = (index: number) => {
    if (!isLargeScreen) return { size: "base", scale: 1 }
    const row = Math.floor(index / 3)
    if (row === 0 && index % 3 === 0) {
      return { size: "large", scale: 1.05 }
    } else if (row === 1 && index % 3 === 1) {
      return { size: "large", scale: 1.05 }
    } else {
      return { size: "base", scale: 1 }
    }
  }

  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-center mb-8">
          <span className="text-[#0D47A1] text-6xl font-bold tracking-tight">CURSOS</span>
        </h2>
        <h3 className="text-black text-center text-2xl font-bold mb-6 max-w-4xl mx-auto">
          Invierte en el desarrollo de tu equipo y mejora los resultados de tu empresa.
        </h3>
        <p className=" text-black text-center text-lg max-w-4xl mx-auto mb-16">
          Nuestros cursos están diseñados para fortalecer las habilidades de tus empleados y mejorar el desempeño de tu
          organización. Al invertir en la capacitación de tu equipo, estarás impulsando la innovación, la productividad
          y la satisfacción laboral.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-4 lg:gap-y-28">
          {courses.map((course, index) => {
            const { size, scale } = getCardSize(index)
            const isLarge = size === "large"
            return (
              <div key={course.id} className={`relative flex justify-center ${isLarge ? "lg:mb-8" : ""}`}>
                <div
                  className={`relative bg-black rounded-lg overflow-hidden
                      w-full max-w-[380px] transition-all duration-300`}
                  style={{
                    transform: isLarge ? `scale(${scale})` : "scale(1)",
                    transformOrigin: "top center",
                    height: isLarge ? "calc(100% + 2rem)" : "100%",
                  }}
                >
                  {/* Contenedor de la imagen superior */}
                  <div className="relative w-full h-48">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                  </div>

                  {/* Contenido */}
                  <div className="relative p-6">
                    {/* Encabezado */}
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-white mb-2">{course.title}</h2>
                      <p className="text-gray-300 text-sm">{course.description}</p>
                    </div>

                    {/* Temario */}
                    <div className="mb-4">
                      <h3 className="text-white font-semibold mb-2">Temario</h3>
                      <ul className="space-y-1">
                        {course.temario.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex gap-2">
                            <span className="text-white">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Objetivos */}
                    <div className="mb-4">
                      <h3 className="text-white font-semibold mb-2">Objetivos</h3>
                      <ul className="space-y-1">
                        {course.objectives.map((objective, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex gap-2">
                            <span className="text-white">•</span>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detalles del curso */}
                    <div className="mt-4">
                      <div className="space-y-1 text-sm text-gray-300 mb-4 bg-black">
                        <p className="flex gap-2">
                          <span className="text-white font-semibold">FECHA:</span>
                          {course.details.date}
                        </p>
                        <p className="flex gap-2">
                          <span className="text-white font-semibold">LUGAR:</span>
                          {course.details.location}
                        </p>
                        <p className="flex gap-2">
                          <span className="text-white font-semibold">DURACIÓN:</span>
                          {course.details.duration}
                        </p>
                        <p className="flex gap-2">
                          <span className="text-white font-semibold">INSTRUCTORES:</span>
                          {course.details.instructors.join(", ")}
                        </p>
                        <p className="flex gap-2">
                          <span className="text-white font-semibold">COSTO:</span>
                          {course.details.cost}
                        </p>
                      </div>

                      <button className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-100 transition-colors font-medium">
                        INSCRIBIRSE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

