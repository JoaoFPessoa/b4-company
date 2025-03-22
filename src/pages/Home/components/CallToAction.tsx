import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="py-20 flex justify-center px-3 bg-gradient-to-r from-[#005f73] to-[#005f73]/80"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-manrope">
              Pronto para Criar Seu Próximo Evento?
            </h2>
            <p className="mt-4 text-lg opacity-90 font-manrope">
              Vamos discutir como podemos dar vida à sua visão. Preencha o
              formulário e nossa equipe entrará em contato em até 24 horas.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>contato@B4 Company.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+55 (11) 1234-5678</span>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nome Completo
                  </label>
                  <Input id="name" placeholder="João Silva" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="joao@empresa.com.br"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Nome da Empresa
                </label>
                <Input id="company" placeholder="Sua Empresa" />
              </div>
              <div className="space-y-2">
                <label htmlFor="event-type" className="text-sm font-medium">
                  Tipo de Evento
                </label>
                <select
                  id="event-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Selecione um tipo de evento</option>
                  <option value="company-experience">
                    Evento de Experiência Corporativa
                  </option>
                  <option value="happy-hour">Happy Hour</option>
                  <option value="product-launch">Lançamento de Produto</option>
                  <option value="workshop">Workshop ou Sessão</option>
                  <option value="training">Treinamento Corporativo</option>
                  <option value="celebration">Celebração de Fim de Ano</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Detalhes do Evento
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu evento, incluindo data, número estimado de participantes e quaisquer requisitos específicos."
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#005f73] hover:bg-[#1c9e98] text-white"
              >
                Solicitar Proposta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
