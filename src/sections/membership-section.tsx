import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, Chip, Link } from "@nextui-org/react";
import { CheckIcon } from "lucide-react";
import { SiVitest } from "react-icons/si";

const basicMembership = {
  title: "SPARK BASIC",
  description: "Ideal para começar com o pé direito.",
  items: [
    "Acesso ilimitado a todas as áreas de treino.",
    "Aulas exclusivas com instrutores renomados.",
    "Plano de nutrição personalizado.",
    "Monitoramento contínuo do seu progresso.",
    "Acesso a eventos exclusivos da comunidade fitness.",
    "Descontos em produtos de nossa loja de suplementos.",
    "Aulas de ioga e meditação sem custo adicional.",
  ],
  price: "A partir de $89,90/mês",
};

const proMembership = {
  title: "SPARK PRO",
  description:
    "Para os verdadeiramente comprometidos com a transformação física.",
  items: [
    "Todos os benefícios do plano SPARK BASIC.",
    "Treinos personalizados com nossos especialistas.",
    "Acesso prioritário a novos equipamentos e instalações.",
    "Descontos exclusivos em serviços de nutrição.",
    "Assessoria personalizada para metas específicas.",
    "Acesso a eventos especiais da comunidade fitness.",
    "Treinos virtuais guiados por instrutores renomados.",
  ],
  price: "A partir de $129,90/mês",
};

const MembershipSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 max-w-7xl mx-auto">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <Chip
            className="uppercase text-white"
            color="warning"
            variant="shadow"
          >
            Planos de assinatura
          </Chip>
          <h2 className="text-5xl font-light tracking-tighter uppercase">
            Escolha Seu Plano e{" "}
            <span className="font-black">Transforme Sua Vida</span>
          </h2>
          <p className="text-base/relaxed font-light">
            Sua jornada para um estilo de vida mais saudável começa aqui.
            Escolha a associação que se adapta aos seus objetivos e desfrute do
            acesso às nossas instalações modernas, treinadores especializados e
            uma comunidade de apoio.
          </p>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 mx-auto"></p>
        </div>
        <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16 w-full max-w-7xl mx-auto">
          <Card>
            <CardHeader className="pb-6">
              <CardTitle>{basicMembership.title}</CardTitle>
              <CardDescription>{basicMembership.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <ul className="grid gap-2">
                {basicMembership.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-4xl font-bold text-center">
                {basicMembership.price}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                as={Link}
                href="#"
                variant={"bordered"}
                size={"lg"}
                className="h-14 w-full uppercase"
                endContent={<SiVitest size={20} />}
                radius="sm"
              >
                Escolher Plano BASIC
              </Button>
            </CardFooter>
          </Card>
          <Card className="border-2 border-warning">
            <CardHeader className="pb-6">
              <CardTitle>{proMembership.title}</CardTitle>
              <CardDescription>{proMembership.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <ul className="grid gap-2">
                {proMembership.items.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-4xl font-bold text-center">
                {proMembership.price}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                as={Link}
                href="#"
                variant={"shadow"}
                size={"lg"}
                color="warning"
                className="h-14 w-full uppercase text-white"
                endContent={<SiVitest size={20} />}
                radius="sm"
              >
                Escolher Plano PRO
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
