import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-brand-title font-bold text-[#af4c0f] text-center mb-4">
            Sobre a TRAMÉLIA
          </h2>
          <div className="w-24 h-1 bg-[#af4c0f] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A TRAMÉLIA nasceu do amor pelo artesanato e pela vontade de criar peças únicas que transmitem carinho e
                aconchego. Cada bordado e amigurumi é feito à mão, com atenção aos mínimos detalhes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Acreditamos que o feito à mão carrega uma energia especial, transformando fios e tecidos em verdadeiras
                obras de arte que aquecem o coração e decoram com delicadeza.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada peça conta uma história e é criada com dedicação para fazer parte da sua vida ou presentear alguém
                especial.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/artisan-hands-embroidering-delicate-fabric-with-co.jpg"
                alt="Artesã bordando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
