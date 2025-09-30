import Link from "next/link";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-[#af4c0f] text-white py-12">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-3 gap-8 mb-8">
						{/* About */}
						<div>
							<h3 className="text-xl font-semibold mb-4">TRAMÉLIA</h3>
							<p className="text-white/90 text-sm leading-relaxed">
								Bordados e amigurumis artesanais feitos com carinho e dedicação.
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
							<nav className="flex flex-col gap-2">
								<Link
									href="#inicio"
									className="text-white/90 hover:text-white text-sm transition-colors"
								>
									Início
								</Link>
								<Link
									href="#sobre"
									className="text-white/90 hover:text-white text-sm transition-colors"
								>
									Sobre
								</Link>
								<Link
									href="#produtos"
									className="text-white/90 hover:text-white text-sm transition-colors"
								>
									Produtos
								</Link>
								<Link
									href="#contato"
									className="text-white/90 hover:text-white text-sm transition-colors"
								>
									Contato
								</Link>
							</nav>
						</div>

						{/* Contact Info */}
						<div>
							<h3 className="text-xl font-semibold mb-4">Contato</h3>
							<div className="space-y-2 text-sm text-white/90">
								<p>WhatsApp: (35) 92000-5263</p>
								<p>Email: adjessica99@gmail.com</p>
								<p>Instagram: @tramelia_artesanato</p>
							</div>
						</div>
					</div>

					<div className="border-t border-white/20 pt-8 text-center">
						<p className="text-white/80 text-sm">
							© {currentYear} TRAMÉLIA. Todos os direitos reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
