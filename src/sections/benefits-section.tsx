"use client";
import { motion } from "framer-motion";
import { ActivityIcon, TrophyIcon, TargetIcon, ShieldCheckIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

const benefits = [
  {
    icon: <ActivityIcon weight="bold" className="w-7 h-7 text-primary" />,
    title: "BIOMETRIA AVANÇADA",
    tag: "Ciência",
    description: "Análise completa de performance e composição para otimizar seus resultados.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <TrophyIcon weight="bold" className="w-7 h-7 text-primary" />,
    title: "TREINADORES ELITE",
    tag: "Expertise",
    description: "Equipe preparada para levar seu corpo e mente ao limite absoluto.",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <TargetIcon weight="bold" className="w-7 h-7 text-primary" />,
    title: "FOCO EM RESULTADO",
    tag: "Mindset",
    description: "Metodologia comprovada para quem busca performance sem desculpas.",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <ShieldCheckIcon weight="bold" className="w-7 h-7 text-primary" />,
    title: "TECNOLOGIA 24H",
    tag: "Infra",
    description: "O que há de mais moderno em equipamentos mundiais à sua disposição.",
    img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
  }
];

const BenefitsSection = () => {
  return (
    <section id="Benefits" className="py-48 bg-black relative overflow-hidden">
      {/* Background Decors Refined */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.015] select-none">
        <p className="text-[35vw] font-black leading-none absolute -top-40 -left-40">DNA</p>
        <p className="text-[35vw] font-black leading-none absolute -bottom-40 -right-40 text-primary">ELITE</p>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="text-center mb-48 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6"
          >
            <span className="h-px w-16 bg-primary/20" />
            <p className="text-primary font-black tracking-[0.6em] uppercase text-[10px]">O Padrão de Performance</p>
            <span className="h-px w-16 bg-primary/20" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl md:text-[11rem] font-black uppercase text-white tracking-tighter leading-[0.75]"
          >
            NOSSO <br /> <span className="text-white/5 italic">ADN.</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-40 md:gap-64">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 lg:gap-32 group`}
            >
              <div className="flex-1 space-y-12">
                <div className="flex items-center gap-8">
                  <span className="text-primary/20 font-black text-6xl md:text-8xl italic group-hover:text-primary transition-all duration-700">0{index + 1}</span>
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="px-8 py-2.5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-white/60 transition-colors">{benefit.tag}</span>
                </div>
                
                <div className="space-y-8">
                  <div className="flex flex-col gap-4">
                     <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all duration-500 shadow-2xl">
                        <div className="group-hover:text-black transition-colors">{benefit.icon}</div>
                     </div>
                     <h3 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tight group-hover:text-primary transition-colors duration-500">
                       {benefit.title}
                     </h3>
                  </div>
                  <p className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed max-w-xl uppercase italic">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-8">
                   <button className="flex items-center gap-5 text-[11px] font-black uppercase tracking-[0.5em] text-primary group-hover:gap-10 transition-all duration-700 outline-none">
                      EXPLORAR DETALHES <ArrowRightIcon weight="bold" size={20} />
                   </button>
                </div>
              </div>

              <div className="flex-1 w-full relative">
                <div className="relative aspect-[4/5] lg:aspect-[16/10] rounded-[4.5rem] overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                   <Image 
                      src={benefit.img} 
                      alt={benefit.title} 
                      fill 
                      className="object-cover grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
                <div className={`absolute -z-10 ${index % 2 === 0 ? '-right-16' : '-left-16'} -bottom-16 w-80 h-80 bg-primary/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
