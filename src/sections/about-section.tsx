"use client";
import { motion } from "framer-motion";
import { UsersIcon, BuildingsIcon, LightningIcon, TargetIcon, GlobeIcon } from "@phosphor-icons/react";
import Image from "next/image";

const stats = [
  { label: "Membros Elite", value: "5k+", icon: <UsersIcon weight="bold" className="w-6 h-6 text-primary" /> },
  { label: "Unidades Globais", value: "12", icon: <GlobeIcon weight="bold" className="w-6 h-6 text-primary" /> },
  { label: "Performance Máxima", value: "100%", icon: <LightningIcon weight="bold" className="w-6 h-6 text-primary" /> },
  { label: "Foco Absoluto", value: "Padrão", icon: <TargetIcon weight="bold" className="w-6 h-6 text-primary" /> },
];

const AboutSection = () => {
  return (
    <section id="About" className="py-48 bg-background overflow-hidden relative">
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 w-full aspect-[4/5] bg-white/5 rounded-[4.5rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
               <Image 
                  src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop" 
                  alt="Elite Culture" 
                  fill 
                  className="object-cover contrast-125 brightness-50 grayscale hover:grayscale-0 transition-all duration-1000 group"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                   <p className="text-8xl font-black text-white/5 uppercase select-none leading-none mb-6 tracking-tighter">DISCIPLINE</p>
                   <div className="px-8 py-3 rounded-full border border-primary/30 backdrop-blur-md bg-primary/5 shadow-2xl">
                      <p className="text-sm font-black text-primary italic uppercase tracking-[0.5em]">O Legado é a Força</p>
                   </div>
                </div>
            </div>
            <div className="absolute -top-12 -left-12 w-48 h-48 border-t-2 border-l-2 border-primary/30 rounded-tl-[4.5rem]" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 border-b-2 border-r-2 border-primary/30 rounded-br-[4.5rem]" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16 order-1 lg:order-2"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-primary">
                 <GlobeIcon weight="bold" size={24} className="animate-spin-slow" />
                 <span className="text-[11px] font-black uppercase tracking-[0.5em]">Cultura Global Stark</span>
              </div>
              <h2 className="text-7xl md:text-[9.5rem] font-black uppercase text-white leading-[0.8] tracking-tighter">
                ALÉM DA <br /> <span className="text-primary italic">BIOLOGIA.</span>
              </h2>
              <p className="text-2xl text-white/60 font-medium leading-relaxed uppercase italic border-l-4 border-primary pl-10">
                A StarkFit é um laboratório de evolução. Nossos membros não buscam apenas estética, buscam o ápice do potencial humano através de esforço bruto.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/5 hover:border-primary/30 transition-all duration-500 group shadow-2xl">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="p-3.5 bg-background rounded-2xl border border-white/10 group-hover:bg-primary transition-all duration-500 shadow-xl group-hover:scale-110">
                       <div className="group-hover:text-black transition-colors">{stat.icon}</div>
                    </div>
                    <p className="text-4xl font-black text-white tracking-tighter uppercase leading-none">{stat.value}</p>
                  </div>
                  <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 group-hover:text-primary transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="pt-10">
               <button className="flex items-center gap-6 group outline-none">
                  <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-2xl">
                     <ArrowRightIcon weight="bold" size={24} className="text-primary group-hover:text-black transition-colors" />
                  </div>
                  <div className="space-y-1">
                     <p className="text-white font-black italic uppercase tracking-widest leading-none text-lg">Saiba mais sobre nós</p>
                     <div className="h-px w-full bg-white/10 group-hover:bg-primary transition-colors" />
                  </div>
               </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
