import { Card, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";

const benefitsData = [
  {
    title: "Desenvolvimento Muscular",
    description:
      "Os treinos de resistência ajudam no desenvolvimento muscular, tonificando e fortalecendo diferentes grupos musculares para um corpo mais definido.",
    imageSrc: "/Benefits01.svg",
  },
  {
    title: "Resistência Cardiovascular",
    description:
      "Além do fortalecimento muscular, os exercícios cardiovasculares contribuem para uma melhor saúde do coração, aumentando a resistência cardiovascular.",
    imageSrc: "/Benefits02.svg",
  },
  {
    title: "Queima de Calorias",
    description:
      "A prática regular de exercícios de musculação auxilia na queima de calorias, favorecendo a perda de peso e a manutenção de uma composição corporal saudável.",
    imageSrc: "/Benefits03.svg",
  },
  {
    title: "Aumento da Autoestima",
    description:
      "Alcançar objetivos de treino e notar melhorias físicas ao longo do tempo pode impulsionar a autoestima, proporcionando uma imagem corporal mais positiva.",
    imageSrc: "/Benefits04.svg",
  },
  {
    title: "Redução do Estresse",
    description:
      "Os exercícios de musculação liberam endorfinas, reduzindo o estresse e proporcionando um alívio mental, permitindo lidar melhor com desafios diários.",
    imageSrc: "/Benefits05.svg",
  },
  {
    title: "Melhoria da Flexibilidade",
    description:
      "Além dos benefícios musculares, os exercícios regulares ajudam a melhorar a flexibilidade, proporcionando maior amplitude de movimento e prevenindo lesões.",
    imageSrc: "/Benefits06.svg",
  },
];

const BenefitsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto pt-10 lg:pt-20 pb-10">
      <div className="container grid gap-6 px-4 md:px-6 lg:gap-12">
        <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-3">
          <Chip
            className="uppercase text-white"
            color="warning"
            variant="shadow"
          >
            Conquiste uma Vida Ativa
          </Chip>
          <div className="flex flex-col xl:flex-row items-center justify-around text-center xl:text-start p-3 md:p-0 gap-5">
            <div className="flex flex-col items-start justify-start gap-3 xl:w-1/2">
              <h2 className="text-5xl font-light tracking-tighter uppercase">
                Desperte Seu <span className="font-black">Potencial Máximo</span>
              </h2>
            </div>

            <p className="text-base/relaxed font-light xl:w-1/2">
              Desafiamos você a superar seus limites. Mais do que uma academia,
              somos uma comunidade inspiradora e motivadora. Aqui, sua jornada
              fitness é única, cheia de desafios que impulsionam seus objetivos.
              Faça parte e descubra os benefícios transformadores do exercício.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {benefitsData.map((benefit) => (
            <Card
              isFooterBlurred
              className="border-none"
              key={benefit.title}
              isPressable
            >
              <Image
                alt={benefit.title}
                className="object-cover w-full h-full max-h-64"
                height={0}
                src={benefit.imageSrc}
                width={0}
                sizes="100vw"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute  bottom-0 w-[calc(100%)] shadow-small z-10 p-3">
                <div className="flex flex-col items-center justify-center gap-2">
                  <h3 className="text-white font-semibold">{benefit.title}</h3>
                  <p className="text-tiny text-white/80">
                    {benefit.description}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
