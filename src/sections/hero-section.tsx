import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { SiVitest } from "react-icons/si";

const HeroSection = () => {
  return (
    <section>
      <div className="flex flex-col xl:flex-row items-center justify-between gap-5 maxContainer">
        <Image
          alt="Hero"
          className="mx-auto overflow-hidden 3xl:rounded-b-2xl xl:rounded-br-2xl object-cover w-full xl:w-1/2 h-auto drop-shadow-xl"
          height={0}
          src="/HeroBanner.svg"
          width={0}
          sizes="100vw"
        />

        <div className="flex flex-col items-center justify-center md:px-10 text-center px-5 gap-10 xl:w-1/2">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="lg:leading-tighter font-black tracking-tighter text-4xl lg:text-6xl uppercase flex-1">
            Energize o seu estilo de vida
            </h1>
            <p className="mx-auto font-light flex-1">
              Na SparkFit, não somos apenas uma academia, somos o combustível
              para o seu bem-estar. Estamos aqui para impulsionar seu estilo de
              vida, oferecendo mais do que apenas um lugar para treinar.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-full">
            <Link href="#" className="w-full">
              <Button
                variant={"bordered"}
                size={"lg"}
                className="h-14 w-full uppercase"
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
      </div>
    </section>
  );
};

export default HeroSection;
