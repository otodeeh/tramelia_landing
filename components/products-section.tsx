import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    category: "Costura Criativa",
    title: "Jogo Americano",
    description: "Jogo americano artesanal com acabamento delicado",
    image: "/handmade-placemat-table-setting.jpg",
  },
  {
    id: 2,
    category: "Costura Criativa",
    title: "Capa de Almofada",
    description: "Capas de almofada personalizadas e confortáveis",
    image: "/decorative-pillow-cover-handmade.jpg",
  },
  {
    id: 3,
    category: "Crochê",
    title: "Amigurumi",
    description: "Amigurumis fofos e personalizados",
    image: "/cute-crochet-amigurumi-toy.jpg",
  },
  {
    id: 4,
    category: "Bordado Ponto Cruz",
    title: "Caminho de Mesa",
    description: "Caminhos de mesa com bordados em ponto cruz",
    image: "/cross-stitch-table-runner.jpg",
  },
  {
    id: 5,
    category: "Bordado Ponto Cruz",
    title: "Pano de Prato",
    description: "Panos de prato decorados com bordados delicados",
    image: "/embroidered-kitchen-towel.jpg",
  },
  {
    id: 6,
    category: "Bordado Livre",
    title: "Chaveiros e Marcadores",
    description: "Chaveiros e marcadores de livro bordados",
    image: "/embroidered-keychain-bookmark.jpg",
  },
  {
    id: 7,
    category: "Bordado Livre",
    title: "Porta-Alianças",
    description: "Porta-alianças e porta maternidade personalizados",
    image: "/embroidered-ring-pillow-wedding.jpg",
  },
  {
    id: 8,
    category: "Bordado Livre",
    title: "Guirlandas e Quadros",
    description: "Guirlandas e quadros decorativos bordados",
    image: "/embroidered-decorative-wreath-frame.jpg",
  },
]

export function ProductsSection() {
  return (
    <section id="produtos" className="py-20 bg-[#f5e6d3]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-brand-title font-bold text-[#af4c0f] text-center mb-4">
            Nossos Produtos
          </h2>
          <div className="w-24 h-1 bg-[#af4c0f] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
