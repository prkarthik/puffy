(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingSupport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FloatingSupport() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingSupport.useEffect": ()=>{
            const handleScroll = {
                "FloatingSupport.useEffect.handleScroll": ()=>{
                    if (window.scrollY > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["FloatingSupport.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "FloatingSupport.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["FloatingSupport.useEffect"];
        }
    }["FloatingSupport.useEffect"], []);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 left-6 z-[100] animate-fade-in-up",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "backdrop-blur-md bg-white dark:bg-black/60 border border-gray-100 dark:border-white/10 rounded-full py-2 px-4 shadow-2xl flex items-center gap-4 transition-all hover:bg-gray-50 dark:hover:bg-black/70 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 w-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-duotone fa-user-headset text-gray-700 dark:text-white text-lg"
                            }, void 0, false, {
                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                                lineNumber: 28,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                            lineNumber: 27,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-[#00cf86] rounded-full border-2 border-white dark:border-black"
                        }, void 0, false, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                            lineNumber: 30,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                    lineNumber: 26,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 dark:text-white dark:opacity-80 text-[10px] font-bold uppercase tracking-wider leading-tight mb-0.5",
                            children: "Need help?"
                        }, void 0, false, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                            lineNumber: 34,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+18336374319",
                                    className: "text-gray-900 dark:text-white text-xs font-bold hover:text-black dark:hover:text-[#fff4c0] transition-colors flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-duotone fa-phone text-[10px]"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                                            lineNumber: 42,
                                            columnNumber: 8
                                        }, this),
                                        "Call"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                                    lineNumber: 38,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-px h-3 bg-gray-200 dark:bg-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                                    lineNumber: 45,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-gray-900 dark:text-white text-xs font-bold hover:text-black dark:hover:text-[#fff4c0] transition-colors flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-duotone fa-comment text-[10px]"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                                            lineNumber: 47,
                                            columnNumber: 8
                                        }, this),
                                        "Chat"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                                    lineNumber: 46,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                            lineNumber: 37,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
                    lineNumber: 33,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
            lineNumber: 25,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/FloatingSupport.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this);
}
_s(FloatingSupport, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = FloatingSupport;
var _c;
__turbopack_context__.k.register(_c, "FloatingSupport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navLinks = [
    "Mattresses",
    "Smart Beds",
    "Bed Frames & More",
    "Bedding & More",
    "Reviews",
    "Puffy vs",
    "Support",
    "Stores"
];
const Header = ()=>{
    _s();
    const { setTheme, resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            setMounted(true);
        }
    }["Header.useEffect"], []);
    // Prevent scrolling when menu is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            if (isMenuOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
        }
    }["Header.useEffect"], [
        isMenuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "fixed top-0 left-0 right-0 z-[100] h-[80px] bg-white/85 dark:bg-black/95 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    className: "lg:hidden w-10 h-10 -ml-2 flex items-center justify-center text-slate-900 dark:text-white",
                                    "aria-label": "Toggle Menu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `fa-duotone ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                        lineNumber: 49,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                    lineNumber: 44,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex-shrink-0 relative w-[100px] lg:w-[120px] h-[32px] lg:h-[40px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/Puffy_Logo.png",
                                        alt: "Puffy Logo",
                                        fill: true,
                                        className: "object-contain",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                        lineNumber: 54,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                    lineNumber: 53,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                            lineNumber: 42,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-8",
                            children: navLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "group relative text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white hover:text-[#137cc1] dark:hover:text-blue-400 transition-colors py-2",
                                    children: [
                                        item,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                            lineNumber: 73,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                    lineNumber: 67,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                            lineNumber: 65,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 lg:gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors group",
                                    "aria-label": "Search",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-duotone fa-magnifying-glass text-xl text-slate-900 dark:text-white group-hover:scale-110 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                        lineNumber: 84,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTheme(resolvedTheme === "dark" ? "light" : "dark"),
                                    className: "w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors text-slate-900 dark:text-white",
                                    "aria-label": "Toggle Theme",
                                    children: mounted ? resolvedTheme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-duotone fa-sun text-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                        lineNumber: 95,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-duotone fa-moon text-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                        lineNumber: 97,
                                        columnNumber: 10
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 bg-gray-200 dark:bg-white/20 rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                        lineNumber: 100,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                    lineNumber: 88,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center transition-colors group relative",
                                    "aria-label": "View Cart",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-duotone fa-cart-shopping text-xl text-slate-900 dark:text-white group-hover:scale-110 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                            lineNumber: 108,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-2 right-2 h-2 w-2 bg-[#00cf86] rounded-full border border-white dark:border-black"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                            lineNumber: 109,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                    lineNumber: 104,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                            lineNumber: 79,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                    lineNumber: 40,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                lineNumber: 39,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-[90] bg-white dark:bg-black pt-[80px] px-6 transition-transform duration-300 lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col gap-6 pt-6",
                    children: [
                        navLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                className: "text-lg font-bold uppercase tracking-widest text-gray-900 dark:text-white border-b border-gray-100 dark:border-white/10 pb-4",
                                onClick: ()=>setIsMenuOpen(false),
                                children: item
                            }, item, false, {
                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                lineNumber: 122,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "flex items-center gap-3 text-gray-900 dark:text-white font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-duotone fa-user text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                            lineNumber: 133,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "My Account"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                            lineNumber: 134,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                    lineNumber: 132,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "flex items-center gap-3 text-gray-900 dark:text-white font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-duotone fa-phone text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                            lineNumber: 137,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Contact Support"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                            lineNumber: 138,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                                    lineNumber: 136,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                            lineNumber: 131,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                    lineNumber: 120,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Header.tsx",
                lineNumber: 116,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Header, "JGfXcR1CbittJg1bt6e2tS3rOAM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const awardFeatures = [
    {
        icon: "fa-duotone fa-snowflake",
        title: "Cooling Cloud™",
        subtitle: "Temperature regulation"
    },
    {
        icon: "fa-duotone fa-shield-heart",
        title: "Lifetime Warranty",
        subtitle: "Guaranteed forever"
    },
    {
        icon: "fa-duotone fa-cloud",
        title: "BEST FOR COMFORT",
        subtitle: "(14 Awards)"
    },
    {
        icon: "fa-duotone fa-spa",
        title: "BEST FOR BACK PAIN",
        subtitle: "(6 Awards)"
    },
    {
        icon: "fa-duotone fa-box-open",
        title: "BEST IN BOX",
        subtitle: "(4 Awards)"
    },
    {
        icon: "fa-duotone fa-gem",
        title: "BEST LUXURY & MATERIALS",
        subtitle: "(16 Awards)"
    },
    {
        icon: "fa-duotone fa-users",
        title: "BEST FOR SLEEPER TYPES",
        subtitle: "(9 Awards)"
    },
    {
        icon: "fa-duotone fa-trophy",
        title: "BEST OVERALL",
        subtitle: "(7 Awards)"
    }
];
const Hero = ()=>{
    _s();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentAwardIndex, setCurrentAwardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>setMounted(true)
    }["Hero.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    setCurrentAwardIndex({
                        "Hero.useEffect.interval": (prev)=>(prev + 1) % awardFeatures.length
                    }["Hero.useEffect.interval"]);
                }
            }["Hero.useEffect.interval"], 3500); // 3.5s per slide to match animation duration + pause
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full lg:w-[62%] relative h-[50vh] lg:h-auto min-h-[400px] lg:min-h-0 bg-neutral-900 group overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105",
                style: {
                    backgroundImage: `url('${mounted && resolvedTheme === "light" ? "/images/Puffy-Lux-Hybrid-light.jpeg" : "/images/Puffy-Lux-Hybrid.jpeg"}')`
                },
                "aria-label": "Puffy Lux Hybrid Mattress Background"
            }, void 0, false, {
                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                lineNumber: 66,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-30"
            }, void 0, false, {
                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                lineNumber: 77,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-6 lg:top-10 lg:left-10 z-50 max-w-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl lg:text-4xl font-extrabold leading-[1.1] mb-2 tracking-tight drop-shadow-md bg-gradient-to-b from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] text-transparent bg-clip-text pb-1",
                        children: "The Puffy Lux Hybrid"
                    }, void 0, false, {
                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                        lineNumber: 81,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 group cursor-pointer mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-0.5",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "fa-solid fa-star text-[20px] bg-gradient-to-b from-[#F2E59E] via-[#DBC065] to-[#A07727] text-transparent bg-clip-text"
                                    }, star, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                        lineNumber: 87,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                lineNumber: 85,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-slate-900 dark:text-white/90 group-hover:text-black dark:group-hover:text-white transition-colors text-xs lg:text-sm font-bold underline decoration-slate-900/30 dark:decoration-white/30 underline-offset-4 shadow-black/50 drop-shadow-sm",
                                children: "10,000+ Verified Reviews"
                            }, void 0, false, {
                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                lineNumber: 93,
                                columnNumber: 6
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                        lineNumber: 84,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-slate-900 dark:text-white/90 text-sm lg:text-base leading-relaxed max-w-md drop-shadow-md font-medium",
                        children: "Experience the cloud-like comfort of America's most awarded luxury mattress. Designed for optimal cooling and total pressure relief."
                    }, void 0, false, {
                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                        lineNumber: 97,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                lineNumber: 80,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 left-4 lg:hidden z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur px-3 py-1 text-xs font-bold text-white shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "fa-duotone fa-award text-[14px]"
                        }, void 0, false, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                            lineNumber: 105,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Best Seller"
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                    lineNumber: 104,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                lineNumber: 103,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 left-4 right-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex flex-wrap gap-2 lg:gap-x-4 lg:gap-y-2 max-w-full px-10",
                        children: awardFeatures.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "backdrop-blur-md bg-[#137cc1]/70 dark:bg-black/30 border border-white/20 rounded-xl p-2.5 flex items-center gap-2.5 shadow-lg hover:bg-[#137cc1]/80 dark:hover:bg-black/40 transition-colors cursor-default",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-7 w-7 rounded-full bg-white/10 flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: `${feature.icon} text-white text-xs`
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                            lineNumber: 120,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                        lineNumber: 119,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-baseline gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "bg-gradient-to-r from-white via-white to-white dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] text-transparent bg-clip-text text-[11px] font-bold leading-tight uppercase tracking-wide whitespace-nowrap",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                                lineNumber: 123,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/70 text-[10px] leading-tight font-medium whitespace-nowrap",
                                                children: feature.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                                lineNumber: 126,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                        lineNumber: 122,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                lineNumber: 115,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                        lineNumber: 113,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden relative h-12 w-full px-4 overflow-hidden",
                        children: awardFeatures.map((feature, index)=>index === currentAwardIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-4 top-0 right-4 animate-award-mount backdrop-blur-md bg-[#137cc1]/70 dark:bg-black/40 border border-white/20 rounded-xl p-2 flex items-center gap-3 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: `${feature.icon} text-white text-sm`
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                            lineNumber: 143,
                                            columnNumber: 10
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                        lineNumber: 142,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "bg-gradient-to-r from-white via-white to-white dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] text-transparent bg-clip-text text-[11px] font-bold leading-tight uppercase tracking-wide whitespace-nowrap",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                                lineNumber: 146,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/90 text-[10px] leading-tight font-medium whitespace-nowrap",
                                                children: feature.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                                lineNumber: 149,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                        lineNumber: 145,
                                        columnNumber: 9
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                                lineNumber: 138,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                        lineNumber: 135,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
                lineNumber: 111,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/Hero.tsx",
        lineNumber: 64,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "s+FG9f0YfuySF+zs2gb47Jor1e0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextContent",
    ()=>TextContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const sizeOptions = [
    {
        label: "Twin",
        price: 1499,
        salePrice: 1199
    },
    {
        label: "Twin XL",
        price: 1549,
        salePrice: 1249
    },
    {
        label: "Full",
        price: 1699,
        salePrice: 1399
    },
    {
        label: "Queen",
        price: 1799,
        salePrice: 1499
    },
    {
        label: "King",
        price: 1999,
        salePrice: 1699
    },
    {
        label: "Cal King",
        price: 1999,
        salePrice: 1699
    },
    {
        label: "Split Head Queen",
        price: 2099,
        salePrice: 1799
    },
    {
        label: "Split Head King",
        price: 2399,
        salePrice: 2099
    },
    {
        label: "Split King",
        price: 2299,
        salePrice: 1999
    }
];
const TextContent = ()=>{
    _s();
    const [selectedSize, setSelectedSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(sizeOptions[3]); // Default to Queen
    const [selectedModel, setSelectedModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('lux');
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const modelPriceDiff = selectedModel === 'royal' ? 340 : 0;
    // Calculate final prices
    const finalPrice = selectedSize.price + modelPriceDiff;
    const finalSalePrice = selectedSize.salePrice + modelPriceDiff;
    const savings = finalPrice - finalSalePrice;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full lg:w-[38%] bg-[#EFEFEF] dark:bg-background-dark border-l border-gray-100 dark:border-[#283039] flex flex-col transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 px-5 py-5 lg:px-9 lg:py-6 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-[#1c2127] border border-gray-100 dark:border-[#283039] px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-duotone fa-award text-[16px]"
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 35,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Award-Winning Comfort"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 34,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-400 dark:text-[#9dabb9] text-xs font-semibold tracking-wider uppercase",
                            children: "Luxury Hybrid Series"
                        }, void 0, false, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 38,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                    lineNumber: 33,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>setSelectedModel('lux'),
                            className: `cursor-pointer rounded-lg border-[1.5px] p-2 transition-all relative overflow-hidden group flex flex-col items-center text-center
                ${selectedModel === 'lux' ? 'border-primary bg-primary/5 dark:bg-[#FBF1E3]/5' : 'border-gray-100 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] hover:border-gray-200 dark:hover:border-[#596775]'}
            `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex justify-between items-start mb-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `size-4 rounded-full flex items-center justify-center transition-colors ${selectedModel === 'lux' ? 'bg-[#008f5d]' : 'border border-gray-200 dark:border-[#596775]'}`,
                                        children: selectedModel === 'lux' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-duotone fa-check text-[10px] text-white font-bold"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 55,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                        lineNumber: 54,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 53,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-14 w-full relative mb-1 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/upgrade-lux_2025-11-27-22-16-33.webp",
                                        alt: "Puffy Lux Hybrid",
                                        className: "object-contain h-full w-[60%]"
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                        lineNumber: 59,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 58,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[12px] font-extrabold text-gray-900 dark:text-white leading-tight",
                                            children: [
                                                "Puffy ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold",
                                                    children: "LUX"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "uppercase text-[9px] border border-gray-300 dark:border-[#9dabb9] px-1 rounded text-gray-400 dark:text-[#9dabb9] font-bold",
                                                    children: "Hybrid"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 59
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 66,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-[#9dabb9] font-bold whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-duotone fa-check text-[#008f5d] text-[10px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " 8 Layers"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-duotone fa-check text-[#008f5d] text-[10px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Medium-Plush"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 69,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 65,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 48,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>setSelectedModel('royal'),
                            className: `cursor-pointer rounded-lg border-[1.5px] p-2 transition-all relative overflow-hidden group flex flex-col items-center text-center
                ${selectedModel === 'royal' ? 'border-primary bg-primary/5 dark:bg-[#FBF1E3]/5' : 'border-gray-100 dark:border-[#3b4754] bg-white dark:bg-[#1c2127] hover:border-gray-200 dark:hover:border-[#596775]'}
            `,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 right-0 bg-gradient-to-r from-primary to-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-tl-lg z-10 uppercase tracking-wide",
                                    children: "Premium Choice"
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 82,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex justify-between items-start mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `size-4 rounded-full flex items-center justify-center transition-colors ${selectedModel === 'royal' ? 'bg-[#008f5d]' : 'border border-gray-200 dark:border-[#596775]'}`,
                                            children: selectedModel === 'royal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "fa-duotone fa-check text-[10px] text-white font-bold"
                                            }, void 0, false, {
                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                lineNumber: 87,
                                                columnNumber: 39
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 86,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-900 dark:text-white text-[10px] font-bold",
                                            children: "+ $340"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 89,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 85,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-14 w-full relative mb-1 flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/upgrade-royal_2025-11-27-22-16-33.webp",
                                        alt: "Puffy Royal Hybrid",
                                        className: "object-contain h-full w-[60%]"
                                    }, void 0, false, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                        lineNumber: 92,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 91,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5 w-full pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-[12px] font-extrabold text-gray-900 dark:text-white leading-tight",
                                            children: [
                                                "Puffy ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-extrabold",
                                                    children: "ROYAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "uppercase text-[9px] border border-gray-300 dark:border-[#9dabb9] px-1 rounded text-gray-400 dark:text-[#9dabb9] font-bold",
                                                    children: "Hybrid"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 61
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 99,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2 text-[10px] text-gray-400 dark:text-[#9dabb9] font-bold whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-duotone fa-check text-[#008f5d] text-[10px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 103,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " 10 Layers"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fa-duotone fa-check text-[#008f5d] text-[10px]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 53
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " Ultra-Plush"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 102,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 98,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 77,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                    lineNumber: 46,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6 p-6 rounded-xl bg-white dark:bg-[#1c2127] border border-gray-100 dark:border-[#283039] shadow-2xl shadow-gray-200/50 dark:shadow-black/20 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-baseline mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider",
                                            children: "Select Size"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 113,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-primary font-bold cursor-pointer hover:underline",
                                            children: "Size Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 116,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 112,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsDropdownOpen(!isDropdownOpen),
                                            className: "w-full h-[48px] bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#3b4754] rounded-lg px-4 flex justify-between items-center text-gray-900 dark:text-white transition-colors hover:border-gray-300 dark:hover:border-[#596775]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[18px] font-bold",
                                                    children: selectedSize.label
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `fa-duotone fa-chevron-down text-gray-400 dark:text-[#9dabb9] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 122,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 w-full mt-2 bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#3b4754] rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[240px] overflow-y-auto",
                                            children: sizeOptions.map((option)=>{
                                                const isSelected = selectedSize.label === option.label;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setSelectedSize(option);
                                                        setIsDropdownOpen(false);
                                                    },
                                                    className: `group h-[48px] pl-3 pr-4 text-[16px] font-bold transition-all relative flex items-center justify-between w-full
                          ${isSelected ? "text-gray-900 dark:text-white bg-gray-50 dark:bg-[#232931]" : "text-gray-500 dark:text-[#9dabb9] hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#232931]"}
                        `,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `absolute left-0 top-0 bottom-0 w-[5px] transition-all
                          ${isSelected ? "bg-gradient-to-b from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727]" : "bg-gray-200 dark:bg-[#3b4754] group-hover:bg-blue-600 dark:group-hover:bg-blue-900"}
                        `
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 13
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: option.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 13
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 dark:text-[#9dabb9] group-hover:text-gray-900 dark:group-hover:text-white font-medium",
                                                            children: [
                                                                "$",
                                                                (option.salePrice + modelPriceDiff).toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 13
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, option.label, true, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 12
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 132,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 120,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 111,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-end justify-between border-t border-gray-100 dark:border-[#283039] pt-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 dark:text-[#9dabb9] text-sm font-medium line-through mb-1",
                                        children: [
                                            "$",
                                            finalPrice.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                        lineNumber: 167,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-900 dark:text-white text-3xl font-black tracking-tight",
                                                children: [
                                                    "$",
                                                    finalSalePrice.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                lineNumber: 171,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-primary text-white text-xs font-bold px-2 py-1 rounded",
                                                children: [
                                                    "Save $",
                                                    savings.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                lineNumber: 174,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                        lineNumber: 170,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                lineNumber: 166,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 165,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between bg-white dark:bg-[#1c2127] border border-gray-200 dark:border-[#3b4754] rounded-lg p-3 h-12 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider pl-2",
                                            children: "Quantity"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 183,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setQuantity(Math.max(1, quantity - 1)),
                                                    className: "text-gray-400 dark:text-[#9dabb9] hover:text-black dark:hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-minus text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-900 dark:text-white font-bold text-lg w-4 text-center",
                                                    children: quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setQuantity(quantity + 1),
                                                    className: "text-gray-400 dark:text-[#9dabb9] hover:text-black dark:hover:text-white transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-plus text-sm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 184,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 182,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex-1 h-14 bg-gradient-to-r from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] hover:brightness-110 active:scale-[0.99] transition-all rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 dark:shadow-yellow-900/20 group cursor-pointer text-white dark:text-[#1c2127]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-black tracking-wide uppercase",
                                                    children: "Buy Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-duotone fa-credit-card text-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 203,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-14 w-14 rounded-xl p-[2px] bg-gradient-to-b from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "h-full w-full bg-white dark:bg-[#1c2127] hover:bg-gray-50 dark:hover:bg-[#232931] rounded-[10px] flex items-center justify-center transition-colors group",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fa-duotone fa-cart-plus text-gray-900 dark:text-white text-lg group-hover:scale-110 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                lineNumber: 211,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 210,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 202,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 180,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4 text-xs text-gray-400 dark:text-[#9dabb9] font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-duotone fa-truck-fast text-[16px] text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 219,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Free Shipping"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 218,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-px h-4 bg-gray-200 dark:bg-[#3b4754]"
                                }, void 0, false, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 222,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fa-duotone fa-bed text-[16px] text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 224,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "101-Night Sleep Trial"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 223,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 217,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#FBF1E3]/5 border border-gray-100 dark:border-[#3b4754] rounded-xl p-4 mt-6 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-baseline mb-4 border-b border-gray-100 dark:border-[#3b4754] pb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-[#137cc1] via-[#0b4e7a] to-[#062e4a] dark:from-[#F2E59E] dark:via-[#DBC065] dark:to-[#A07727] text-transparent bg-clip-text",
                                            children: "Free 2 Pillows & Sleep Mask"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 232,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-black text-[#008f5d] uppercase",
                                            children: "$315 FREE"
                                        }, void 0, false, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 233,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 231,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-10 bg-gray-50 dark:bg-white/5 rounded-lg flex items-center justify-center border border-gray-100 dark:border-[#3b4754]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-duotone fa-cloud text-xl text-gray-900 dark:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-baseline",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-900 dark:text-white text-xs font-bold uppercase",
                                                                children: "2 Signature Memory Foam Pillows"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 10
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 dark:text-[#9dabb9] text-xs line-through",
                                                            children: "$240"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 10
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 w-4 rounded-full bg-white dark:bg-[#1c2127] flex items-center justify-center border border-gray-100 dark:border-[#3b4754]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-plus text-[8px] text-gray-400 dark:text-[#9dabb9]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 236,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-10 bg-gray-50 dark:bg-white/5 rounded-lg flex items-center justify-center border border-gray-100 dark:border-[#3b4754]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-duotone fa-moon text-xl text-gray-900 dark:text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-baseline",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-900 dark:text-white text-xs font-bold uppercase",
                                                                children: "Signature Sleep Mask"
                                                            }, void 0, false, {
                                                                fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 10
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 dark:text-[#9dabb9] text-xs line-through",
                                                            children: "$75"
                                                        }, void 0, false, {
                                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 10
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-4 w-4 rounded-full bg-white dark:bg-[#1c2127] flex items-center justify-center border border-gray-100 dark:border-[#3b4754]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$WebSites$2f$puffy$2f$puffy$2d$app$2d$t$2f$puffy$2d$app$2d$temo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "fa-solid fa-plus text-[8px] text-gray-400 dark:text-[#9dabb9]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                            lineNumber: 250,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                                    lineNumber: 235,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                            lineNumber: 230,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
                    lineNumber: 110,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
            lineNumber: 32,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/WebSites/puffy/puffy-app-t/puffy-app-temo/src/components/TextContent.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TextContent, "/rmHJRRDfyVyNqL805FKhHq41mM=");
_c = TextContent;
var _c;
__turbopack_context__.k.register(_c, "TextContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=WebSites_puffy_puffy-app-t_puffy-app-temo_src_components_a10728ee._.js.map