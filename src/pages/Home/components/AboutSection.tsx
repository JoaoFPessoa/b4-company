import CorporativeEvent from "@/assets/hero/banner.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 border flex justify-center 0 bg-gray-50"
    >
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#20B2AA]">
              Sobre a B4 Company
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Na B4 Company, acreditamos que cada evento corporativo deve ser
              tão único quanto sua empresa. Nossa missão é traduzir a
              identidade, valores e objetivos da sua marca em experiências
              imersivas de eventos.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Com atenção meticulosa aos detalhes e paixão pela criatividade,
              nossa equipe de especialistas em eventos trabalha em estreita
              colaboração com você para projetar e executar eventos impecáveis
              que superam as expectativas.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#20B2AA]">250+</span>
                <span className="text-sm text-muted-foreground">
                  Eventos Organizados
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#20B2AA]">98%</span>
                <span className="text-sm text-muted-foreground">
                  Satisfação dos Clientes
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#20B2AA]">15+</span>
                <span className="text-sm text-muted-foreground">
                  Anos de Experiência
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#20B2AA]">100+</span>
                <span className="text-sm text-muted-foreground">
                  Clientes Corporativos
                </span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src={CorporativeEvent}
              alt="Our team at work"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
