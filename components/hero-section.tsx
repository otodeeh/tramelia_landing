import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-[#af4c0f] pt-24">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="TRAMÉLIA artesanato"
              width={500}
              height={500}
              className="w-full max-w-md md:max-w-lg h-auto"
              priority
            />
          </div>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Cada peça é única, criada artesanalmente com dedicação e amor aos detalhes
          </p>

          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#af4c0f] hover:bg-[#f5e6d3] text-lg px-8 py-6 rounded-full font-medium transition-all hover:scale-105"
            >
              <a href="#produtos">
                Ver Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
