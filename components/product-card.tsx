"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  description: string
  image: string
  category?: string
}

export function ProductCard({ title, description, image, category }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-[#af4c0f]/80 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-white text-center px-4 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      <CardContent className="p-6 bg-white">
        {category && <p className="text-xs font-brand-subtitle text-[#af4c0f]/70 text-center mb-2">{category}</p>}
        <h3 className="text-xl font-semibold text-[#af4c0f] text-center">{title}</h3>
      </CardContent>
    </Card>
  )
}
