"use client";

import { useEffect, useState } from "react";

export default function FloatingSupport() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!isVisible) return null;

	return (
		<div className="fixed bottom-6 left-6 z-[100] animate-fade-in-up">
			<div className="backdrop-blur-md bg-white dark:bg-black/60 border border-gray-100 dark:border-white/10 rounded-full py-2 px-4 shadow-2xl flex items-center gap-4 transition-all hover:bg-gray-50 dark:hover:bg-black/70 group">
				<div className="relative">
					<div className="h-10 w-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
						<i className="fa-duotone fa-user-headset text-gray-700 dark:text-white text-lg"></i>
					</div>
					<div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-[#00cf86] rounded-full border-2 border-white dark:border-black"></div>
				</div>

				<div className="flex flex-col">
					<p className="text-gray-400 dark:text-white dark:opacity-80 text-[10px] font-bold uppercase tracking-wider leading-tight mb-0.5">
						Need help?
					</p>
					<div className="flex items-center gap-3">
						<a
							href="tel:+18336374319"
							className="text-gray-900 dark:text-white text-xs font-bold hover:text-black dark:hover:text-[#fff4c0] transition-colors flex items-center gap-1.5"
						>
							<i className="fa-duotone fa-phone text-[10px]"></i>
							Call
						</a>
						<span className="w-px h-3 bg-gray-200 dark:bg-white/20"></span>
						<button className="text-gray-900 dark:text-white text-xs font-bold hover:text-black dark:hover:text-[#fff4c0] transition-colors flex items-center gap-1.5">
							<i className="fa-duotone fa-comment text-[10px]"></i>
							Chat
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
