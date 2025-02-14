import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-[#0D47A1]  py-6">
      <div className="container mx-auto px-4 flex justify-end space-x-8 pr-64">
        <Link href="#" className="text-xs tracking-wide hover:text-gray-200 transition-colors">
          INICIO
        </Link>
        <Link href="#" className="text-xs  tracking-wide hover:text-gray-200 transition-colors">
          CURSOS
        </Link>
        <Link href="#" className="text-xs tracking-wide hover:text-gray-200 transition-colors">
          INSTRUCTORES
        </Link>
        <Link href="#" className="text-xs tracking-wide hover:text-gray-200 transition-colors">
          TESTIMONIOS
        </Link>
        <Link href="#" className="text-xs tracking-wide hover:text-gray-200 transition-colors">
          CONTACTO
        </Link>
      </div>
    </nav>
  )
}

