"use client";
import { motion } from "framer-motion";
import { Link, Button } from "@heroui/react";
import { LightningIcon, ListIcon, UserIcon } from "@phosphor-icons/react";

const Links = [
  { txt: "A Academia", href: "/#About" },
  { txt: "Estrutura", href: "/#Benefits" },
  { txt: "Planos", href: "/#Membership" },
  { txt: "Suplementos", href: "/#Supplements" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-8">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-black/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 px-6 md:px-10 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(255,0,0,0.4)] group-hover:scale-110 transition-transform duration-300">
            <LightningIcon weight="fill" className="text-white w-6 h-6" />
          </div>
          <p className="font-black text-2xl md:text-3xl tracking-tighter text-white uppercase">
            STARK<span className="text-primary italic">FIT</span>
          </p>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-black tracking-[0.25em] text-white/40 hover:text-primary transition-all uppercase relative group"
            >
              {link.txt}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-8">
          <button className="hidden sm:flex items-center gap-2.5 text-white/40 hover:text-white transition-all duration-300 group">
             <UserIcon weight="bold" size={20} className="group-hover:text-primary transition-colors" />
             <span className="text-[10px] font-black tracking-widest uppercase">Portal</span>
          </button>
          
          <Button
            as={Link}
            href="#Membership"
            className="bg-white text-black font-black text-xs tracking-widest rounded-full px-8 h-12 hover:bg-primary hover:text-white transition-all uppercase shadow-lg active:scale-95"
          >
            MATRICULE-SE
          </Button>
          
          <button className="lg:hidden text-white hover:text-primary transition-colors p-2">
            <ListIcon weight="bold" size={32} />
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;

