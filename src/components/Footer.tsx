import { FaFacebook, FaInstagram } from "react-icons/fa";

export function ContactFooter() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">CONTÁCTENOS</h2>
        <p className="mt-2 text-gray-400 max-w-lg">
          <span className="font-semibold">¿Listo para impulsar tu carrera?</span> Contáctanos hoy mismo para conocer más sobre nuestros programas y descubre cómo podemos ayudarte a alcanzar tus objetivos.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div>
            <h3 className="font-semibold">Dirección Ejecutiva:</h3>
            <p className="text-gray-400">(+506) 8391-6006</p>
            <p className="text-gray-400">emargery@deinsaglobal.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Departamento de Ventas:</h3>
            <p className="text-gray-400">(+506) 8415-8317</p>
            <p className="text-gray-400">educacioncontinua@deinsaglobal.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Soporte al Cliente:</h3>
            <p className="text-gray-400">(+506) 7300-0120</p>
            <p className="text-gray-400">capitalhumano@deinsaglobal.com</p>
          </div>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <a
            href="https://www.facebook.com/share/19zf7TphcW/"
            className="text-white hover:text-gray-400 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/deinsaglobal_/"
            className="text-white hover:text-gray-400 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-6">© 2018 All rights reserved.</p>
      </div>
    </footer>
  );
}
