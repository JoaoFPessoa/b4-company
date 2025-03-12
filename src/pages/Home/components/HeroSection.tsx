import { Button } from "@/components/ui/button";
import BannerBackground from "@/assets/hero/banner2.png";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#005f73]/90 to-[#005f73]/10  z-10" />
      <div className="relative  h-[760px]">
        <img
          src={BannerBackground}
          alt="Corporate event"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="px-[5%]  absolute inset-0 z-20 flex flex-col items-start justify-center text-white">
        <h1 className="font-manrope max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Criando Experiências Corporativas Memoráveis
        </h1>
        <p className="font-manrope mt-4 max-w-2xl text-lg sm:text-xl">
          Soluções de eventos personalizadas que refletem sua marca, cultura e
          objetivos. Do conceito à execução, entregamos experiências que deixam
          impressões duradouras.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="font-manrope text-white font-semibold bg-gradient-to-r from-[#008B99] to-[#005f73] hover:from-[#007280] hover:to-[#004a5a] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer"
          >
            Solicitar Proposta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-manrope cursor-pointer border-white text-black "
          >
            Conheça Nosso Trabalho
          </Button>
        </div>
      </div>
    </section>
  );
}
