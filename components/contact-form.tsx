"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Nome
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Seu nome"
          className="border-[#af4c0f]/30 focus:border-[#af4c0f]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="seu@email.com"
          className="border-[#af4c0f]/30 focus:border-[#af4c0f]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensagem
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Conte-nos sobre o que você procura..."
          rows={5}
          className="border-[#af4c0f]/30 focus:border-[#af4c0f] resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#af4c0f] hover:bg-[#8d3d0c] text-white py-6 text-lg"
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  )
}
