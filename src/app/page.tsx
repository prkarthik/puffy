import FloatingSupport from "@/components/FloatingSupport";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TextContent } from "@/components/TextContent";

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col pt-[80px]">
        {/* Product Section */}
        <div className="flex flex-col lg:flex-row h-auto lg:min-h-[calc(100vh-80px)]">
          <Hero />
          <TextContent />
        </div>

        {/* Trust Bar (Secondary Header) */}
        <div className="bg-white dark:bg-[#283039] py-6 px-4 border-t border-gray-100 dark:border-[#3b4754] transition-colors duration-300">
          <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-4 lg:gap-12 text-center">
            <div className="flex items-center gap-3">
              <i className="fa-duotone fa-flag-usa text-gray-500 dark:text-[#9dabb9] text-xl"></i>
              <span className="text-gray-800 dark:text-white text-sm font-bold tracking-wide uppercase">Assembled in USA</span>
            </div>
            <div className="hidden lg:block w-px h-6 bg-gray-300 dark:bg-[#3b4754]"></div>
            <div className="flex items-center gap-3">
              <i className="fa-duotone fa-truck-fast text-gray-500 dark:text-[#9dabb9] text-xl"></i>
              <span className="text-gray-800 dark:text-white text-sm font-bold tracking-wide uppercase">Free Shipping in 1 - 2 Days</span>
            </div>
            <div className="hidden lg:block w-px h-6 bg-gray-300 dark:bg-[#3b4754]"></div>
            <div className="flex items-center gap-3">
              <i className="fa-duotone fa-bed text-gray-500 dark:text-[#9dabb9] text-xl"></i>
              <span className="text-gray-800 dark:text-white text-sm font-bold tracking-wide uppercase">101-Night Sleep Trial</span>
            </div>
            <div className="hidden lg:block w-px h-6 bg-gray-300 dark:bg-[#3b4754]"></div>
            <div className="flex items-center gap-3">
              <i className="fa-duotone fa-shield-check text-gray-500 dark:text-[#9dabb9] text-xl"></i>
              <span className="text-gray-800 dark:text-white text-sm font-bold tracking-wide uppercase">Lifetime Warranty</span>
            </div>
          </div>
        </div>

        <FloatingSupport />
      </main>
    </div>
  );

}
