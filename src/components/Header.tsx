import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex px-12 h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-[#20B2AA]" />
          <span className="text-xl font-bold font-display">B4 Group</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a
            href="#services"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Serviços
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Sobre
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#gallery"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Galeria
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Contato
          </a>
        </nav>

        <Button className="hidden md:flex bg-[#20B2AA] hover:bg-[#1c9e98] text-white">
          Fale Conosco
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-[#20B2AA]" />
          ) : (
            <Menu className="h-6 w-6 text-[#20B2AA]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-md p-4 flex flex-col gap-4">
          <a
            href="#services"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Serviços
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Sobre
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Depoimentos
          </a>
          <a
            href="#gallery"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Galeria
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-[#20B2AA] transition-colors"
          >
            Contato
          </a>
          <Button className="bg-[#20B2AA] hover:bg-[#1c9e98] text-white">
            Fale Conosco
          </Button>
        </div>
      )}
    </header>
  );
}
