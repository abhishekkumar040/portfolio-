import { useState, useEffect, useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ResumePDF } from "./ResumePDF";
import {
  Download,
  ExternalLink,
  ChevronDown,
  Shield,
  Brain,
  Code2,
  Terminal,
  Cpu,
  Globe,
  Camera,
  Award,
  GraduationCap,
  FileText,
  Mail,
  MapPin,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";

/* ─── Social SVG Icons ─────────────────────────────────────── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/* ─── Animated Counter ──────────────────────────────────────── */
function Counter({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

/* ─── Skill Chip ──────────────────────────────────────────── */
function SkillChip({ label, icon }: { label: string; icon?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/20 text-indigo-200 text-sm font-medium hover:border-indigo-400/50 hover:bg-indigo-900/60 transition-all duration-200">
      {icon && <img src={icon} className="w-4 h-4" alt="" />}
      {label}
    </span>
  );
}

/* ─── Section Heading ──────────────────────────────────────── */
function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="text-indigo-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
    </div>
  );
}

/* ─── Vanta Globe Background ──────────────────────────────── */
/* Loads three.js r121 + vanta.globe.min.js exactly like the snippet,
   then mounts VANTA.GLOBE on the given ref and tears it down on unmount. */
declare global {
  interface Window {
    VANTA?: any;
    THREE?: any;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.getAttribute("data-loaded") === "true") return resolve();
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject());
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      resolve();
    };
    script.onerror = () => reject();
    document.head.appendChild(script);
  });
}

function useVantaGlobe(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    let effect: any = null;
    let cancelled = false;

    async function setVanta() {
      try {
        if (!window.THREE) {
          await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
        }
        if (!window.VANTA?.GLOBE) {
          await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js");
        }
        if (cancelled || !ref.current || !window.VANTA) return;
        effect = window.VANTA.GLOBE({
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          size: 0.7,
          color: 0x6366f1,
          color2: 0x8b5cf6,
          backgroundColor: 0x0a0b1a,
        });
      } catch {
        // Fails silently — hero still renders fine without the effect.
      }
    }

    setVanta();

    return () => {
      cancelled = true;
      if (effect) effect.destroy();
    };
  }, [ref]);
}

