"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckIcon,
  LightningIcon,
  CrownIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";

const MembershipSection = () => {
  const t = useTranslations("Membership");

  const memberships = [
    {
      level: "01",
      name: t("plans.foundation.name"),
      price: "190",
      description: t("plans.foundation.description"),
      features: [
        t("plans.foundation.features.0"),
        t("plans.foundation.features.1"),
        t("plans.foundation.features.2"),
        t("plans.foundation.features.3"),
      ],
    },
    {
      level: "02",
      name: t("plans.standard.name"),
      price: "350",
      description: t("plans.standard.description"),
      features: [
        t("plans.standard.features.0"),
        t("plans.standard.features.1"),
        t("plans.standard.features.2"),
        t("plans.standard.features.3"),
        t("plans.standard.features.4"),
      ],
      popular: true,
    },
    {
      level: "03",
      name: t("plans.summit.name"),
      price: "800",
      description: t("plans.summit.description"),
      features: [
        t("plans.summit.features.0"),
        t("plans.summit.features.1"),
        t("plans.summit.features.2"),
        t("plans.summit.features.3"),
        t("plans.summit.features.4"),
      ],
    },
  ];

  return (
    <section id="Membership" className="py-48  relative overflow-hidden">
      {/* Background Mark Refined */}
      <div className="absolute top-1/2 left-0 w-full text-center pointer-events-none opacity-[0.01] select-none -translate-y-1/2">
        <p className="text-[20rem] md:text-[40rem] font-black leading-none uppercase tracking-tighter">
          ELITE
        </p>
      </div>

      <div className="w-full max-w-400 mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-5 text-primary">
              <span className="text-[11px] font-black uppercase tracking-[0.5em]">
                {t("tag")}
              </span>
              <div className="h-px w-24 bg-primary/30" />
            </div>
            <h2 className="text-7xl md:text-[11rem] font-black uppercase text-white tracking-tighter leading-[0.8]">
              {t("title1")} <br />{" "}
              <span className="text-white/5 italic">{t("title2")}</span>
            </h2>
          </motion.div>
          <p className="max-w-xs text-white/40 text-sm font-bold uppercase italic leading-relaxed text-right border-r-2 border-primary/20 pr-6">
            {t("description")}
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
                ${plan.popular ? "bg-primary z-20 shadow-[0_40px_120px_rgba(156,209,90,0.25)] scale-105 rounded-[4.5rem]" : "bg-white/5 hover:bg-white/[0.08] rounded-[3.5rem] lg:rounded-none first:rounded-l-[4.5rem] last:rounded-r-[4.5rem]"}
              `}
            >
              {plan.popular && (
                <div className="absolute top-10 right-10  text-white font-black text-[9px] px-5 py-2 tracking-widest rounded-full shadow-2xl uppercase">
                  {t("bestValue")}
                </div>
              )}

              <div className="space-y-14">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <span
                      className={`text-6xl font-black italic opacity-10 ${plan.popular ? "text-black" : "text-white"}`}
                    >
                      {plan.level}
                    </span>
                    <h3
                      className={`text-4xl font-black uppercase tracking-tighter ${plan.popular ? "text-black" : "text-white"}`}
                    >
                      {plan.name}
                    </h3>
                  </div>
                  <div
                    className={`p-4 rounded-2xl ${plan.popular ? "/10" : "bg-white/5 border border-white/10"}`}
                  >
                    {plan.popular ? (
                      <LightningIcon
                        weight="fill"
                        className="text-black w-8 h-8"
                      />
                    ) : (
                      <CrownIcon
                        weight="bold"
                        className="text-white/20 w-8 h-8"
                      />
                    )}
                  </div>
                </div>

                <div
                  className={`space-y-6 border-t pt-10 ${plan.popular ? "border-black/10" : "border-white/10"}`}
                >
                  <div
                    className={`flex items-baseline gap-2 ${plan.popular ? "text-black" : "text-white"}`}
                  >
                    <span className="text-sm font-black opacity-40 uppercase tracking-widest">
                      {t("currency")}
                    </span>
                    <span className="text-8xl font-black tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="text-sm font-black opacity-40 uppercase tracking-widest">
                      {t("month")}
                    </span>
                  </div>
                  <p
                    className={`text-[11px] font-bold uppercase tracking-widest leading-relaxed italic ${plan.popular ? "text-black/60" : "text-white/40"}`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-6">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className={`flex items-center gap-5 text-[11px] font-black uppercase tracking-widest ${plan.popular ? "text-black" : "text-white/70"}`}
                    >
                      <CheckIcon
                        weight="bold"
                        className={`w-4 h-4 ${plan.popular ? "text-black" : "text-primary"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-24">
                <Button
                  size="lg"
                  className={`w-full font-black text-[11px] tracking-[0.4em] uppercase h-20 rounded-full transition-all group-hover:scale-105 active:scale-95 border-none shadow-2xl
                    ${plan.popular ? " text-white hover:bg-neutral-900" : "bg-white text-black hover:bg-primary hover:text-white"}
                  `}
                >
                  {t("cta")}{" "}
                  <ArrowUpRightIcon weight="bold" className="ml-2 w-4 h-4" />
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
