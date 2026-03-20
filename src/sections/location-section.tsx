"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, Star, Globe } from "lucide-react";
import Image from "next/image";

const locations = [
  {
    city: "SÃO PAULO",
    neighborhood: "ITAIM BIBI",
    address: "Rua Amauri, 300",
    phone: "+55 (11) 3333-3333",
    tag: "Flagship"
  },
  {
    city: "RIO DE JANEIRO",
    neighborhood: "BARRA DA TIJUCA",
    address: "Av. das Américas, 5000",
    phone: "+55 (21) 4444-4444",
    tag: "Base Delta"
  },
];

const LocationSection = () => {
  return (
    <section className="py-40 bg-black relative border-t border-white/5 overflow-hidden">
      
      {/* Cinematic Background Map Overlay */}
      <div className="absolute inset-0 opacity-[0.05] grayscale pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <Globe size={20} className="animate-spin-slow" />
                <span className="text-xs font-black uppercase tracking-[0.5em]">Expansão Global</span>
              </div>
              <h2 className="text-7xl md:text-[9rem] font-black uppercase text-white leading-[0.85] tracking-tighter">
                ONDE A <br /> <span className="text-primary italic">ELITE TREINA.</span>
              </h2>
              <p className="text-white/40 text-xl md:text-2xl font-medium leading-relaxed max-w-lg uppercase italic">
                Localizações estratégicas nos bairros mais prestigiados, com a infraestrutura definitiva.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {locations.map((loc, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 20 }}
                  className="group flex items-center justify-between p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:border-primary transition-all duration-500 cursor-pointer shadow-2xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <span className="px-3 py-1 bg-primary text-black text-[8px] font-black uppercase tracking-widest rounded-sm">{loc.tag}</span>
                       <p className="text-primary font-bold tracking-widest text-xs uppercase italic">{loc.neighborhood}</p>
                    </div>
                    <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">{loc.city}</h3>
                    <div className="space-y-1">
                      <p className="flex items-center gap-3 text-white/40 text-sm font-bold uppercase tracking-widest italic">
                        <MapPin size={14} className="text-primary" /> {loc.address}
                      </p>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-black transition-all">
                     <ArrowRight size={24} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-[4/5] bg-[#080808] rounded-[5rem] border-8 border-white/5 overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,0,0,0.2)]">
               <Image 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2070&auto=format&fit=crop" 
                  alt="Elite Unit Interior" 
                  fill 
                  className="object-cover brightness-50 contrast-125 grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="p-10 rounded-full border-2 border-primary/20 backdrop-blur-md bg-black/40">
                      <Star className="text-primary w-12 h-12 fill-primary" />
                   </div>
                </div>
                <div className="absolute bottom-16 left-12 right-12 text-center space-y-2">
                   <p className="text-primary font-black tracking-[0.5em] text-[10px] uppercase">Conexão Premium</p>
                   <p className="text-white text-2xl font-black uppercase italic tracking-tighter">Sincronizando Localização...</p>
                </div>
            </div>
            {/* Soft decorative background glow */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
