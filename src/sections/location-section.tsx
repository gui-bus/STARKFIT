import { Chip } from "@nextui-org/react";
import Image from "next/image";
import { HiClock, HiMapPin, HiPhone, HiStar } from "react-icons/hi2";

const LocationSection = () => {
  return (
    <section className="w-full 3xl:max-w-7xl mx-auto py-12 lg:mt-20 flex flex-col items-center justify-around lg:flex-row mx:px-0 gap-10 px-5 xl:px-0 bg-[#1A1A1A] 3xl:rounded-t-2xl text-white">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <Image
          src="/Gallery.svg"
          alt="Galeria de imagens da SPARKFIT"
          sizes="100vw"
          height={0}
          width={0}
          className="w-full h-auto lg:max-h-[30rem] aspect-square"
        />

        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <Chip
              className="uppercase text-white"
              color="warning"
              variant="shadow"
            >
              Visite-nos
            </Chip>
            <h3 className="font-black text-6xl select-none cursor-default text-white">
              STARK<span className="text-warning">FIT</span>
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium flex items-center gap-2 uppercase mb-3">
                <HiMapPin size={25} />
                Endereço
              </h3>
              <p className="text-sm leading-relaxed text-white">
                Rua das Acácias, 1426, SJC - SP
              </p>
              <p className="text-sm leading-relaxed font-light text-white/60">
                Localizado no coração da cidade, nossa academia é facilmente
                acessível e está próximo a diversas comodidades locais.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium flex items-center gap-2 uppercase mb-3">
                <HiPhone size={25} />
                Contato
              </h3>
              <p className="text-sm leading-relaxed text-white">
                (12) 99999-9999
              </p>
              <p className="text-sm leading-relaxed font-light text-white/60">
                Entre em contato conosco para mais informações sobre nossos
                serviços, programas e promoções exclusivas.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium flex items-center gap-2 uppercase mb-3">
                <HiClock size={25} />
                Funcionamento
              </h3>
              <p className="text-sm leading-relaxed text-white">
                Segunda à Domingo - 24h/dia
              </p>
              <p className="text-sm leading-relaxed font-light text-white/60">
                Possuimos um horário de funcionamento 24/7, permitindo que você
                treine no momento que for mais conveniente.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-medium flex items-center gap-2 uppercase mb-3">
                <HiStar size={25} />
                Facilidades
              </h3>
              <p className="text-sm leading-relaxed text-white">
                Estacionamento e Wi-fi gratuitos
              </p>
              <p className="text-sm leading-relaxed font-light text-white/60">
                Nossas instalações incluem estacionamento e acesso Wi-Fi
                gratuito para garantir que você esteja sempre conectado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
