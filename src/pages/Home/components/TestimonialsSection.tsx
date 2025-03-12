import TestimonialCard from "./TestimonialCard";
import User from "@/assets/testimonials/first-testimonial.jpg";
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20  flex justify-center bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#005f73] font-manrope">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Temos orgulho em oferecer experiências excepcionais que deixam
            impressões duradouras.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="A B4 Company transformou nossa conferência anual em uma experiência inesquecível. A atenção aos detalhes e a abordagem criativa superaram nossas expectativas."
            author="Sarah Johnson"
            position="Diretora de Marketing, TechCorp"
            image={User}
          />
          <TestimonialCard
            quote="Trabalhar com a B4 Company foi perfeito do início ao fim. Eles realmente entenderam nossa marca e criaram um evento que se alinhou perfeitamente com a cultura da nossa empresa."
            author="Michael Chen"
            position="CEO, Innovate Inc."
            image={User}
          />
          <TestimonialCard
            quote="O profissionalismo e a criatividade da equipe tornaram o lançamento do nosso produto um tremendo sucesso. Recebemos inúmeros elogios dos participantes."
            author="Emily Rodriguez"
            position="Gerente de Produto, NextGen Solutions"
            image={User}
          />
        </div>
      </div>
    </section>
  );
}
