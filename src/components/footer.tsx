import React, { ReactNode } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedinIn,
  FaChevronRight,
  FaSitemap
} from "react-icons/fa6";
import { Button, Link } from "@nextui-org/react";

type ButtonSize = "sm" | "lg" | "md" | undefined;

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  size?: ButtonSize;
}

function SocialLink({ href, icon, size }: SocialLinkProps) {
  return (
    <Button size={size} variant={"shadow"} as={Link} href={href} target="_blank" className="h-14">
      {icon}
    </Button>
  );
}

interface FooterLinkProps {
  text: string;
}

function FooterLink({ text }: FooterLinkProps) {
  return (
    <p className="group flex cursor-pointer items-center justify-center gap-1">
      <span
        className="hidden group-hover:block group-hover:animate-spin text-warning"
        style={{ animationIterationCount: 1, animationDuration: "0.3s" }}
      >
        <FaChevronRight size={12} />
      </span>
      {text}
    </p>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const departments = [
    "Aulas de Fitness",
    "Equipamentos de Treino",
    "Programas de Treinamento",
    "Nutrição e Saúde",
    "Avaliação Física",
  ];

  const institucionals = [
    "Sobre a STARKFIT",
    "Termos e Condições",
    "Política de Inscrições",
    "Política de Privacidade",
    "Política de Cookies",
  ];

  const helps = [
    "Como Participar das Aulas",
    "Horários e Agendamentos",
    "Métodos de Pagamento",
    "Programa de Parcerias",
    "Perguntas Frequentes",
  ];

  return (
    <footer className="mx-auto w-full border-t border-input cursor-default items-center justify-center bg-white pt-8 shadow-xl md:px-0 3xl:max-w-7xl">
      <section className="flex flex-col items-center justify-around gap-y-4 px-4 pb-8 shadow-xl md:flex-row md:gap-y-0">
        <Link href="/">
          <Image
            src="/Logo.svg"
            alt="STARKFIT"
            width={200}
            height={50}
            style={{ objectFit: "contain" }}
            className="h-auto w-28"
          />
        </Link>

        <p className="text-sm">
          &copy; {currentYear} STARKFIT - Todos os direitos reservados.
        </p>

        <div className="flex gap-1">
          <SocialLink
            href="https://guibus.vercel.app/"
            icon={<FaSitemap size={25} />}
            size="sm"
          />
          <SocialLink
            href="https://www.linkedin.com/in/gui-bus"
            icon={<FaLinkedinIn size={25} />}
            size="sm"
          />
          <SocialLink
            href="https://github.com/gui-bus"
            icon={<FaGithub size={25} />}
            size="sm"
          />
        </div>
      </section>

      <div className="bg-zinc-200/60 px-4 py-6">
        <section className="mx-auto flex flex-col items-center justify-center gap-3 text-center text-xs md:flex-row">
          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Departamentos</h3>
            {departments.map((department, index) => (
              <FooterLink key={index} text={department} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Institucional</h3>
            {institucionals.map((institucional, index) => (
              <FooterLink key={index} text={institucional} />
            ))}
          </div>

          <div className="flex w-full flex-col gap-1">
            <h3 className="text-base font-medium uppercase">Dúvidas</h3>
            {helps.map((help, index) => (
              <FooterLink key={index} text={help} />
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
