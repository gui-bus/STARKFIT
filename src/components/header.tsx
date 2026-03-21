"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { LightningIcon, ListIcon, UserIcon, CaretDownIcon } from "@phosphor-icons/react";
import { useTranslations, useLocale } from "next-intl";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const Links = [
    { txt: t("about"), href: "/#About" },
    { txt: t("benefits"), href: "/#Benefits" },
    { txt: t("membership"), href: "/#Membership" },
    { txt: t("supplements"), href: "/#Supplements" },
  ];

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-8">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-background/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 px-6 md:px-10 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(156,209,90,0.4)] group-hover:scale-110 transition-transform duration-300">
            <LightningIcon weight="fill" className="text-black w-6 h-6" />
          </div>
          <p className="font-black text-2xl md:text-3xl tracking-tighter text-white uppercase leading-none">
            STARK<span className="text-primary italic">FIT</span>
          </p>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {Links.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="text-[11px] font-black tracking-[0.25em] text-white/40 hover:text-primary transition-all uppercase relative group"
            >
              {link.txt}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Language Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white/60 hover:text-white"
            >
              <ReactCountryFlag 
                countryCode={locale === 'pt' ? 'BR' : 'US'} 
                svg 
                style={{ width: '1.2em', height: '1.2em', borderRadius: '50%', objectFit: 'cover' }}
              />
              <CaretDownIcon weight="bold" size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full mt-3 right-0 bg-background/90 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl min-w-[120px]"
                >
                  <button 
                    onClick={() => handleLocaleChange('pt')}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${locale === 'pt' ? 'bg-primary text-black' : 'hover:bg-white/5 text-white/60 hover:text-white'}`}
                  >
                    <ReactCountryFlag countryCode="BR" svg />
                    <span className="text-[10px] font-black uppercase tracking-widest text-left">PT-BR</span>
                  </button>
                  <button 
                    onClick={() => handleLocaleChange('en')}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition-all mt-1 ${locale === 'en' ? 'bg-primary text-black' : 'hover:bg-white/5 text-white/60 hover:text-white'}`}
                  >
                    <ReactCountryFlag countryCode="US" svg />
                    <span className="text-[10px] font-black uppercase tracking-widest text-left">EN-US</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="hidden sm:flex items-center gap-2.5 text-white/40 hover:text-white transition-all duration-300 group">
             <UserIcon weight="bold" size={20} className="group-hover:text-primary transition-colors" />
             <span className="text-[10px] font-black tracking-widest uppercase">{t("portal")}</span>
          </button>
          
          <Button
            asChild
            className="bg-white text-black font-black text-xs tracking-widest rounded-full px-8 h-12 hover:bg-primary hover:text-white transition-all uppercase shadow-lg active:scale-95 border-none"
          >
            <Link href="#Membership">{t("register")}</Link>
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
