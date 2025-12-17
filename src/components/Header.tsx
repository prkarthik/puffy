"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
	"Mattresses",
	"Smart Beds",
	"Bed Frames & More",
	"Bedding & More",
	"Reviews",
	"Puffy vs",
	"Support",
	"Stores",
];

export const Header = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isMenuOpen]);

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-[100] h-[80px] bg-white/85 dark:bg-black/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300">
				<div className="h-full w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
					{/* Left Section: Mobile Menu + Logo */}
					<div className="flex items-center gap-4">
						{/* Mobile Menu Toggle */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="lg:hidden w-10 h-10 -ml-2 flex items-center justify-center text-slate-900 dark:text-white"
							aria-label="Toggle Menu"
						>
							<i className={`fa-duotone ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
						</button>

						{/* Logo */}
						<Link href="/" className="flex-shrink-0 relative w-[100px] lg:w-[120px] h-[32px] lg:h-[40px]">
							<Image
								src="/images/Puffy_Logo.png"
								alt="Puffy Logo"
								fill
								className="object-contain"
								priority
							/>
						</Link>
					</div>

					{/* Navigation (Desktop) */}
					<nav className="hidden lg:flex items-center gap-8">
						{navLinks.map((item) => (
							<Link
								key={item}
								href="#"
								className="group relative text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-[#137cc1] dark:hover:text-blue-400 transition-colors py-2"
							>
								{item}
								<span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
							</Link>
						))}
					</nav>

					{/* Actions */}
					<div className="flex items-center gap-1 lg:gap-2">
						<button
							className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors group"
							aria-label="Search"
						>
							<i className="fa-duotone fa-magnifying-glass text-xl text-slate-900 dark:text-white group-hover:scale-110 transition-transform"></i>
						</button>

						{/* Theme Toggle */}
						<button
							onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
							className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors text-slate-900 dark:text-white"
							aria-label="Toggle Theme"
						>
							{mounted ? (
								resolvedTheme === "dark" ? (
									<i className="fa-duotone fa-sun text-xl"></i>
								) : (
									<i className="fa-duotone fa-moon text-xl"></i>
								)
							) : (
								<div className="w-5 h-5 bg-gray-200 dark:bg-white/20 rounded-full animate-pulse"></div>
							)}
						</button>

						<button
							className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors group relative"
							aria-label="View Cart"
						>
							<i className="fa-duotone fa-cart-shopping text-xl text-slate-900 dark:text-white group-hover:scale-110 transition-transform"></i>
							<span className="absolute top-2 right-2 h-2 w-2 bg-[#00cf86] rounded-full border border-white dark:border-black"></span>
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 z-[90] bg-white dark:bg-black pt-[80px] px-6 transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
					}`}
			>
				<nav className="flex flex-col gap-6 pt-6">
					{navLinks.map((item) => (
						<Link
							key={item}
							href="#"
							className="text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white border-b border-gray-100 dark:border-white/10 pb-4"
							onClick={() => setIsMenuOpen(false)}
						>
							{item}
						</Link>
					))}
					<div className="flex flex-col gap-4 mt-4">
						<Link href="#" className="flex items-center gap-3 text-gray-900 dark:text-white font-bold">
							<i className="fa-duotone fa-user text-xl"></i>
							<span>My Account</span>
						</Link>
						<Link href="#" className="flex items-center gap-3 text-gray-900 dark:text-white font-bold">
							<i className="fa-duotone fa-phone text-xl"></i>
							<span>Contact Support</span>
						</Link>
					</div>
				</nav>
			</div>
		</>
	);
};
