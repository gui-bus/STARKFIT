"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FlaskIcon,
  MapPinIcon,
  LightningIcon,
  ShieldCheckIcon,
  InfoIcon,
} from "@phosphor-icons/react";

const supplements = [
  {
    id: "01",
    src: "/Supplement01.svg",
    txt: "PROTEÍNA ISOLADA",
    cat: "Massa Magra",
    type: "Pós-Treino",
  },
  {
    id: "02",
    src: "/Supplement02.svg",
    txt: "CREATINA PURA",
    cat: "Força Bruta",
    type: "Sistêmico",
  },
  {
    id: "03",
    src: "/Supplement03.svg",
    txt: "PRÉ-TREINO INSANE",
    cat: "Energia Máxima",
    type: "Ativador",
  },
  {
    id: "04",
    src: "/Supplement04.svg",
    txt: "AMINOÁCIDOS BCAA",
    cat: "Recuperação",
    type: "Celular",
  },
  {
    id: "05",
    src: "/Supplement05.svg",
    txt: "OMEGA-3 ELITE",
    cat: "Saúde Vital",
    type: "Essencial",
  },
  {
    id: "06",
    src: "/Supplement06.svg",
    txt: "MULTIVITAMÍNICO",
    cat: "Otimização",
    type: "Metabólico",
  },
];

const SuplementsSection = () => {
  return (
    <section
      id="Supplements"
      className="py-32  relative overflow-hidden border-t border-white/5"
    >
      <div className="w-full max-w-400 mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        {/* Compact Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-10">
          <div className="text-center lg:text-left space-y-4">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-primary">
              <FlaskIcon weight="fill" size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.5em]">
                StarkFit Curations
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none font-sans">
              BIO <span className="text-white/10 italic">FUEL.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/10 backdrop-blur-md">
            <ShieldCheckIcon weight="bold" size={32} className="text-primary" />
            <p className="text-[11px] font-black uppercase tracking-widest text-white/40 leading-tight">
              Protocolos exclusivos <br />{" "}
              <span className="text-white/80">Somente para membros</span>
            </p>
          </div>
        </div>

        {/* Tactical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative  border border-white/5 rounded-[3rem] p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-2xl h-[450px]"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start z-10">
                <span className="text-primary/20 font-black text-4xl italic group-hover:text-primary transition-colors">
                  {item.id}
                </span>
                <div className="text-right">
                  <p className="text-primary font-black text-[9px] tracking-widest uppercase italic">
                    {item.cat}
                  </p>
                  <p className="text-white/20 text-[8px] font-black uppercase tracking-widest">
                    {item.type}
                  </p>
                </div>
              </div>

              {/* Product Image Area */}
              <div className="relative flex-1 flex items-center justify-center py-4">
                <div className="absolute inset-0 bg-primary/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-75" />
                <Image
                  src={item.src}
                  alt={item.txt}
                  width={200}
                  height={200}
                  className="object-contain z-10 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700 drop-shadow-2xl"
                />
              </div>

              {/* Product Footer Info */}
              <div className="pt-6 border-t border-white/5 z-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                  {item.txt}
                </h3>
                <div className="flex items-center gap-2 mt-2 opacity-40">
                  <MapPinIcon
                    weight="bold"
                    size={12}
                    className="text-primary"
                  />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white italic">
                    Base Pickup Only
                  </span>
                </div>
              </div>

              {/* Decorative Corner Decor */}
              <div className="absolute bottom-4 right-8 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                <LightningIcon weight="fill" size={80} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimalist Note */}
        <div className="mt-20 flex flex-col items-center gap-6 text-center">
          <div className="h-px w-20 bg-primary/30" />
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.6em] italic">
            Consulte nossos especialistas para protocolos individualizados
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuplementsSection;
