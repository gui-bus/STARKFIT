"use client";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlayIcon, ArrowRightIcon, ActivityIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Hero");
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden bg-background">
      
      {/* Cinematic Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Athlete Training" 
          fill 
          className="object-cover brightness-50 contrast-125 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
      </motion.div>

      {/* Floating Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-[35vw] font-black text-white leading-none whitespace-nowrap tracking-tighter"
        >
          {t("brand")}
        </motion.h2>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10 pt-20">
        <div className="max-w-5xl space-y-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5 text-left">
              <span className="w-16 h-0.5 bg-primary" />
              <span className="text-sm font-black tracking-[0.4em] text-primary uppercase italic">{t("tag")}</span>
            </div>
            
            <h1 className="text-6xl md:text-[11rem] font-black leading-[0.8] tracking-tighter text-white uppercase text-left">
              {t("title")} <br />
              <span className="text-primary drop-shadow-[0_0_40px_rgba(156,209,90,0.3)]">{t("subtitle")}</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-white/60 font-medium max-w-2xl leading-tight uppercase italic border-l-4 border-primary/20 pl-8 text-left"
          >
            {t("description")}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-8 items-center pt-4"
          >
            <Button size="lg" className="bg-primary text-white font-black text-sm tracking-widest px-14 py-10 rounded-full hover:bg-lime-600 transition-all shadow-[0_15px_50px_-10px_rgba(156,209,90,0.5)] active:scale-95 border-none uppercase">
              {t("cta")}
            </Button>
            <button className="flex items-center gap-5 group outline-none">
              <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl">
                <PlayIcon weight="fill" className="text-white w-8 h-8 ml-1" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">{t("gallery")}</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Side Floating Info Refined */}
      <div className="absolute right-16 bottom-32 hidden 2xl:block space-y-12">
         <div className="flex items-center gap-8 text-right group">
            <div className="space-y-1 text-right">
               <p className="text-4xl font-black text-white leading-none tracking-tighter group-hover:text-primary transition-colors uppercase">{t("hours24")}</p>
               <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{t("available")}</p>
            </div>
            <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
               <ActivityIcon weight="bold" className="text-primary w-7 h-7" />
            </div>
         </div>
         <div className="flex items-center gap-8 text-right group">
            <div className="space-y-1 text-right">
               <p className="text-4xl font-black text-white leading-none tracking-tighter group-hover:text-primary transition-colors">+250</p>
               <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{t("machines")}</p>
            </div>
            <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
               <ArrowRightIcon weight="bold" className="text-primary w-7 h-7 -rotate-45" />
            </div>
         </div>
      </div>

      {/* Animated Bottom Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 rounded-full border-2 border-white/10 flex justify-center p-2.5">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(156,209,90,0.8)]" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
