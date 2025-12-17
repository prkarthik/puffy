"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const awardFeatures = [
	{
		icon: "fa-duotone fa-snowflake",
		title: "Cooling Cloud™",
		subtitle: "Temperature regulation",
	},
	{
		icon: "fa-duotone fa-shield-heart",
		title: "Lifetime Warranty",
		subtitle: "Guaranteed forever",
	},
	{
		icon: "fa-duotone fa-cloud",
		title: "BEST FOR COMFORT",
		subtitle: "(14 Awards)",
	},
	{
		icon: "fa-duotone fa-spa",
		title: "BEST FOR BACK PAIN",
		subtitle: "(6 Awards)",
	},
	{
		icon: "fa-duotone fa-box-open",
		title: "BEST IN BOX",
		subtitle: "(4 Awards)",
	},
	{
		icon: "fa-duotone fa-gem",
		title: "BEST LUXURY & MATERIALS", // Shortened slightly for mobile fit if needed
		subtitle: "(16 Awards)",
	},
	{
		icon: "fa-duotone fa-users",
		title: "BEST FOR SLEEPER TYPES",
		subtitle: "(9 Awards)",
	},
	{
		icon: "fa-duotone fa-trophy",
		title: "BEST OVERALL",
		subtitle: "(7 Awards)",
	},
];

export const Hero = () => {
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [currentAwardIndex, setCurrentAwardIndex] = useState(0);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentAwardIndex((prev) => (prev + 1) % awardFeatures.length);
		}, 3500); // 3.5s per slide to match animation duration + pause
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="w-full lg:w-[62%] relative h-[50vh] lg:h-auto min-h-[400px] lg:min-h-0 bg-neutral-900 group overflow-hidden">
			{/* Background Image Layer */}
			<div
				className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
				style={{
					backgroundImage: `url('${mounted && resolvedTheme === "light"
						? "/images/Puffy-Lux-Hybrid-light.jpeg"
						: "/images/Puffy-Lux-Hybrid.jpeg"
						}')`,
				}}
				aria-label="Puffy Lux Hybrid Mattress Background"
			></div>

			<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-30"></div>

			{/* Title & Reviews Overlay */}
			<div className="absolute top-20 left-6 lg:top-10 lg:left-10 z-50 max-w-lg">
				<h1 className="text-3xl lg:text-4xl font-extrabold leading-[1.1] mb-2 tracking-tight drop-shadow-md bg-gradient-to-b from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] text-transparent bg-clip-text pb-1">
					The Puffy Lux Hybrid
				</h1>
				<div className="flex items-center gap-2 group cursor-pointer mt-2">
					<div className="flex gap-0.5">
						{[1, 2, 3, 4, 5].map((star) => (
							<i
								key={star}
								className="fa-solid fa-star text-[20px] bg-gradient-to-b from-[#F2E59E] via-[#DBC065] to-[#A07727] text-transparent bg-clip-text"
							></i>
						))}
					</div>
					<span className="text-slate-900 dark:text-white/90 group-hover:text-black dark:group-hover:text-white transition-colors text-xs lg:text-sm font-bold underline decoration-slate-900/30 dark:decoration-white/30 underline-offset-4 shadow-black/50 drop-shadow-sm">
						10,000+ Verified Reviews
					</span>
				</div>
				<p className="mt-3 text-slate-900 dark:text-white/90 text-sm lg:text-base leading-relaxed max-w-md drop-shadow-md font-medium">
					Experience the cloud-like comfort of America&#39;s most awarded luxury
					mattress. Designed for optimal cooling and total pressure relief.
				</p>
			</div>

			<div className="absolute top-4 left-4 lg:hidden z-40">
				<span className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-xs font-bold text-white shadow-lg">
					<i className="fa-duotone fa-award text-[14px]"></i>
					Best Seller
				</span>
			</div>

			{/* Feature Glass Cards */}
			<div className="absolute bottom-6 left-4 right-0 z-50">
				{/* Desktop View (Grid/Flex) */}
				<div className="hidden lg:flex flex-wrap gap-2 lg:gap-x-4 lg:gap-y-2 max-w-full px-10">
					{awardFeatures.map((feature, index) => (
						<div
							key={index}
							className="backdrop-blur-md bg-[#137cc1]/70 dark:bg-black/30 border border-white/20 rounded-xl p-2.5 flex items-center gap-2.5 shadow-lg hover:bg-[#137cc1]/80 dark:hover:bg-black/40 transition-colors cursor-default"
						>
							<div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
								<i className={`${feature.icon} text-white text-xs`}></i>
							</div>
							<div className="flex flex-row items-baseline gap-1.5">
								<h4 className="bg-gradient-to-r from-white via-white to-white dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] text-transparent bg-clip-text text-[11px] font-bold leading-tight uppercase tracking-wide whitespace-nowrap">
									{feature.title}
								</h4>
								<p className="text-white/70 text-[10px] leading-tight font-medium whitespace-nowrap">
									{feature.subtitle}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Mobile View (Carousel) */}
				<div className="lg:hidden relative h-12 w-full px-4 overflow-hidden">
					{awardFeatures.map((feature, index) => (
						index === currentAwardIndex && (
							<div
								key={index}
								className="absolute left-4 top-0 right-4 animate-award-mount backdrop-blur-md bg-[#137cc1]/70 dark:bg-black/40 border border-white/20 rounded-xl p-2 flex items-center gap-3 shadow-lg"
							>
								<div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
									<i className={`${feature.icon} text-white text-sm`}></i>
								</div>
								<div className="flex flex-col">
									<h4 className="bg-gradient-to-r from-white via-white to-white dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] text-transparent bg-clip-text text-[11px] font-bold leading-tight uppercase tracking-wide whitespace-nowrap">
										{feature.title}
									</h4>
									<p className="text-white/90 text-[10px] leading-tight font-medium whitespace-nowrap">
										{feature.subtitle}
									</p>
								</div>
							</div>
						)
					))}
				</div>
			</div>
		</div>
	);
};
