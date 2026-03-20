"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckIcon, LightningIcon, CrownIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

const memberships = [
  {
    level: "01",
    name: "FOUNDATION",
    price: "190",
    description: "Para quem está iniciando a construção do seu legado físico.",
    features: ["Acesso Ilimitado 24h", "Avaliação Mensal", "Área de Musculação", "Vestiários Premium"],
  },
  {
    level: "02",
    name: "STANDARD",
    price: "350",
    description: "O equilíbrio perfeito entre tecnologia e acompanhamento de elite.",
    features: ["Tudo do Foundation", "Aulas Coletivas", "Sauna & Spa", "Plano Nutricional", "Suporte Premium"],
    popular: true,
  },
  {
    level: "03",
    name: "SUMMIT",
    price: "800",
    description: "O nível máximo. Para quem exige exclusividade e performance absoluta.",
    features: ["Tudo do Standard", "Personal Trainer Exclusivo", "Fisioterapia In-Club", "Acesso Global", "Suplementação Mensal"],
  }
];

const MembershipSection = () => {
  return (
    <section id="Membership" className="py-48 bg-black relative overflow-hidden">
      
      {/* Background Mark Refined */}
      <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none opacity-[0.01] select-none -translate-y-1/2">
        <p className="text-[45vw] font-black leading-none uppercase tracking-tighter">ELITE</p>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5 text-primary">
              <span className="text-[11px] font-black uppercase tracking-[0.5em]">Membership Selection</span>
              <div className="h-px w-24 bg-primary/30" />
            </div>
            <h2 className="text-7xl md:text-[11rem] font-black uppercase text-white tracking-tighter leading-[0.8]">
              DOMINE SEU <br /> <span className="text-white/5 italic">NÍVEL.</span>
            </h2>
          </motion.div>
          <p className="max-w-xs text-white/40 text-sm font-bold uppercase italic leading-relaxed text-right border-r-2 border-primary/20 pr-6">
            Protocolos de acesso desenhados para cada estágio da sua evolução suprema.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-0">
          {memberships.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className={`relative flex-1 p-12 lg:p-16 flex flex-col justify-between transition-all duration-700 group
                ${plan.popular ? 'bg-primary z-20 shadow-[0_40px_120px_rgba(255,0,0,0.25)] scale-105 rounded-[4.5rem]' : 'bg-white/5 hover:bg-white/[0.08] rounded-[3.5rem] lg:rounded-none first:rounded-l-[4.5rem] last:rounded-r-[4.5rem]'}
              `}
            >
              {plan.popular && (
                <div className="absolute top-10 right-10 bg-black text-white font-black text-[9px] px-5 py-2 tracking-widest rounded-full shadow-2xl uppercase">
                  Best Value
                </div>
              )}

              <div className="space-y-14">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <span className={`text-6xl font-black italic opacity-10 ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.level}</span>
                    <h3 className={`text-4xl font-black uppercase tracking-tighter ${plan.popular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                  </div>
                  <div className={`p-4 rounded-2xl ${plan.popular ? 'bg-black/10' : 'bg-white/5 border border-white/10'}`}>
                    {plan.popular ? <LightningIcon weight="fill" className="text-black w-8 h-8" /> : <CrownIcon weight="bold" className="text-white/20 w-8 h-8" />}
                  </div>
                </div>

                <div className={`space-y-6 border-t pt-10 ${plan.popular ? 'border-black/10' : 'border-white/10'}`}>
                  <div className={`flex items-baseline gap-2 ${plan.popular ? 'text-black' : 'text-white'}`}>
                    <span className="text-sm font-black opacity-40 uppercase tracking-widest">R$</span>
                    <span className="text-8xl font-black tracking-tighter">{plan.price}</span>
                    <span className="text-sm font-black opacity-40 uppercase tracking-widest">/mês</span>
                  </div>
                  <p className={`text-[11px] font-bold uppercase tracking-widest leading-relaxed italic ${plan.popular ? 'text-black/60' : 'text-white/40'}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`flex items-center gap-5 text-[11px] font-black uppercase tracking-widest ${plan.popular ? 'text-black' : 'text-white/70'}`}>
                       <CheckIcon weight="bold" className={`w-4 h-4 ${plan.popular ? 'text-black' : 'text-primary'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-24">
                <Button 
                  size="lg" 
                  className={`w-full font-black text-[11px] tracking-[0.4em] uppercase h-20 rounded-full transition-all group-hover:scale-105 active:scale-95 border-none shadow-2xl
                    ${plan.popular ? 'bg-black text-white hover:bg-neutral-900' : 'bg-white text-black hover:bg-primary hover:text-white'}
                  `}
                >
                  SELECIONAR PROTOCOLO <ArrowUpRightIcon weight="bold" className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;

