import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

export function ContactSection() {
	return (
		<section id="contato" className="py-20 bg-[#f5e6d3]">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-[#af4c0f] text-center mb-4">
						Entre em Contato
					</h2>
					<div className="w-24 h-1 bg-[#af4c0f] mx-auto mb-12"></div>

					<div className="grid md:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div>
							<ContactForm />
						</div>

						{/* Social Links */}
						<div className="flex flex-col flex-1 space-y-8">
							<div>
								<h3 className="text-2xl font-semibold text-[#af4c0f] mb-6">
									Fale conosco
								</h3>
								<p className="text-gray-700 leading-relaxed mb-8">
									Estamos prontos para criar a peça perfeita para você! Entre em
									contato através do formulário ou pelas nossas redes sociais.
								</p>
							</div>

							<div className="mt-auto  space-y-4">
								<Button
									asChild
									className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6"
								>
									<a
										href="https://wa.me/5535920005263"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-3"
									>
										<MessageCircle className="h-6 w-6" />
										WhatsApp
									</a>
								</Button>

								<Button
									asChild
									className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white text-lg py-6"
								>
									<a
										href="https://instagram.com/tramelia_artesanato"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-3"
									>
										<Instagram className="h-6 w-6" />
										Instagram
									</a>
								</Button>
							</div>

							{/* <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-[#af4c0f]">Horário de atendimento:</strong>
                  <br />
                  Segunda a Sexta: 9h às 18h
                  <br />
                  Sábado: 9h às 13h
                </p>
              </div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
