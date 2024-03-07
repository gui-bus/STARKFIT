import { Button, Chip, Link } from "@nextui-org/react";
import { MdDiscount } from "react-icons/md";

const FreeTraining = () => {
  return (
    <section className="w-full py-16 my-10 bg-[url('/Free.svg')] bg-cover bg-center bg-no-repeat 3xl:rounded-2xl">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center lg:items-start lg:justify-start gap-3 text-white p-5 3xl:px-16">
        <Chip className="uppercase text-white" color="warning" variant="shadow">
          Aula Grátis
        </Chip>
        <div className="flex flex-col xl:flex-row items-center justify-around text-center xl:text-start p-3 md:p-0 gap-5">
          <div className="xl:w-1/2">
            <h2 className="text-5xl font-light tracking-tighter uppercase">
              Descubra a sua <span className="font-black">melhor versão</span>
            </h2>
          </div>

          <p className="text-base/relaxed font-light xl:w-1/2">
            Aventure-se em uma experiência única! Convidamos você a uma aula
            experimental gratuita, onde nossos treinadores e instalações premium
            criarão uma experiência transformadora. Desperte seu potencial,
            sinta a energia e dê os primeiros passos em direção a uma jornada
            fitness repleta de conquistas. Descubra um novo nível de bem-estar
            conosco!
          </p>
        </div>

        <div className="flex flex-col md:items-start md:justify-start items-center justify-center text-center md:text-start w-full gap-2">
          <Button
            as={Link}
            href="#"
            endContent={<MdDiscount size={25} />}
            variant="shadow"
            color="warning"
            radius="md"
            size="lg"
            className="uppercase text-white w-full mt-5"
          >
            Quero agendar minha aula
          </Button>
          <p className="text-xs font-light">
            Oferta válida apenas para novos clientes SPARKFIT. Consulte os{" "}
            <Link
              className="underline underline-offset-2 text-xs text-white"
              href="#"
            >
              termos e condições.
            </Link>{" "}
            para mais informações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeTraining;
