"use client"

import { useState, useEffect } from "react"
import { db, collection, getDocs } from "../lib/firebaseConfig"

interface Plan {
  id: string
  titulo: string
  precio: string
  detalle: string
}

export function Pricing() {
  const [plans, setPlans] = useState<Plan[]>([])

  useEffect(() => {
    const fetchPlans = async () => {
      const plansCollection = collection(db, "precios")
      const plansSnapshot = await getDocs(plansCollection)
      const plansList = plansSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Plan[]
      setPlans(plansList)
    }

    fetchPlans()
  }, [])

  const getHighlight = (index: number) => {
    switch (index) {
      case 0:
        return "text-blue-400"
      case 1:
        return "text-blue-600"
      case 2:
        return "text-blue-400"
      default:
        return "text-blue-400"
    }
  }

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-12">Planes</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div key={plan.id} className={`border rounded-lg shadow-lg p-6 bg-gray-100 ${index === 1 ? "-mt-6" : ""}`}>
            <h3 className="text-gray-700 font-semibold">{plan.titulo}</h3>
            <p className={`text-4xl font-bold ${getHighlight(index)} mt-2`}>₡{plan.precio}</p>
            <p className="text-gray-600 mt-2">{plan.detalle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

