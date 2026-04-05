import { createRootRoute, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
const Route$6 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Shashi Public Sr. Secondary School"
      }
    ]
  }),
  shellComponent: RootDocument,
  component: RootComponent
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "flex flex-col min-h-screen text-slate-900 font-medium relative overflow-x-hidden bg-slate-50", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 pointer-events-none z-[-1] bg-cover bg-center bg-no-repeat opacity-20",
          style: { backgroundImage: "url('/background.png')" }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "hero-orb hero-orb-gold animate-drift fixed -top-16 -left-16 z-[-1] h-64 w-64" }),
      /* @__PURE__ */ jsx("div", { className: "hero-orb hero-orb-blue animate-drift fixed right-0 top-1/3 z-[-1] h-72 w-72", style: { animationDelay: "1.6s" } }),
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled((prev) => {
            if (prev && y < 10) return false;
            if (!prev && y > 60) return true;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("header", { className: "bg-school-navy text-school-white sticky top-0 z-50 shadow-md transition-all duration-500 ease-in-out", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-4 flex flex-col items-center gap-4 text-center", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out will-change-[max-height,opacity]",
          style: {
            maxHeight: scrolled ? "0px" : "120px",
            opacity: scrolled ? 0 : 1
          },
          children: /* @__PURE__ */ jsxs("div", { className: "animate-enter flex flex-col items-center gap-2 pb-2", children: [
            /* @__PURE__ */ jsx("img", { src: "/school-logo.png", alt: "Shashi Public School Logo", className: "animate-float-gentle w-20 h-20 object-cover rounded-full border-2 border-school-gold shadow-md" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-xl md:text-2xl font-extrabold", children: "Shashi Public Sr. Secondary School" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-school-gold", children: "Inspiring Excellence, Shaping Futures" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm font-bold", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold", children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold", children: "About Us" }),
        /* @__PURE__ */ jsx(Link, { to: "/academics", className: "nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold", children: "Academics" }),
        /* @__PURE__ */ jsx(Link, { to: "/admissions", className: "px-4 py-1.5 -my-1.5 rounded-full text-white font-extrabold animate-rgb-bg transition-transform hover:scale-110 shadow-md", children: "Admissions" }),
        /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold", children: "Gallery" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "nav-link-underline hover:text-school-gold transition-colors [&.active]:text-school-gold", children: "Contact Us" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxs("footer", { className: "bg-school-navy text-school-white pt-12 pb-6 border-t-[6px] border-school-gold mt-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "animate-enter", style: { animationDelay: "80ms" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-school-gold rounded-full flex items-center justify-center font-bold text-school-navy", children: "SP" }),
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "Shashi Public School" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm mb-4 opacity-90 leading-relaxed font-semibold", children: "A commitment to academic excellence and holistic development." }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-school-gold mb-3", children: "Stay Connected" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("a", { href: "https://facebook.com/shashipublicschool", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm", "aria-label": "Facebook", children: /* @__PURE__ */ jsx(Facebook, { size: 20 }) }),
              /* @__PURE__ */ jsx("a", { href: "https://instagram.com/shashipublicschool", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm", "aria-label": "Instagram", children: /* @__PURE__ */ jsx(Instagram, { size: 20 }) }),
              /* @__PURE__ */ jsx("a", { href: "https://youtube.com/shashipublicschool", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-full bg-school-white/10 flex items-center justify-center hover:bg-school-gold hover:text-school-navy transition-colors shadow-sm", "aria-label": "YouTube", children: /* @__PURE__ */ jsx(Youtube, { size: 20 }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "animate-enter", style: { animationDelay: "180ms" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-school-gold mb-4", children: "Quick Links" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm opacity-90", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-school-gold transition-colors", children: "About Us" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/academics", className: "hover:text-school-gold transition-colors", children: "Academics" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/admissions", className: "hover:text-school-gold transition-colors", children: "Admissions" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "hover:text-school-gold transition-colors", children: "Gallery" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-school-gold transition-colors", children: "Contact Us" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "animate-enter", style: { animationDelay: "280ms" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-school-gold mb-4", children: "Contact Info" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm opacity-90", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "shrink-0", children: "📍" }),
              /* @__PURE__ */ jsx("span", { children: "A-35, DDA Flats Road Near M. S. Park, Mandoli Road, Shahdara, Delhi – 110032" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "shrink-0", children: "📞" }),
              /* @__PURE__ */ jsx("span", { children: "011-2258 1138, +91 98100 77384" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "shrink-0", children: "✉️" }),
              /* @__PURE__ */ jsx("span", { children: "info@shashipublicschool.co.in" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 text-center text-xs opacity-70 border-t border-school-white/20 pt-6", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Shashi Public Sr. Secondary School. All rights reserved."
      ] })
    ] })
  ] });
}
const $$splitComponentImporter$5 = () => import("./gallery-BT5yvroc.js");
const Route$5 = createFileRoute("/gallery")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-C55Tul3o.js");
const Route$4 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admissions-CmtDPuTj.js");
const Route$3 = createFileRoute("/admissions")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./academics-bWMaoYfH.js");
const Route$2 = createFileRoute("/academics")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-acpfEGYo.js");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CjGetLdN.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const GalleryRoute = Route$5.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AdmissionsRoute = Route$3.update({
  id: "/admissions",
  path: "/admissions",
  getParentRoute: () => Route$6
});
const AcademicsRoute = Route$2.update({
  id: "/academics",
  path: "/academics",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AcademicsRoute,
  AdmissionsRoute,
  ContactRoute,
  GalleryRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
