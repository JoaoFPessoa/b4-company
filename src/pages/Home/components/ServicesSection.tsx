import ServiceCard from "./ServiceCard";
import {
  Users,
  Calendar,
  Sparkles,
  Lightbulb,
  GraduationCap,
  PartyPopper,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 flex justify-center bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#20B2AA]">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos especializados em criar experiências de eventos personalizadas
            e completas, adaptadas às necessidades únicas de cada cliente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Users className="h-10 w-10 text-[#20B2AA]" />}
            title="Eventos de Experiência Corporativa"
            description="Criamos experiências significativas para equipes que fortalecem a cultura da empresa e promovem a colaboração."
          />
          <ServiceCard
            icon={<Calendar className="h-10 w-10 text-[#20B2AA]" />}
            title="Happy Hours"
            description="Eventos de networking casuais, mas sofisticados, projetados para aumentar o moral da equipe e construir relacionamentos."
          />
          <ServiceCard
            icon={<Sparkles className="h-10 w-10 text-[#20B2AA]" />}
            title="Lançamentos de Produtos"
            description="Eventos espetaculares que geram entusiasmo e apresentam seus novos produtos ou serviços."
          />
          <ServiceCard
            icon={<Lightbulb className="h-10 w-10 text-[#20B2AA]" />}
            title="Workshops e Sessões"
            description="Workshops interativos e envolventes que inspiram criatividade e inovação."
          />
          <ServiceCard
            icon={<GraduationCap className="h-10 w-10 text-[#20B2AA]" />}
            title="Treinamentos Corporativos"
            description="Eventos de desenvolvimento profissional que aprimoram habilidades e conhecimentos em um ambiente estimulante."
          />
          <ServiceCard
            icon={<PartyPopper className="h-10 w-10 text-[#20B2AA]" />}
            title="Celebrações de Fim de Ano"
            description="Encontros memoráveis que celebram conquistas e fortalecem os laços da equipe."
          />
        </div>
      </div>
    </section>
  );
}
