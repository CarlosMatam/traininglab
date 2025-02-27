import Image from "next/image"
export function Partners() {
  const partners = [
    { name: "Deinsa Global", url: "/DeinsaGlobal.jpg" },
    { name: "LapLazaDigital", url: "/LaPlaza.jpg" },
    { name: "Open Institute", url: "/OpenInstitute.jpg" },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-6xl font-bold text-[#145DA0] mb-8">Partners</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partner, index) => (

          <Image
            key={index}
            src={partner.url}
            alt={partner.name}
            width={160} // Equivalente a w-40 (40 * 4px)
            height={96} // Equivalente a h-24 (24 * 4px)
            className="w-40 h-24"
           
          />
        ))}
      </div>
    </section>
  );
}
