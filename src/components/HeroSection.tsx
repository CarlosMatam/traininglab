export function HeroSection() {
  return (
    <section
    id="inicio" className="relative min-h-[120vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: ` url('/Hero.jpg')`,      }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white text-left leading-tight tracking-wide max-w-4xl px-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        Potencia tu Impacto:
        <br />
        Herramientas
        <br />
        Esenciales para
        <br />
        Líderes Exitosos
      </h1>
    </section>
  )
}

