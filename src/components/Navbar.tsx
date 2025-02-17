import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#145DA0] py-6 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="ml-20">
          <Image 
            src="/Logo.jpg" 
            alt="The Training Lab Logo" 
            width={120} // Ajusta el tamaño según necesites
            height={60} 
            priority
          />
        </div>

        {/* Menú de navegación */}
        <div className="flex space-x-8 pr-32">
          <a href="#inicio" className="text-xs text-white tracking-wide hover:text-gray-200 transition-colors cursor-pointer">
            INICIO
          </a>
          <a href="#cursos" className="text-xs text-white tracking-wide hover:text-gray-200 transition-colors cursor-pointer">
            CURSOS
          </a>
          <a href="#instructores" className="text-xs text-white tracking-wide hover:text-gray-200 transition-colors cursor-pointer">
            INSTRUCTORES
          </a>
          <a href="#testimonios" className="text-xs text-white tracking-wide hover:text-gray-200 transition-colors cursor-pointer">
            TESTIMONIOS
          </a>
          <a href="#contacto" className="text-xs text-white tracking-wide hover:text-gray-200 transition-colors cursor-pointer">
            CONTACTO
          </a>
        </div>
      </div>
    </nav>
  )
}
