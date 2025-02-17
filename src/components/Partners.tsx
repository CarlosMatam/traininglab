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
            <img
              key={index}
              src={partner.url}
              alt={partner.name}
              className="w-40 h-24"
            />
          ))}
        </div>
      </section>
    );
  }
  