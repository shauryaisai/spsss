import { jsx, jsxs } from "react/jsx-runtime";
function Contact() {
  return /* @__PURE__ */ jsx("div", { className: "py-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h1", { className: "animate-enter text-4xl font-bold text-school-navy mb-4 border-b-4 border-school-gold pb-4 inline-block mx-auto", children: "Contact Us" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-600", children: "We'd love to hear from you. Reach out to us for any queries." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "card-lift animate-enter bg-white p-8 rounded-3xl shadow-lg border border-slate-100", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-school-navy mb-6", children: "Send us a Message" }),
        /* @__PURE__ */ jsxs("form", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-semibold text-slate-700 mb-2", children: "Full Name" }),
              /* @__PURE__ */ jsx("input", { type: "text", id: "name", className: "w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent", placeholder: "John Doe" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-semibold text-slate-700 mb-2", children: "Phone Number" }),
              /* @__PURE__ */ jsx("input", { type: "tel", id: "phone", className: "w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent", placeholder: "+91 98765 43210" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-semibold text-slate-700 mb-2", children: "Email Address" }),
            /* @__PURE__ */ jsx("input", { type: "email", id: "email", className: "w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent", placeholder: "john@example.com" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-sm font-semibold text-slate-700 mb-2", children: "Subject" }),
            /* @__PURE__ */ jsxs("select", { id: "subject", className: "w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent bg-white", children: [
              /* @__PURE__ */ jsx("option", { children: "General Inquiry" }),
              /* @__PURE__ */ jsx("option", { children: "Admissions" }),
              /* @__PURE__ */ jsx("option", { children: "Careers" }),
              /* @__PURE__ */ jsx("option", { children: "Other" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-semibold text-slate-700 mb-2", children: "Message" }),
            /* @__PURE__ */ jsx("textarea", { id: "message", rows: 4, className: "w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent resize-none", placeholder: "How can we help you?" })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full bg-school-navy text-school-white py-4 rounded-xl font-bold text-lg hover:bg-school-gold hover:text-school-navy transition-colors shadow-md", children: "Send Message" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-school-navy text-school-white p-8 rounded-3xl shadow-lg", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-school-gold mb-6", children: "Contact Information" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-school-white/10 rounded-full flex items-center justify-center text-xl shrink-0", children: "📍" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-lg mb-1", children: "Address" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm opacity-90 leading-relaxed", children: "A-35, DDA Flats Road Near M. S. Park, Mandoli Road, Shahdara, Delhi – 110032" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-school-white/10 rounded-full flex items-center justify-center text-xl shrink-0", children: "📞" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-lg mb-1", children: "Phone" }),
                /* @__PURE__ */ jsxs("div", { className: "text-sm opacity-90", children: [
                  "011-2258 1138",
                  /* @__PURE__ */ jsx("br", {}),
                  "+91 98100 77384"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-school-white/10 rounded-full flex items-center justify-center text-xl shrink-0", children: "✉️" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-bold text-lg mb-1", children: "Email" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm opacity-90", children: "info@shashipublicschool.co.in" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-[300px] bg-slate-200 rounded-3xl overflow-hidden relative shadow-inner", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-slate-500", children: [
          /* @__PURE__ */ jsx("span", { className: "text-5xl mb-2", children: "🗺️" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Interactive Google Map Placeholder" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Shahdara, Delhi – 110032" })
        ] }) })
      ] })
    ] })
  ] }) });
}
export {
  Contact as component
};
