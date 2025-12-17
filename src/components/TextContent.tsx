"use client";

import { useState } from "react";

const sizeOptions = [
	{ label: "Twin", price: 1499, salePrice: 1199 },
	{ label: "Twin XL", price: 1549, salePrice: 1249 },
	{ label: "Full", price: 1699, salePrice: 1399 },
	{ label: "Queen", price: 1799, salePrice: 1499 }, // Matches original
	{ label: "King", price: 1999, salePrice: 1699 },
	{ label: "Cal King", price: 1999, salePrice: 1699 },
	{ label: "Split Head Queen", price: 2099, salePrice: 1799 },
	{ label: "Split Head King", price: 2399, salePrice: 2099 },
	{ label: "Split King", price: 2299, salePrice: 1999 },
];

export const TextContent = () => {
	const [selectedSize, setSelectedSize] = useState(sizeOptions[3]); // Default to Queen
	const [selectedModel, setSelectedModel] = useState<'lux' | 'royal'>('lux');
	const [quantity, setQuantity] = useState(1);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const modelPriceDiff = selectedModel === 'royal' ? 340 : 0;

	// Calculate final prices
	const finalPrice = selectedSize.price + modelPriceDiff;
	const finalSalePrice = selectedSize.salePrice + modelPriceDiff;
	const savings = finalPrice - finalSalePrice;

	return (
		<div className="w-full lg:w-[38%] bg-[#EFEFEF] dark:bg-background-dark border-l border-gray-100 dark:border-[#283039] flex flex-col transition-colors duration-300">
			<div className="flex-1 px-5 py-5 lg:px-9 lg:py-6 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 w-full">
				<div className="flex items-center gap-3 mb-6">
					<div className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-[#1c2127] border border-gray-100 dark:border-[#283039] px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase">
						<i className="fa-duotone fa-award text-[16px]"></i>
						Award-Winning Comfort
					</div>
					<span className="text-gray-400 dark:text-[#9dabb9] text-xs font-semibold tracking-wider uppercase">
						Luxury Hybrid Series
					</span>
				</div>
				{/* Title and Reviews moved to Hero overlay per user request */}
				{/* Description also moved to Hero overlay per user request */}

				{/* Model Selection Section */}
				<div className="grid grid-cols-2 gap-2 mb-6">
					{/* Lux Option */}
					<div
						onClick={() => setSelectedModel('lux')}
						className={`cursor-pointer rounded-lg border-[1.5px] p-2 transition-all relative overflow-hidden group flex flex-col items-center text-center
                ${selectedModel === 'lux' ? 'border-primary bg-primary/5 dark:bg-[#FBF1E3]/5' : 'border-gray-100 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] hover:border-gray-200 dark:hover:border-[#596775]'}
            `}>
						<div className="w-full flex justify-between items-start mb-1">
							<div className={`size-4 rounded-full flex items-center justify-center transition-colors ${selectedModel === 'lux' ? 'bg-[#008f5d]' : 'border border-gray-200 dark:border-[#596775]'}`}>
								{selectedModel === 'lux' && <i className="fa-duotone fa-check text-[10px] text-white font-bold"></i>}
							</div>
						</div>
						<div className="h-14 w-full relative mb-1 flex justify-center">
							<img
								src="/images/upgrade-lux_2025-11-27-22-16-33.webp"
								alt="Puffy Lux Hybrid"
								className="object-contain h-full w-[60%]"
							/>
						</div>
						<div className="space-y-0.5 w-full">
							<div className="text-[12px] font-extrabold text-gray-900 dark:text-white leading-tight">
								Puffy <span className="font-extrabold">LUX</span> <span className="uppercase text-[9px] border border-gray-300 dark:border-[#9dabb9] px-1 rounded text-gray-400 dark:text-[#9dabb9] font-bold">Hybrid</span>
							</div>
							<div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-[#9dabb9] font-bold whitespace-nowrap">
								<span className="flex items-center gap-0.5"><i className="fa-duotone fa-check text-[#008f5d] text-[10px]"></i> 8 Layers</span>
								<span className="flex items-center gap-0.5"><i className="fa-duotone fa-check text-[#008f5d] text-[10px]"></i> Medium-Plush</span>
							</div>
						</div>
					</div>

					{/* Royal Option */}
					<div
						onClick={() => setSelectedModel('royal')}
						className={`cursor-pointer rounded-lg border-[1.5px] p-2 transition-all relative overflow-hidden group flex flex-col items-center text-center
                ${selectedModel === 'royal' ? 'border-primary bg-primary/5 dark:bg-[#FBF1E3]/5' : 'border-gray-100 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] hover:border-gray-200 dark:hover:border-[#596775]'}
            `}>
						<div className="absolute bottom-0 right-0 bg-gradient-to-r from-primary to-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-tl-lg z-10 uppercase tracking-wide">
							Premium Choice
						</div>
						<div className="w-full flex justify-between items-start mb-1">
							<div className={`size-4 rounded-full flex items-center justify-center transition-colors ${selectedModel === 'royal' ? 'bg-[#008f5d]' : 'border border-gray-200 dark:border-[#596775]'}`}>
								{selectedModel === 'royal' && <i className="fa-duotone fa-check text-[10px] text-white font-bold"></i>}
							</div>
							<span className="text-gray-900 dark:text-white text-[10px] font-bold">+ $340</span>
						</div>
						<div className="h-14 w-full relative mb-1 flex justify-center">
							<img
								src="/images/upgrade-royal_2025-11-27-22-16-33.webp"
								alt="Puffy Royal Hybrid"
								className="object-contain h-full w-[60%]"
							/>
						</div>
						<div className="space-y-0.5 w-full pb-3">
							<div className="text-[12px] font-extrabold text-gray-900 dark:text-white leading-tight">
								Puffy <span className="font-extrabold">ROYAL</span> <span className="uppercase text-[9px] border border-gray-300 dark:border-[#9dabb9] px-1 rounded text-gray-400 dark:text-[#9dabb9] font-bold">Hybrid</span>
							</div>
							<div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-[#9dabb9] font-bold whitespace-nowrap">
								<span className="flex items-center gap-0.5"><i className="fa-duotone fa-check text-[#008f5d] text-[10px]"></i> 10 Layers</span>
								<span className="flex items-center gap-0.5"><i className="fa-duotone fa-check text-[#008f5d] text-[10px]"></i> Ultra-Plush</span>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-6 p-6 rounded-xl bg-white dark:bg-[#1c2127] border border-gray-100 dark:border-[#283039] shadow-2xl shadow-gray-200/50 dark:shadow-black/20 transition-colors">
					<div>
						<div className="flex justify-between items-baseline mb-3">
							<label className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
								Select Size
							</label>
							<span className="text-xs text-primary font-bold cursor-pointer hover:underline">
								Size Guide
							</span>
						</div>
						<div className="relative z-20">
							{/* Dropdown Trigger */}
							<button
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
								className="w-full h-[48px] bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#3b4754] rounded-lg px-4 flex justify-between items-center text-gray-900 dark:text-white transition-colors hover:border-gray-300 dark:hover:border-[#596775]"
							>
								<span className="text-[18px] font-bold">{selectedSize.label}</span>
								<i className={`fa-duotone fa-chevron-down text-gray-400 dark:text-[#9dabb9] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
							</button>

							{/* Dropdown Menu */}
							{isDropdownOpen && (
								<div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#3b4754] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[240px] overflow-y-auto">
									{sizeOptions.map((option) => {
										const isSelected = selectedSize.label === option.label;
										return (
											<button
												key={option.label}
												onClick={() => {
													setSelectedSize(option);
													setIsDropdownOpen(false);
												}}
												className={`group h-[48px] pl-3 pr-4 text-[16px] font-bold transition-all relative flex items-center justify-between w-full
                          ${isSelected ? "text-gray-900 dark:text-white bg-gray-50 dark:bg-[#232931]" : "text-gray-500 dark:text-[#9dabb9] hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#232931]"}
                        `}
											>
												{/* Left Border Indicator */}
												<div className={`absolute left-0 top-0 bottom-0 w-[5px] transition-all
                          ${isSelected
														? "bg-gradient-to-b from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727]"
														: "bg-gray-200 dark:bg-[#3b4754] group-hover:bg-blue-600 dark:group-hover:bg-blue-900"
													}
                        `}></div>

												<span>{option.label}</span>
												<span className="text-gray-500 dark:text-[#9dabb9] group-hover:text-gray-900 dark:group-hover:text-white font-medium">
													${(option.salePrice + modelPriceDiff).toLocaleString()}
												</span>
											</button>
										);
									})}
								</div>
							)}
						</div>
					</div>
					<div className="flex items-end justify-between border-t border-gray-100 dark:border-[#283039] pt-5">
						<div className="flex flex-col">
							<span className="text-gray-400 dark:text-[#9dabb9] text-sm font-medium line-through mb-1">
								${finalPrice.toLocaleString()}
							</span>
							<div className="flex items-center gap-3">
								<span className="text-gray-900 dark:text-white text-3xl font-black tracking-tight">
									${finalSalePrice.toLocaleString()}
								</span>
								<span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
									Save ${savings.toLocaleString()}
								</span>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						{/* Quantity Counter */}
						<div className="flex items-center justify-between bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#3b4754] rounded-lg p-3 h-12 transition-colors">
							<span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider pl-2">Quantity</span>
							<div className="flex items-center gap-4">
								<button
									onClick={() => setQuantity(Math.max(1, quantity - 1))}
									className="text-gray-400 dark:text-[#9dabb9] hover:text-black dark:hover:text-white transition-colors"
								>
									<i className="fa-solid fa-minus text-sm"></i>
								</button>
								<span className="text-gray-900 dark:text-white font-bold text-lg w-4 text-center">{quantity}</span>
								<button
									onClick={() => setQuantity(quantity + 1)}
									className="text-gray-400 dark:text-[#9dabb9] hover:text-black dark:hover:text-white transition-colors"
								>
									<i className="fa-solid fa-plus text-sm"></i>
								</button>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-3">
							<button className="flex-1 h-14 bg-gradient-to-r from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] hover:brightness-110 active:scale-[0.99] transition-all rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 dark:shadow-yellow-900/20 group cursor-pointer text-white dark:text-[#1c2127]">
								<span className="text-lg font-black tracking-wide uppercase">
									Buy Now
								</span>
								<i className="fa-duotone fa-credit-card text-lg"></i>
							</button>

							<div className="h-14 w-14 rounded-xl p-[2px] bg-gradient-to-b from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727]">
								<button className="h-full w-full bg-white dark:bg-[#1c2127] hover:bg-gray-50 dark:hover:bg-[#232931] rounded-[10px] flex items-center justify-center transition-colors group">
									<i className="fa-duotone fa-cart-plus text-gray-900 dark:text-white text-lg group-hover:scale-110 transition-transform"></i>
								</button>
							</div>
						</div>
					</div>
					<div className="flex justify-center gap-4 text-xs text-gray-400 dark:text-[#9dabb9] font-medium">
						<div className="flex items-center gap-1.5">
							<i className="fa-duotone fa-truck-fast text-[16px] text-primary"></i>
							Free Shipping
						</div>
						<div className="w-px h-4 bg-gray-200 dark:bg-[#3b4754]"></div>
						<div className="flex items-center gap-1.5">
							<i className="fa-duotone fa-bed text-[16px] text-primary"></i>
							101-Night Sleep Trial
						</div>
					</div>

					{/* Free Gifts Section */}
					<div className="bg-white dark:bg-[#FBF1E3]/5 border border-gray-100 dark:border-[#3b4754] rounded-xl p-4 mt-6 transition-colors">
						<div className="flex justify-between items-baseline mb-4 border-b border-gray-100 dark:border-[#3b4754] pb-3">
							<span className="text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] text-transparent bg-clip-text">Free 2 Pillows & Sleep Mask</span>
							<span className="text-sm font-black text-[#008f5d] uppercase">$315 FREE</span>
						</div>
						<div className="space-y-3">
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 bg-gray-50 dark:bg-white/5 rounded-lg flex items-center justify-center border border-gray-100 dark:border-[#3b4754]">
									<i className="fa-duotone fa-cloud text-xl text-gray-900 dark:text-white"></i>
								</div>
								<div className="flex-1">
									<div className="flex justify-between items-baseline">
										<span className="text-gray-900 dark:text-white text-xs font-bold uppercase">2 Signature Memory Foam Pillows</span>
									</div>
									<span className="text-gray-400 dark:text-[#9dabb9] text-xs line-through">$240</span>
								</div>
								<div className="h-4 w-4 rounded-full bg-white dark:bg-[#1c2127] flex items-center justify-center border border-gray-100 dark:border-[#3b4754]">
									<i className="fa-solid fa-plus text-[8px] text-gray-400 dark:text-[#9dabb9]"></i>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="h-10 w-10 bg-gray-50 dark:bg-white/5 rounded-lg flex items-center justify-center border border-gray-100 dark:border-[#3b4754]">
									<i className="fa-duotone fa-moon text-xl text-gray-900 dark:text-white"></i>
								</div>
								<div className="flex-1">
									<div className="flex justify-between items-baseline">
										<span className="text-gray-900 dark:text-white text-xs font-bold uppercase">Signature Sleep Mask</span>
									</div>
									<span className="text-gray-400 dark:text-[#9dabb9] text-xs line-through">$75</span>
								</div>
								<div className="h-4 w-4 rounded-full bg-white dark:bg-[#1c2127] flex items-center justify-center border border-gray-100 dark:border-[#3b4754]">
									<i className="fa-solid fa-plus text-[8px] text-gray-400 dark:text-[#9dabb9]"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Support Section */}
			</div>
		</div>
	);
};
