import { Button } from "@/components/ui/button";
import BannerBackground from "@/assets/hero/banner2.png";

export default function HeroSection() {
  return (
    <section className="relative h-[760px]">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${BannerBackground})` }}
      />

      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-center px-[5%] h-full text-white">
        <h1 className="font-manrope max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl drop-shadow-md">
          Criando Experiências Corporativas Memoráveis
        </h1>
        <p className="font-manrope mt-4 max-w-2xl text-lg sm:text-xl drop-shadow-md">
          Soluções de eventos personalizadas que refletem sua marca, cultura e
          objetivos. Do conceito à execução, entregamos experiências que deixam
          impressões duradouras.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="font-manrope text-white font-semibold bg-gradient-to-r cursor-pointer from-[#00A6B6] to-[#007280] hover:from-[#0094A6] hover:to-[#005a63] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Solicitar Proposta
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-manrope border-white text-black cursor-pointer hover:bg-white/20 transition-all duration-300"
          >
            Conheça Nosso Trabalho
          </Button>
        </div>
      </div>
    </section>
  );
}
