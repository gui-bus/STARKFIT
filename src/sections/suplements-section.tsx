"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FlaskIcon, MapPinIcon, LightningIcon, ShieldCheckIcon, ArrowRightIcon } from "@phosphor-icons/react";

const supplements = [
  { id: "FL-01", src: "/Supplement01.svg", txt: "PROTEÍNA ISOLADA", cat: "Massa Magra", type: "Pós-Treino", benefit: "Construção muscular acelerada e absorção rápida." },
  { id: "FL-02", src: "/Supplement02.svg", txt: "CREATINA PURA", cat: "Força Bruta", type: "Sistêmico", benefit: "Aumento de força explosiva e volume celular." },
  { id: "FL-03", src: "/Supplement03.svg", txt: "PRÉ-TREINO INSANE", cat: "Energia Máxima", type: "Ativador", benefit: "Foco extremo e vasodilatação para treinos intensos." },
  { id: "FL-04", src: "/Supplement04.svg", txt: "AMINOÁCIDOS BCAA", cat: "Recuperação", type: "Celular", benefit: "Redução da fadiga e preservação de tecido muscular." },
  { id: "FL-05", src: "/Supplement05.svg", txt: "OMEGA-3 ELITE", cat: "Saúde Vital", type: "Essencial", benefit: "Saúde cardiovascular e recuperação articular." },
  { id: "FL-06", src: "/Supplement06.svg", txt: "MULTIVITAMÍNICO", cat: "Otimização", type: "Metabólico", benefit: "Suporte imunológico e equilíbrio hormonal total." },
];

const SuplementsSection = () => {
  return (
    <section id="Supplements" className="py-48 bg-black relative overflow-hidden">
      
      {/* Title Area - Clean and Bold */}
      <div className="maxContainer mb-32">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-4 text-primary">
               <FlaskIcon weight="fill" size={24} />
               <span className="text-[11px] font-black uppercase tracking-[0.5em]">Curadoria StarkFit</span>
            </div>
            <h2 className="text-7xl md:text-[11rem] font-black uppercase text-white tracking-tighter leading-[0.8] font-sans">
              BIO <br /> <span className="text-white/10 italic">FUEL.</span>
            </h2>
          </div>
          <div className="max-w-md text-right space-y-8">
            <p className="text-white/40 text-2xl font-medium uppercase italic leading-tight">
              Ativos biológicos de alta densidade desenvolvidos para o limite humano.
            </p>
            <div className="flex items-center justify-end gap-4 text-primary bg-primary/5 p-6 rounded-3xl border border-primary/10 backdrop-blur-md shadow-2xl">
               <ShieldCheckIcon weight="bold" size={32} />
               <p className="text-[11px] font-black uppercase tracking-widest leading-relaxed text-left">
                 Protocolo de aquisição restrito <br /> <span className="text-white/60">Somente para Membros Ativos</span>
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase: Alternating Layout */}
      <div className="maxContainer mt-16 space-y-32">
        {supplements.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 group`}
          >
            {/* Image Area */}
            <div className="flex-1 relative w-full aspect-square lg:aspect-[4/5] overflow-hidden rounded-[5rem] border-8 border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
              <Image 
                src={item.src} 
                alt={item.txt} 
                fill 
                className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12">
                 <p className="text-4xl font-black text-white uppercase tracking-tighter italic">Item {item.id}</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 space-y-10">
              <div className="flex items-center gap-4 text-primary">
                 <LightningIcon weight="fill" size={20} />
                 <p className="text-sm font-black uppercase tracking-[0.5em]">Performance Lab</p>
              </div>
              <h3 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter">
                {item.txt}
              </h3>
              <p className="text-white/40 text-xl font-bold max-w-lg leading-relaxed uppercase italic">
                {item.benefit}
              </p>
              <div className="flex items-center gap-6">
                 <div className="flex flex-col items-start">
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Categoria</p>
                    <p className="text-lg font-black text-white uppercase">{item.cat}</p>
                 </div>
                 <div className="flex flex-col items-start">
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Tipo</p>
                    <p className="text-lg font-black text-white uppercase">{item.type}</p>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SuplementsSection;
