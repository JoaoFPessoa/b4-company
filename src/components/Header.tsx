import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-screen border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className=" flex px-12 h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-[#005f73]" />
          <span className="text-xl font-bold font-display">B4 Group</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#services"
            className="font-medium hover:text-[#005f73] transition-colors"
          >
            Serviços
          </a>
          <a
            href="#about"
            className="font-medium hover:text-[#005f73] transition-colors"
          >
            Sobre
          </a>
          <a
            href="#testimonials"
            className="font-medium hover:text-[#005f73] transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#gallery"
            className="font-medium hover:text-[#005f73] transition-colors"
          >
            Galeria
          </a>
          <a
            href="#contact"
            className="font-medium hover:text-[#005f73] transition-colors"
          >
            Contato
          </a>
        </nav>

        <a
          href="https://wa.me/5511930001678"
          target="_blank"
          rel="noopener noreferrer"
          className="font-manrope text-white font-semibold  p-3 rounded-md bg-gradient-to-r from-[#008B99] to-[#005f73] hover:from-[#007280] hover:to-[#004a5a] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl cursor-pointer"
        >
          Fale conosco
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-[#005f73]" />
          ) : (
            <Menu className="h-6 w-6 text-[#005f73]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-md p-4 flex flex-col gap-4">
          <a
            href="#services"
            className="text-sm font-medium hover:text-[#005f73] transition-colors"
          >
            Serviços
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-[#005f73] transition-colors"
          >
            Sobre
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-[#005f73] transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#gallery"
            className="text-sm font-medium hover:text-[#005f73] transition-colors"
          >
            Galeria
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-[#005f73] transition-colors"
          >
            Contato
          </a>
          <Button className="bg-[#005f73] hover:bg-[#1c9e98] text-white">
            Fale Conosco
          </Button>
        </div>
      )}
    </header>
  );
}
