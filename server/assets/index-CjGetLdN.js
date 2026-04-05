import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
function CountUp({ end, suffix = "", prefix = "", duration = 2e3 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    prefix,
    count,
    suffix
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-school-navy text-school-white py-24 px-4 text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" }),
      /* @__PURE__ */ jsx("div", { className: "hero-orb hero-orb-gold animate-drift -left-12 top-8 h-40 w-40" }),
      /* @__PURE__ */ jsx("div", { className: "hero-orb hero-orb-blue animate-drift bottom-6 right-10 h-56 w-56", style: {
        animationDelay: "1.2s"
      } }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "glass-panel animate-enter rounded-[2rem] border border-white/10 px-6 py-10 shadow-2xl shadow-black/20 md:px-10", children: [
        /* @__PURE__ */ jsx("div", { className: "animate-enter text-sm font-bold uppercase tracking-[0.35em] text-school-white/80", style: {
          animationDelay: "80ms"
        }, children: "Established Excellence In Shahdara" }),
        /* @__PURE__ */ jsx("h1", { className: "animate-enter mt-4 mb-6 text-4xl font-bold text-school-gold md:text-6xl", style: {
          animationDelay: "160ms"
        }, children: "Welcome to Shashi Public School" }),
        /* @__PURE__ */ jsx("p", { className: "animate-enter mb-10 text-xl opacity-90 md:text-2xl", style: {
          animationDelay: "240ms"
        }, children: "Empowering Students to Achieve Excellence and Integrity" }),
        /* @__PURE__ */ jsx(Link, { to: "/admissions", className: "animate-enter inline-block rounded-full bg-school-gold px-8 py-4 text-lg font-bold text-school-navy shadow-lg transition-all hover:scale-105 hover:bg-white hover:text-school-navy", style: {
          animationDelay: "320ms"
        }, children: "Apply Now" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-school-gold text-school-navy py-3 px-4 overflow-hidden shadow-inner flex", children: [
      /* @__PURE__ */ jsx("div", { className: "font-bold pr-4 border-r border-school-navy whitespace-nowrap z-10 bg-school-gold", children: "Latest News:" }),
      /* @__PURE__ */ jsx("div", { className: "flex-grow overflow-hidden relative", children: /* @__PURE__ */ jsx("div", { className: "announcement-track whitespace-nowrap inline-block px-4 font-medium", children: "Admissions open for Academic Year 2026-2027 � Half-yearly examinations starting next month � Parent-Teacher Meeting scheduled for Saturday � Annual Sports Day dates announced!" }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-slate-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "animate-enter", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-school-navy mb-6", children: "Nurturing Future Leaders" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-700 mb-6 leading-relaxed", children: "At Shashi Public Sr. Secondary School, we believe in providing a holistic educational experience that shapes the leaders of tomorrow. With a rich history of academic excellence and character development, we are dedicated to fostering a supportive and engaging learning environment." }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "inline-flex items-center text-school-navy font-bold transition-colors hover:text-school-gold", children: "Learn More About Our History →" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "card-lift animate-enter rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm", style: {
          animationDelay: "100ms"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-school-gold mb-2", children: /* @__PURE__ */ jsx(CountUp, { end: 100, suffix: "%" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-school-navy font-semibold", children: "Pass Rate" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-lift animate-enter rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm", style: {
          animationDelay: "180ms"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-school-gold mb-2", children: /* @__PURE__ */ jsx(CountUp, { end: 30, suffix: "+" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-school-navy font-semibold", children: "Expert Teachers" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-lift animate-enter rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm", style: {
          animationDelay: "260ms"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-school-gold mb-2", children: /* @__PURE__ */ jsx(CountUp, { end: 15, suffix: "+" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-school-navy font-semibold", children: "Sports & Clubs" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "card-lift animate-enter rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm", style: {
          animationDelay: "340ms"
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-school-gold mb-2", children: /* @__PURE__ */ jsx(CountUp, { end: 31 }) }),
          /* @__PURE__ */ jsx("div", { className: "text-school-navy font-semibold", children: "Years of Legacy" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "animate-enter text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-school-navy mb-4", children: "Latest News & Circulars" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-600", children: "Important updates and information for parents and students." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [{
        date: "Mar 15, 2026",
        title: "CBSE Board Exam Guidelines",
        desc: "Important instructions for students appearing in upcoming board exams."
      }, {
        date: "Mar 10, 2026",
        title: "Fee Submission Deadline",
        desc: "Last date for the submission of 1st quarter fees without late penalty."
      }, {
        date: "Mar 05, 2026",
        title: "Summer Camp Registration",
        desc: "Enrollment now open for our annual summer enrichment program."
      }].map((news, i) => /* @__PURE__ */ jsxs("div", { className: "card-lift animate-enter overflow-hidden rounded-2xl border border-slate-200 bg-slate-50", style: {
        animationDelay: `${120 + i * 90}ms`
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "bg-school-navy px-6 py-2 text-sm font-semibold text-school-white", children: news.date }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-school-navy mb-3", children: news.title }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 mb-4", children: news.desc }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "font-semibold text-school-gold hover:underline", children: "Download PDF" })
        ] })
      ] }, i)) })
    ] }) })
  ] });
}
export {
  Home as component
};
