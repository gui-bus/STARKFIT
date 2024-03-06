import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { SiVitest } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="w-full py-10">
      <div className="px-0 space-y-6 maxContainer">
        <div className="grid gap-4 md:px-10 lg:grid-cols-2 text-center px-5">
          <h1 className="lg:leading-tighter text-4xl font-black tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] uppercase">
            Energize o seu estilo de vida
          </h1>

          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Na SparkFit, estamos aqui para impulsionar o seu estilo de vida,
              oferecendo mais do que apenas um lugar para treinar.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-5 w-full px-5 mx-auto">
          <Button
            asChild
            variant={"outline"}
            size={"lg"}
            className="h-14 w-full"
          >
            <Link href="#">
              Agendar aula experimental <SiVitest size={20} className="ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            variant={"shadow"}
            size={"lg"}
            className="h-14 w-full"
          >
            <Link href="#">
              Ver planos de assinatura <FaStar size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
