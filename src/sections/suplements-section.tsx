import { Card, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";

const supplementsList = [
  {
    src: "/Supplement01.svg",
    txt: "Creatina",
  },
  {
    src: "/Supplement02.svg",
    txt: "Whey",
  },
  {
    src: "/Supplement03.svg",
    txt: "Pré-Treino",
  },
  {
    src: "/Supplement05.svg",
    txt: "Hipercalóricos",
  },
  {
    src: "/Supplement04.svg",
    txt: "Desempenho",
  },
  {
    src: "/Supplement06.svg",
    txt: "Barras de proteina",
  },
];

const SuplementsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center lg:items-start lg:justify-start gap-3 p-5 3xl:px-16">
        <Chip className="uppercase text-white" color="warning" variant="shadow">
          Loja de suplementos
        </Chip>
        <div className="flex flex-col xl:flex-row items-center justify-around text-center xl:text-start p-3 md:p-0 gap-5">
          <div className="xl:w-1/2">
            <h2 className="text-5xl font-light tracking-tighter uppercase">
              Suplementos para{" "}
              <span className="font-black">treinos de elite</span>
            </h2>
          </div>

          <p className="text-base/relaxed font-light xl:w-1/2">
            Explore o melhor em suplementos para aprimorar sua rotina de
            treinos. Temos uma seleção cuidadosa de opções para atender às suas
            necessidades, desde a preparação até a recuperação. Aproveite o
            suporte essencial para maximizar os benefícios de seus treinos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 select-none w-full">
          {supplementsList.map((supplement) => (
            <Card
              isFooterBlurred
              className="border-none group"
              isPressable
              key={supplement.src}
            >
              <Image
                alt={supplement.txt}
                className="object-cover w-full h-full max-h-64  filter grayscale group-hover:filter-none transition-all duration-200 ease-in-out"
                height={0}
                src={supplement.src}
                width={0}
                sizes="100vw"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute  bottom-0 w-[calc(100%)] shadow-small z-10 p-3 group-hover:invisible">
                <h3 className="text-white font-semibold mx-auto uppercase">
                  {supplement.txt}
                </h3>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-xs font-light">
          Para obter mais informações sobre preços e promoções, entre em contato
          conosco pelo WhatsApp ou visite nossa unidade física. Estamos à
          disposição para fornecer detalhes adicionais e auxiliar você na
          escolha dos melhores suplementos para alcançar seus objetivos de
          treino.
        </p>
      </div>
    </section>
  );
};

export default SuplementsSection;
