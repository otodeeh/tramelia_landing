import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Os amigurumis são simplesmente perfeitos! Minha filha adorou o ursinho.",
  },
  {
    id: 2,
    name: "João Santos",
    text: "Bordado lindo e delicado. Presenteei minha mãe e ela ficou emocionada.",
  },
  {
    id: 3,
    name: "Ana Costa",
    text: "Qualidade excepcional! Cada detalhe é feito com muito carinho.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#af4c0f] text-center mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="w-24 h-1 bg-[#af4c0f] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2 border-[#f5e6d3] shadow-lg">
                <CardContent className="p-8 text-center space-y-4">
                  <Quote className="h-10 w-10 text-[#af4c0f] mx-auto opacity-50" />
                  <p className="text-lg text-gray-700 font-[family-name:var(--font-dancing)] leading-relaxed">
                    {testimonial.text}
                  </p>
                  <p className="text-sm font-semibold text-[#af4c0f]">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
