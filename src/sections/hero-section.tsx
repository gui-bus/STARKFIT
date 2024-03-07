import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { SiVitest } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="bg-[url('/HeroBanner.svg')] bg-cover bg-center bg-no-repeat py-10 lg:py-20 3xl:rounded-b-2xl">
      <div className="flex flex-col items-center justify-center gap-5 text-white w-full max-w-5xl mx-auto text-center p-5">
        <h1 className="lg:leading-tighter font-black text-5xl lg:text-8xl uppercase flex-1 tracking-tighter">
          Energize o seu estilo de vida
        </h1>
        <p className="font-light flex-1 max-w-4xl">
          Na SparkFit, não somos apenas uma academia, somos o combustível para o
          seu bem-estar. Estamos aqui para impulsionar seu estilo de vida,
          oferecendo mais do que apenas um lugar para treinar.
        </p>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-5 w-full">
          <Link href="#" className="w-full">
            <Button
              variant={"bordered"}
              size={"lg"}
              className="h-14 w-full uppercase text-white"
              endContent={<SiVitest size={20} />}
              radius="sm"
            >
              Experimente uma Aula
            </Button>
          </Link>

          <Link href="#" className="w-full">
            <Button
              variant={"shadow"}
              color="warning"
              size={"lg"}
              className="h-14 w-full uppercase text-white"
              endContent={<FaStar size={20} />}
              radius="sm"
            >
              Conheça Nossos Planos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
