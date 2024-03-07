"use client";
import { CardBody, Chip, Card } from "@nextui-org/react";
import { DumbbellIcon, TrainTrackIcon } from "lucide-react";
import { GrYoga } from "react-icons/gr";
import { GiLockers } from "react-icons/gi";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { PiHandHeartFill } from "react-icons/pi";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Tb24Hours } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

const cardsData = [
  {
    icon: <Tb24Hours className="mx-auto h-8 w-8" />,
    title: "Acesso 24 Horas",
    description:
      "Adapte seu treino ao seu próprio ritmo. Com acesso 24 horas, nossa academia está sempre pronta para atender às suas necessidades, a qualquer momento.",
  },
  {
    icon: <DumbbellIcon className="mx-auto h-8 w-8" />,
    title: "Treinos Personalizados",
    description:
      "Nossos treinadores especializados criarão um plano de exercícios personalizado adaptado ao seu nível e objetivos.",
  },
  {
    icon: <TrainTrackIcon className="mx-auto h-8 w-8" />,
    title: "Equipamentos Modernos",
    description:
      "Você terá acesso a equipamentos de qualidade sem igual, desde máquinas modernas até pesos livres, para potencializar seus treinos.",
  },
  {
    icon: <PiHandHeartFill className="mx-auto h-8 w-8" />,
    title: "Espaços Multifuncionais",
    description:
      "Explore espaços multifuncionais, adaptados para diversos tipos de treinos,  proporcionando versatilidade em seus exercícios.",
  },

  {
    icon: <FaUsers className="mx-auto h-8 w-8" />,
    title: "Comunidade Vibrante",
    description:
      "Junte-se a uma comunidade de entusiastas da musculação que compartilham sua paixão pela saúde e bem-estar.",
  },
  {
    icon: <GrYoga className="mx-auto h-8 w-8" />,
    title: "Espaço para Relaxamento",
    description:
      "Equilibre seu treino com momentos de relaxamento. Nosso espaço dedicado para yoga e meditação oferece um ambiente tranquilo para recarregar suas energias.",
  },
  {
    icon: <FaHandHoldingMedical className="mx-auto h-8 w-8" />,
    title: "Assistência Médica",
    description:
      "Sua segurança é nossa prioridade. Contamos com assistência médica disponível para atender a quaisquer necessidades emergenciais durante seus treinos.",
  },
  {
    icon: <GiLockers className="mx-auto h-8 w-8" />,
    title: "Armazenamento Seguro",
    description:
      "Mantenha seus pertences seguros enquanto treina. Oferecemos áreas de armazenamento seguras para sua conveniência durante as sessões de exercício.",
  },
];

const AboutSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full 3xl:rounded-2xl">
      <div className="flex flex-col items-center justify-center text-center p-5  gap-5 w-full max-w-7xl mx-auto">
        <div className="space-y-4">
          <Chip
            className="uppercase text-white"
            color="warning"
            variant="shadow"
          >
            Conheça a sparkfit
          </Chip>

          <div className="space-y-6">
            <h2 className="text-3xl/relaxed font-bold tracking-tighter sm:text-5xl uppercase">
              Sua Jornada Fitness Começa Aqui
            </h2>
            <p className="md:text-xl/relaxed lg:text-base/relaxed font-light">
              Na nossa academia, acreditamos que você vai além dos limites. Não
              somos apenas um espaço de exercícios, somos uma comunidade que
              inspira e motiva. Aqui, sua jornada fitness é única, com desafios
              que impulsionam seus objetivos. Junte-se a nós e vá além na busca
              pela sua melhor forma.
            </p>
          </div>
        </div>

        <Carousel
          className=" w-full text-center"
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="cursor-grab active:cursor-grabbing">
            {cardsData.map((card, index) => (
              <CarouselItem key={index} className="lg:basis-1/2 p-5">
                <Card className="hover:scale-[1.01] transition-all duration-200 ease-in-out select-none">
                  <CardBody className="p-4 md:p-6">
                    <div className="flex items-center justify-center gap-5">
                      <span>{card.icon}</span>
                      <h3 className="text-md font-bold tracking-tight md:text-base">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 md:text-base lg:text-sm/relaxed lg:line-clamp-2 mt-3">
                      {card.description}
                    </p>
                  </CardBody>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
              <CarouselPrevious />
            </div>

            <p className="text-sm font-light">
              {current}/{count}
            </p>

            <div className="left-1/2 top-3 -translate-x-1/2 -translate-y-1/2 transform">
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default AboutSection;
