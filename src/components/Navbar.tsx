export function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-end space-x-6 text-sm">
        <a href="#" className="hover:underline">INICIO</a>
        <a href="#" className="hover:underline">CURSOS</a>
        <a href="#" className="hover:underline">INSTRUCTORES</a>
        <a href="#" className="hover:underline">TESTIMONIOS</a>
        <a href="#" className="hover:underline">CONTACTO</a>
      </div>
    </nav>
  );
}