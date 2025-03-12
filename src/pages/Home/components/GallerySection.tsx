import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import FirstImage from "@/assets/gallery/second.jpg";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 flex justify-center bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#20B2AA]">
            Nosso Trabalho
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Navegue pelo nosso portfólio de eventos bem-sucedidos que demonstram
            nossas capacidades.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative h-64 rounded-lg overflow-hidden group"
            >
              <img
                src={FirstImage}
                alt={`Event gallery image ${i}`}
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-medium">Evento Corporativo {i}</h3>
                  <p className="text-sm text-gray-200">Nome do Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            className="border-[#20B2AA] text-[#20B2AA] hover:bg-[#20B2AA] hover:text-white"
          >
            Ver Mais Projetos <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
