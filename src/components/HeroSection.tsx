export function HeroSection() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(250, 250, 250, 0.8), rgba(250, 250, 250, 0.8)), url(${process.env.NEXT_PUBLIC_VERCEL_URL ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5llxRZcb34knXshl7lqUAuzbdUd1Rm.png" : "/placeholder.svg"})`,
      }}
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

