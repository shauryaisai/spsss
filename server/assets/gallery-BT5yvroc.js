import { jsx, jsxs } from "react/jsx-runtime";
function Gallery() {
  const categories = ["All", "Campus", "Events", "Sports", "Academics"];
  const photos = Array.from({
    length: 9
  }).map((_, i) => ({
    id: i,
    category: categories[i % 4 + 1],
    url: `https://images.unsplash.com/photo-${["1523050854058-8df90110c9f1", "1503676260728-1c00da094a0b", "1427504055926-26906a4b184b", "1577896851231-70ef18881754", "1509062522246-3755977927d7", "1546410531-b687fba48906", "1513475382585-d06e73926c28", "1522202176988-66273c2fd55f", "1544367567-0f2fcb009e0b"][i]}?q=80&w=600&auto=format&fit=crop`
  }));
  return /* @__PURE__ */ jsx("div", { className: "py-16 px-4 bg-slate-50 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "animate-enter text-4xl font-bold text-school-navy mb-10 text-center border-b-4 border-school-gold pb-4 inline-block mx-auto", children: "Photo Gallery" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-12", children: categories.map((cat, i) => /* @__PURE__ */ jsx("button", { className: `px-6 py-2 rounded-full font-semibold text-sm transition-colors ${i === 0 ? "bg-school-navy text-school-white" : "bg-white text-slate-600 hover:bg-school-gold hover:text-school-navy border border-slate-200"}`, children: cat }, cat)) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: photos.map((photo) => /* @__PURE__ */ jsxs("div", { className: "card-lift animate-enter group relative aspect-square overflow-hidden rounded-2xl bg-slate-200 shadow-sm cursor-pointer", children: [
      /* @__PURE__ */ jsx("img", { src: photo.url, alt: `${photo.category} placeholder`, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-school-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold tracking-wider uppercase text-sm", children: photo.category }) })
    ] }, photo.id)) })
  ] }) });
}
export {
  Gallery as component
};