/* ─── Resume Download Button ──────────────────────────────── */
function ResumeButton() {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName="Abhishek_Kumar_Resume.pdf"
    >
      {({ loading }) => (
        <button
          className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg
            ${loading
              ? "bg-indigo-800/50 text-indigo-300 cursor-wait border border-indigo-600/30"
              : "bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95"
            }`}
        >
          <FileText size={16} />
          {loading ? "Generating PDF…" : "Download Resume"}
          {!loading && <Download size={15} />}
        </button>
      )}
    </PDFDownloadLink>
  );
}

/* ════════════════════════════════════════════════════════════ */
export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanDone, setScanDone] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scan animation
  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 8 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setScanDone(true), 400);
      }
      setScanProgress(Math.min(p, 100));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const navLinks = ["about", "projects", "skills", "experience", "education", "certifications"];
  const heroRef = useRef<HTMLDivElement>(null);
  useVantaGlobe(heroRef);

  return (
    <div className="min-h-screen bg-[#0a0b1a] text-white overflow-x-hidden">
      {/* ── Animated background grid ── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Radial glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12)_0%,transparent_70%)]" />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 60
            ? "bg-[#0a0b1a]/90 backdrop-blur-xl border-b border-indigo-900/40 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-indigo-400 tracking-wider text-sm">
            AK<span className="text-white">_</span>
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                className="text-sm text-slate-400 hover:text-indigo-300 transition-colors capitalize font-medium"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ResumeButton />
            <button
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Terminal size={18} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d0e21]/95 backdrop-blur-xl border-b border-indigo-900/40 px-6 py-4">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-slate-300 hover:text-indigo-300 capitalize text-sm"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Vanta Globe canvas — sits behind everything in the hero */}
        <div ref={heroRef} className="absolute inset-0 z-0" />
        {/* Readability overlay so text stays crisp over the animated globe */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0b1a]/70 via-[#0a0b1a]/55 to-[#0a0b1a] pointer-events-none" />

        {/* Everything below sits above the globe */}
        <div className="relative z-10 flex flex-col items-center w-full">

        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-sm">
          <MapPin size={12} />
          BENGALURU, INDIA
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ml-1" />
          OPEN TO WORK
        </div>

        {/* Scanner terminal card */}
        <div className="w-full max-w-2xl mb-10">
          <div className="rounded-2xl border border-indigo-500/20 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-indigo-900/20">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/20">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-slate-500 text-xs font-mono">scanner.exe</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <p className="text-slate-500 text-xs mb-3">$ analyze --target profile.json</p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-indigo-400 font-bold">abhishek-kumar</span>
                <span className="text-slate-500">//</span>
                <span className="text-slate-300">web developer & ai engineer</span>
              </div>
              {/* Progress bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-slate-500 mb-1.5">
                  <span>confidence score</span>
                  <span className="text-indigo-400">{Math.round(scanProgress)}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-100"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              </div>
              {scanDone && (
                <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-green-900/20 border border-green-500/20">
                  <span className="text-green-400 text-xs font-bold">✓ VERIFIED · READY TO HIRE</span>
                  <span className="text-slate-400 text-xs ml-auto hidden sm:block">legitimate skills detected, zero red flags</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-black text-center leading-[1.05] tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
            Abhishek
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
            Kumar
          </span>
        </h1>

        <p className="text-slate-400 text-lg md:text-xl text-center max-w-2xl leading-relaxed mb-10">
          Final-year CS student building{" "}
          <span className="text-indigo-300 font-medium">web applications</span> and{" "}
          <span className="text-violet-300 font-medium">AI systems</span> that explain their own
          decisions — from real-time phishing detection to full-stack platforms.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <ResumeButton />
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-indigo-500/30 text-indigo-300 hover:bg-indigo-950/60 hover:border-indigo-400/50 transition-all duration-200"
          >
            View Projects <ExternalLink size={14} />
          </a>
          <a
            href="mailto:abhishek.k040@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-slate-700/50 text-slate-300 hover:bg-slate-800/40 hover:border-slate-600 transition-all duration-200"
          >
            <Mail size={14} /> Contact
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {[
            { icon: <GithubIcon />, href: "https://github.com/abhishekkumar040", label: "GitHub" },
            { icon: <InstagramIcon />, href: "https://www.instagram.com/abhishek.media", label: "Instagram" },
            { icon: <YoutubeIcon />, href: "https://www.youtube.com/@abhishek.media", label: "YouTube" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-indigo-300 hover:border-indigo-500/40 hover:bg-indigo-950/40 transition-all duration-200"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
          <ChevronDown size={18} />
        </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────── */}
      <div className="border-y border-indigo-900/30 bg-indigo-950/20 backdrop-blur-sm py-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6 text-center">
          {[
            { value: 150, suffix: "K+", label: "Combined Audience", icon: <Users size={18} /> },
            { value: 96, suffix: "%", label: "ML Model Accuracy", icon: <Brain size={18} /> },
            { value: 74, suffix: "/10", label: "CGPA", icon: <Star size={18} /> },
            { value: 6, suffix: "+", label: "Certifications", icon: <Award size={18} /> },
            { value: 2027, suffix: "", label: "Grad. Year", icon: <GraduationCap size={18} /> },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div className="text-indigo-400">{s.icon}</div>
              <div className="text-2xl md:text-3xl font-black text-white">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="ABOUT" title="Two disciplines, one attention to detail." />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">4th-year Computer Science Engineering student</span>{" "}
                at Acharya Institute of Technology, Bengaluru, building skills in full-stack
                development and currently expanding into <span className="text-indigo-300 font-medium">DevOps</span>{" "}
                and <span className="text-indigo-300 font-medium">prompt engineering</span>.
              </p>
              <p>
                My flagship technical project detects phishing websites in real time — and instead
                of just flagging a link, it explains <span className="text-white font-medium">why</span> using
                Explainable AI, surfacing the exact signals (domain age, URL length) behind every
                prediction.
              </p>
              <p>
                Alongside the technical work, I'm also a{" "}
                <span className="text-violet-300 font-medium">photo & video journalist and media influencer</span>{" "}
                with a combined audience of <span className="text-white font-medium">150K+</span> across
                Instagram, YouTube, and Facebook, where I post daily content on{" "}
                <span className="text-indigo-300 font-medium">ABHISHEK.MEDIA</span>.
              </p>
              <div className="pt-2">
                <ResumeButton />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Code2 size={20} />, title: "Full-Stack Dev", desc: "HTML, CSS, JS, Python, React, Next.js" },
                { icon: <Brain size={20} />, title: "AI / ML", desc: "Explainable AI, SHAP, LIME, XGBoost" },
                { icon: <Shield size={20} />, title: "Security", desc: "Phishing detection, cybersecurity foundations" },
                { icon: <Camera size={20} />, title: "Media", desc: "150K+ audience, photo/video journalism" },
                { icon: <Cpu size={20} />, title: "DevOps", desc: "Docker, AWS, Linux, CI/CD" },
                { icon: <Globe size={20} />, title: "Deployment", desc: "Vercel, Netlify, Render, REST APIs" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-4 rounded-xl border border-indigo-900/40 bg-indigo-950/20 hover:border-indigo-500/30 hover:bg-indigo-950/40 transition-all duration-200"
                >
                  <div className="text-indigo-400 mb-2">{card.icon}</div>
                  <div className="text-white text-sm font-semibold mb-1">{card.title}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────── */}
      <section id="projects" className="py-24 px-6 bg-indigo-950/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="PROJECTS" title="Systems built to be understood, not just used." />
          <p className="text-slate-400 text-center -mt-6 mb-12 max-w-xl mx-auto">
            A selection of technical work — from ML security tooling to full-stack platforms.
          </p>

          {/* Main project card */}
          <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 to-slate-900/60 backdrop-blur-sm p-8 mb-6 hover:border-indigo-400/30 transition-all duration-300 shadow-xl shadow-indigo-900/10">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={18} className="text-indigo-400" />
                  <span className="text-xs text-indigo-400 font-bold tracking-widest uppercase">Featured Project</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Real-Time Phishing Website Detection
                </h3>
              </div>
              <a
                href="https://github.com/abhishekkumar040"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700/50 text-slate-400 hover:text-white text-xs transition-colors"
              >
                <GithubIcon /> Code
              </a>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">
              A machine learning system that analyzes URL, domain, and content-based features to
              catch zero-day phishing attacks that bypass traditional blacklists — with predictions
              explained in plain language via{" "}
              <span className="text-indigo-300 font-medium">SHAP and LIME</span>, not just a score.
              The system surfaces the exact signals (domain age, URL length, SSL status) behind
              every prediction, making AI decisions transparent and auditable.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { v: "96%", l: "Accuracy" },
                { v: "95%", l: "Precision" },
                { v: "94%", l: "Recall" },
                { v: "94%", l: "F1-Score" },
              ].map((m) => (
                <div
                  key={m.l}
                  className="text-center p-3 rounded-xl bg-indigo-950/60 border border-indigo-900/40"
                >
                  <div className="text-2xl font-black text-indigo-300">{m.v}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{m.l}</div>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {["Python", "Random Forest", "XGBoost", "SHAP / LIME", "Flask", "Explainable AI"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/20 text-indigo-200 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary project card */}
          <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-8 hover:border-indigo-500/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-2">
              <Globe size={18} className="text-violet-400" />
              <span className="text-xs text-violet-400 font-bold tracking-widest uppercase">Full-Stack</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Full-Stack Web Platform</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Built full-stack web applications using React/Next.js frontend with Prisma ORM and
              SQL backends. Designed responsive UIs with TypeScript, handled REST API integrations,
              and deployed via Vercel and Netlify with automated CI/CD pipelines.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Prisma", "SQLite", "REST APIs", "Vercel", "Netlify"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-300 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="SKILLS" title="Tools I reach for." />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: "Languages",
                icon: <Code2 size={16} />,
                skills: [
                  { label: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                  { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                  { label: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
                  { label: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                  { label: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                  { label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                ],
              },
              {
                category: "AI / ML",
                icon: <Brain size={16} />,
                skills: [
                  { label: "SHAP / LIME" },
                  { label: "Prompt Engineering" },
                  { label: "XGBoost" },
                  { label: "Random Forest" },
                  { label: "Explainable AI" },
                ],
              },
              {
                category: "Frameworks",
                icon: <Cpu size={16} />,
                skills: [
                  { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                  { label: "Next.js" },
                  { label: "FastAPI" },
                  { label: "Flask" },
                  { label: "Prisma" },
                ],
              },
              {
                category: "Tools & Cloud",
                icon: <Terminal size={16} />,
                skills: [
                  { label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                  { label: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
                  { label: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                  { label: "AWS" },
                  { label: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
                  { label: "REST APIs" },
                ],
              },
              {
                category: "Databases",
                icon: <TrendingUp size={16} />,
                skills: [
                  { label: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
                  { label: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                ],
              },
              {
                category: "Deployment",
                icon: <Globe size={16} />,
                skills: [
                  { label: "Vercel" },
                  { label: "Netlify" },
                  { label: "Render" },
                ],
              },
            ].map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl border border-indigo-900/30 bg-indigo-950/15 hover:border-indigo-500/20 hover:bg-indigo-950/25 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-indigo-400">{group.icon}</span>
                  <span className="text-white text-sm font-bold uppercase tracking-wider">{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <SkillChip key={s.label} label={s.label} icon={s.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE / BEYOND CODE ────────────────────────── */}
      <section id="experience" className="py-24 px-6 bg-indigo-950/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="BEYOND CODE" title="Other experience & achievements." />

          <div className="space-y-6">
            {[
              {
                badge: "MEDIA & CONTENT · ABHISHEK.MEDIA",
                badgeColor: "text-violet-400 border-violet-500/20 bg-violet-950/30",
                title: "Media Influencer & Photo/Video Journalist",
                desc: "150K+ combined audience across Instagram, YouTube, and Facebook, posting daily photo & video journalism content on ABHISHEK.MEDIA — followed by notable public figures.",
                icon: <Camera size={20} />,
                iconColor: "bg-violet-950/60 text-violet-400",
              },
              {
                badge: "CONTENT & PR",
                badgeColor: "text-indigo-400 border-indigo-500/20 bg-indigo-950/30",
                title: "Social Media Management",
                desc: "Managed social media presence and PR content for high-profile figures in film and entertainment — handling content creation, photography, and audience engagement end to end.",
                icon: <TrendingUp size={20} />,
                iconColor: "bg-indigo-950/60 text-indigo-400",
              },
              {
                badge: "COMPETITIVE BUILDING",
                badgeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-950/30",
                title: "Hackathons",
                desc: "Participated in multiple hackathons, collaborating with teams on technical problem-solving under real-time constraints.",
                icon: <Award size={20} />,
                iconColor: "bg-emerald-950/60 text-emerald-400",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 rounded-2xl border border-slate-800/50 bg-slate-900/30 hover:border-indigo-500/20 transition-all duration-200"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${item.iconColor}`}>
                  {item.icon}
                </div>
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border mb-2 ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────── */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="EDUCATION" title="Academic timeline." />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent hidden md:block" />

            <div className="space-y-8 md:pl-16">
              {[
                {
                  year: "2023 — 2027",
                  degree: "B.E. Computer Science & Engineering",
                  school: "Acharya Institute of Technology, Bengaluru",
                  detail: "CGPA: 7.4 · Currently in 4th year",
                  current: true,
                },
                {
                  year: "2021",
                  degree: "Class XII",
                  school: "Chauhan Public School, Bhagalpur",
                  detail: "65%",
                  current: false,
                },
                {
                  year: "2019",
                  degree: "Class X",
                  school: "Navyug Vidyalaya, Bhagalpur",
                  detail: "60%",
                  current: false,
                },
              ].map((edu, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[52px] top-5 w-4 h-4 rounded-full border-2 hidden md:block ${
                    edu.current ? "bg-indigo-500 border-indigo-300 shadow-lg shadow-indigo-500/50" : "bg-slate-700 border-slate-500"
                  }`} />

                  <div className={`p-6 rounded-2xl border transition-all duration-200 ${
                    edu.current
                      ? "border-indigo-500/30 bg-indigo-950/30 hover:border-indigo-400/40"
                      : "border-slate-800/50 bg-slate-900/20 hover:border-slate-700/60"
                  }`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-indigo-400 text-xs font-mono font-bold mb-1">{edu.year}</p>
                        <h3 className="text-white font-bold text-lg">{edu.degree}</h3>
                        <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {edu.current && (
                          <span className="px-2 py-0.5 rounded bg-green-900/30 border border-green-500/20 text-green-400 text-xs font-bold">
                            CURRENT
                          </span>
                        )}
                        <span className="text-indigo-300 font-bold text-sm">{edu.detail}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ─────────────────────────────────── */}
      <section id="certifications" className="py-24 px-6 bg-indigo-950/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="CERTIFICATIONS" title="Always compiling new skills." />

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                badge: "AWS",
                badgeBg: "bg-orange-500",
                title: "AWS Certified DevOps Engineer Professional (DOP-C02) — Cert Prep",
                issuer: "LinkedIn Learning",
                meta: "Completed Jul 2026 · 21h 27m",
              },
              {
                badge: "🛡️",
                badgeBg: "bg-indigo-600",
                title: "Foundations of Cybersecurity",
                issuer: "Google · Coursera",
                meta: "Certificate of completion",
              },
              {
                badge: "JS",
                badgeBg: "bg-yellow-500",
                title: "JavaScript Basics",
                issuer: "UC Davis · Coursera",
                meta: "Certificate of completion",
              },
              {
                badge: "☁️",
                badgeBg: "bg-blue-600",
                title: "Azure Administration Essential Training",
                issuer: "LinkedIn Learning",
                meta: "Completed Nov 2025 · 3h 21m",
              },
              {
                badge: "JR",
                badgeBg: "bg-cyan-600",
                title: "Agile Project Management with Jira Cloud: Projects, Boards & Issues",
                issuer: "LinkedIn Learning · PMI Registered Education Provider",
                meta: "Completed Oct 2025 · 1h 13m · 1.00 PDU",
              },
              {
                badge: "JR",
                badgeBg: "bg-cyan-700",
                title: "Learning Jira Software",
                issuer: "LinkedIn Learning · PMI Registered Education Provider",
                meta: "Completed Oct 2025 · 2h 7m · 2.00 PDUs",
              },
              {
                badge: "JR",
                badgeBg: "bg-cyan-800",
                title: "Jira: Basic Administration",
                issuer: "LinkedIn Learning",
                meta: "Completed Oct 2025 · 1h 24m",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className="flex gap-4 p-5 rounded-xl border border-slate-800/50 bg-slate-900/30 hover:border-indigo-500/20 hover:bg-indigo-950/20 transition-all duration-200"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg ${cert.badgeBg} flex items-center justify-center text-white text-xs font-black`}
                >
                  {cert.badge}
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold leading-snug mb-1">{cert.title}</h4>
                  <p className="text-indigo-400 text-xs mb-0.5">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs">{cert.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESUME CTA ─────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-10 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 to-slate-900/60 backdrop-blur-sm shadow-2xl shadow-indigo-900/20">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/30">
              <FileText size={24} className="text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-3">Want the full picture?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Download my resume as a professionally formatted PDF — all my skills, projects,
              education, and certifications in one clean document.
            </p>
            <ResumeButton />
            <p className="text-slate-600 text-xs mt-4">PDF · Auto-generated · Always up to date</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="border-t border-indigo-900/30 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono font-bold text-indigo-400 text-sm">
              AK<span className="text-white">_</span>
            </span>
            <span className="text-slate-600 text-xs">© 2025 Abhishek Kumar. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <GithubIcon />, href: "https://github.com/abhishekkumar040", label: "GitHub" },
              { icon: <InstagramIcon />, href: "https://www.instagram.com/abhishek.media", label: "Instagram" },
              { icon: <YoutubeIcon />, href: "https://www.youtube.com/@abhishek.media", label: "YouTube" },
              { icon: <Mail size={16} />, href: "mailto:abhishek.k040@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-300 hover:border-indigo-700 transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-slate-600" />
            <span className="text-slate-600 text-xs">Bengaluru, India</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-500 text-xs font-medium">Open to work</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
