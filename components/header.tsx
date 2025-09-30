"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ href: "#inicio", label: "Início" },
		{ href: "#sobre", label: "Sobre" },
		{ href: "#produtos", label: "Produtos" },
		{ href: "#contato", label: "Contato" }
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-[#af4c0f] shadow-lg" : "bg-[#af4c0f]"
			}`}
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-center">
					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-white hover:text-[#f5e6d3] transition-colors text-sm font-medium tracking-wide"
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden text-white hover:bg-white/10"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</Button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-white hover:text-[#f5e6d3] transition-colors text-sm font-medium"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</nav>
				)}
			</div>
		</header>
	);
}
