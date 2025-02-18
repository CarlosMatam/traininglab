"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { db, collection, getDocs } from "../lib/firebaseConfig"

const courseImages = ["/Cursos.jpg", "/Cursos1.jpg", "/Cursos2.jpg", "/Cursos3.jpg", "/Cursos4.jpg",, "/Cursos5.jpg", "/Cursos6.jpg"]

interface Course {
  id: string
  titulo: string
  subtitulo: string
  temario: string[]
  objetivos: string[]
  detalles: string[]
  image: string
}

export function CourseGrid() {
  const [courses, setCourses] = useState<Course[]>([])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(db, "cursos")
      const coursesSnapshot = await getDocs(coursesCollection)
      const coursesList = coursesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        image: courseImages[Math.floor(Math.random() * courseImages.length)],
      })) as Course[]
      setCourses(coursesList)
    }

    fetchCourses()

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
        <p className="text-black text-center text-lg max-w-4xl mx-auto mb-16">
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
                      alt={course.titulo}
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
                      <h2 className="text-xl font-bold text-white mb-2">{course.titulo}</h2>
                      <p className="text-gray-300 text-sm">{course.subtitulo}</p>
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
                        {course.objetivos.map((objective, idx) => (
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
                        {course.detalles.map((detail, idx) => {
                          const [key, value] = detail.split(":")
                          return (
                            <p key={idx} className="flex gap-2">
                              <span className="text-white font-semibold">{key}:</span>
                              {value}
                            </p>
                          )
                        })}
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

