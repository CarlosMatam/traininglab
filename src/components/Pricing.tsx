import React from "react";

const plans = [
  {
    title: "PRECIO REGULAR",
    price: "$199",
    description: "Precio regular por la compra de un curso + IVA",
    highlight: "text-blue-400",
  },
  {
    title: "PRECIO PREVENTA",
    price: "$185,99",
    description: "Precio por la compra de un curso durante la preventa",
    highlight: "text-blue-600",
  },
  {
    title: "DOS CURSOS - PREVENTA",
    price: "$175,99",
    description: "Precio unitario por la compra de dos cursos en preventa + IVA",
    highlight: "text-blue-400",
  },
];

export function Pricing() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-12">Planes</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg shadow-lg p-6 bg-gray-100 ${index === 1 ? '-mt-6' : ''}`}
          >
            <h3 className="text-gray-700 font-semibold">{plan.title}</h3>
            <p className={`text-4xl font-bold ${plan.highlight} mt-2`}>
              {plan.price}
            </p>
            <p className="text-gray-600 mt-2">{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
