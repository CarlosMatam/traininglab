"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { db, collection, getDocs } from "../lib/firebaseConfig"

interface ExpertFromFirebase {
  id: string
  nombre: string
  puesto: string
  descripcion: string
  Imagen?: string  // Make optional since some experts might not have an image
}

interface Expert extends ExpertFromFirebase {
  image: string  // This will always have a value (either from DB or fallback)
}

const FALLBACK_IMAGE = "/person.jpg"

export function ExpertCarousel() {
  const [experts, setExperts] = useState<Expert[]>([])
  const [currentExpert, setCurrentExpert] = useState(0)

  useEffect(() => {
    const fetchExperts = async () => {
      const expertsCollection = collection(db, "socios")
      const expertsSnapshot = await getDocs(expertsCollection)
      const expertsList = expertsSnapshot.docs.map((doc) => {
        const data = doc.data() as ExpertFromFirebase
        return {
          ...data,
          id: doc.id,
          image: data.Imagen || FALLBACK_IMAGE, 
        }
      })
      setExperts(expertsList)
    }

    fetchExperts()
  }, [])

  const nextExpert = () => {
    setCurrentExpert((prev) => (prev + 1) % experts.length)
  }

  const previousExpert = () => {
    setCurrentExpert((prev) => (prev - 1 + experts.length) % experts.length)
  }

  if (experts.length === 0) {
    return <div>Loading...</div>
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
                alt="expertos"
                width={300}
                height={400}
                className="rounded-lg object-cover shadow-md"
              />
            </div>

            {/* Información del experto */}
            <div className="text-left">
              <h3 className="text-2xl text-black font-bold mb-2">{experts[currentExpert].nombre}</h3>
              <p className="text-gray-700 font-medium mb-1">{experts[currentExpert].puesto}</p>
              <p className="text-gray-700 leading-relaxed text-justify">{experts[currentExpert].descripcion}</p>
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