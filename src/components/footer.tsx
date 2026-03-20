"use client";
import { Link } from "@heroui/react";
import { motion } from "framer-motion";
import { 
  InstagramLogoIcon, 
  LinkedinLogoIcon, 
  YoutubeLogoIcon, 
  FacebookLogoIcon,
  LightningIcon,
  CaretUpIcon,
  MapPinIcon,
  PhoneIcon,
  GlobeIcon
} from "@phosphor-icons/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black pt-60 pb-16 relative overflow-hidden border-t border-white/5">
      
      {/* IMMENSE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <p className="text-[40vw] font-black leading-none uppercase tracking-tighter text-white/[0.02] whitespace-nowrap">
          STARKFIT
        </p>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        
        {/* Top Section: Brand Statement */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-40">
          <div className="space-y-12 max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-[2rem] shadow-[0_0_40px_rgba(255,0,0,0.3)] group cursor-pointer transition-transform hover:scale-110">
                <LightningIcon weight="fill" className="text-white w-8 h-8" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase italic">STARKFIT<span className="text-primary not-italic">.</span></h2>
            </div>
            <p className="text-4xl md:text-7xl font-black uppercase text-white leading-[0.85] tracking-tighter italic">
              CONSTRUINDO <br /> <span className="text-white/20 group-hover:text-primary transition-colors duration-700">O SEU LEGADO.</span>
            </p>
          </div>

          <div className="flex flex-col items-end gap-12 w-full lg:w-auto">
            <div className="flex gap-4">
              {[InstagramLogoIcon, YoutubeLogoIcon, FacebookLogoIcon, LinkedinLogoIcon].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -8, scale: 1.1, backgroundColor: "#FF0000", borderColor: "#FF0000" }}
                  className="w-16 h-16 rounded-[2rem] border border-white/10 flex items-center justify-center text-white/40 transition-all duration-300 bg-white/5 backdrop-blur-md shadow-2xl"
                >
                  <Icon weight="bold" size={28} />
                </motion.a>
              ))}
            </div>
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-6 text-white/20 hover:text-primary transition-colors duration-500"
            >
              <span className="text-[11px] font-black uppercase tracking-[0.6em] italic">Back to top</span>
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                <CaretUpIcon weight="bold" size={24} />
              </div>
            </button>
          </div>
        </div>

        {/* Middle Section: Links & Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 py-24 border-y border-white/5">
          <div className="space-y-10">
            <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.5em] italic">The Club</h4>
            <ul className="flex flex-col gap-5">
              {["A Academia", "Nossa Estrutura", "Treinadores Elite", "Galeria"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-xl font-bold text-white/40 hover:text-white transition-all uppercase italic tracking-tight">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.5em] italic">Join Us</h4>
            <ul className="flex flex-col gap-5">
              {["Planos de Acesso", "Treino Experimental", "Corporativo", "Portal do Aluno"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-xl font-bold text-white/40 hover:text-white transition-all uppercase italic tracking-tight">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col md:items-end justify-between">
             <div className="space-y-10 text-left md:text-right w-full">
                <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.5em] italic">Strategic Bases</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20">
                   <div className="space-y-3">
                      <p className="text-white font-black text-xl uppercase tracking-tighter italic">Alpha Base / SP</p>
                      <div className="flex items-start md:justify-end gap-3 text-white/30 italic">
                         <MapPinIcon weight="bold" size={16} className="text-primary mt-1" />
                         <p className="text-xs font-medium uppercase leading-relaxed">Rua Amauri, 300 <br /> Itaim Bibi, São Paulo</p>
                      </div>
                   </div>
                   <div className="space-y-3">
                      <p className="text-white font-black text-xl uppercase tracking-tighter italic">Delta Base / RJ</p>
                      <div className="flex items-start md:justify-end gap-3 text-white/30 italic">
                         <MapPinIcon weight="bold" size={16} className="text-primary mt-1" />
                         <p className="text-xs font-medium uppercase leading-relaxed">Av. das Américas, 5000 <br /> Barra, Rio de Janeiro</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Status */}
        <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
             <div className="space-y-1">
                <p className="text-[9px] font-black text-white/10 tracking-[0.5em] uppercase italic">System Copyright</p>
                <p className="text-xs font-black text-white/20 uppercase italic">© {currentYear} STARKFIT CLUB. All Rights Reserved.</p>
             </div>
             <div className="flex gap-10">
                <Link href="#" className="text-[10px] font-black text-white/10 hover:text-white transition-colors uppercase tracking-widest italic">Privacy Policy</Link>
                <Link href="#" className="text-[10px] font-black text-white/10 hover:text-white transition-colors uppercase tracking-widest italic">Terms of Service</Link>
             </div>
          </div>
          
          <div className="flex items-center gap-4 bg-primary/5 border border-primary/20 px-8 py-3 rounded-full backdrop-blur-sm">
             <GlobeIcon weight="bold" className="text-primary w-4 h-4 animate-spin-slow" />
             <p className="text-[10px] font-black text-primary tracking-[0.4em] uppercase italic">
               Global Elite Network Active
             </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
