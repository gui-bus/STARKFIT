"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRightIcon, TrophyIcon } from "@phosphor-icons/react";
import Image from "next/image";

const FreeTraining = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="bg-primary rounded-[4.5rem] p-12 lg:p-28 relative overflow-hidden flex flex-col lg:flex-row items-center gap-20 shadow-[0_50px_100px_rgba(255,0,0,0.2)]">
          
          {/* Large background decorative text refined */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
            <p className="text-[30vw] font-black uppercase leading-none text-black tracking-tighter">WIN</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-12 relative z-10 text-black text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-4 px-8 py-2.5 rounded-full bg-black text-primary border border-black/10 shadow-2xl">
              <TrophyIcon weight="fill" className="w-6 h-6" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Convite de Elite</span>
            </div>
            
            <h2 className="text-6xl md:text-[7rem] font-black uppercase leading-[0.85] tracking-tighter">
              DOMINE A <br /> <span className="text-white drop-shadow-2xl">GRANDEZA.</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-bold max-w-xl leading-tight uppercase italic opacity-90 border-l-4 border-black/20 pl-8">
              Experimente 7 dias de imersão total no padrão StarkFit. Sem custos, apenas o peso.
            </p>

            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-neutral-900 text-xl font-black px-16 py-12 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group border-none uppercase tracking-widest"
            >
              RESGATAR ACESSO <ArrowRightIcon weight="bold" className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] bg-black rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white/5 group">
               <Image 
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                  alt="Elite Training" 
                  fill 
                  className="object-cover contrast-125 brightness-75 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeTraining;
