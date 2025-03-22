import {
  Sparkles,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-3 text-white py-12 flex justify-center">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-[#005f73]" />
              <span className="text-xl font-bold">B4 Company</span>
            </div>
            <p className="text-gray-400 text-sm">
              Criando experiências corporativas memoráveis que refletem sua
              marca, cultura e objetivos.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Eventos de Experiência Corporativa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Happy Hours
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Lançamentos de Produtos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Workshops e Sessões
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Treinamentos Corporativos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Celebrações de Fim de Ano
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#005f73]" />
                <span>contato@B4 Company.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#005f73]" />
                <span>+55 (11) 1234-5678</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} B4 Company. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-[#005f73]">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-[#005f73]">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
