import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, BookOpen, Camera, Palette, Users } from "lucide-react";

export default function ZoomNaArte() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#EFCB89] text-[#3B2F2F]">
      {/* Cabeçalho */}
      <header className="bg-[#5C1E0E] text-white p-6 shadow-md flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Zoom na Arte
        </motion.h1>
        <nav className="flex gap-4 items-center">
          <Button variant="ghost" className="text-white flex items-center gap-2">
            <Menu size={20} /> Menu
          </Button>
          <Input
            placeholder="Buscar..."
            className="max-w-xs bg-white text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </nav>
      </header>

      {/* Capa ilustrada */}
      <section className="relative w-full h-[480px] overflow-hidden">
        <img
          src="/ChatGPT Image 21 de jun. de 2025, 00_03_30.png"
          alt="Capa Zoom na Arte"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Missão */}
      <section className="p-6 bg-[#F5E3C8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Espaço interativo e didático sobre Artes Visuais</h2>
          <p className="text-base">
            Nosso objetivo é aprofundar as discussões entre arte, política e educação, divulgar produções acadêmicas e artísticas dos estudantes, compartilhar processos criativos e criar um acervo digital acessível para jovens e adultos entre 18 e 40 anos.
          </p>
        </div>
      </section>

      {/* Destaques em carrossel */}
      <section className="p-6 bg-[#D1891C] text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-center">Destaques do Zoom na Arte</h2>
          <div className="overflow-x-auto whitespace-nowrap space-x-4 flex pb-2">
            <div className="inline-block w-64 bg-[#F5E3C8] p-4 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-2">Mostra de Fotografia</h3>
              <p className="text-sm">Imagens que revelam a arte no cotidiano maranhense.</p>
            </div>
            <div className="inline-block w-64 bg-[#F5E3C8] p-4 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-2">Palestra sobre Arte e Política</h3>
              <p className="text-sm">Reflexões sobre poder, discurso e representações visuais.</p>
            </div>
            <div className="inline-block w-64 bg-[#F5E3C8] p-4 rounded-2xl shadow-md">
              <h3 className="font-semibold mb-2">Criações dos Estudantes</h3>
              <p className="text-sm">Pinturas, colagens e processos artísticos do semestre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blocos de conteúdo */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-[#A05A2C] text-white shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              <BookOpen /> História da Arte
            </h2>
            <p className="mb-4 text-base">
              Movimentos artísticos, artistas, contexto social e transformações visuais ao longo do tempo.
            </p>
            <Button variant="secondary">Explorar</Button>
          </CardContent>
        </Card>

        <Card className="bg-[#D1891C] text-black shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Palette /> Técnicas e Processos
            </h2>
            <p className="mb-4 text-base">
              Abordagens metodológicas, pintura, colagem, fotografia e produção artística no cotidiano.
            </p>
            <Button variant="secondary">Aprender</Button>
          </CardContent>
        </Card>

        <Card className="bg-[#82615A] text-white shadow-lg rounded-2xl">
          <CardContent className="p-6">
           <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
            <Camera /> Arte no Cotidiano
           </h2>
            <p className="mb-4 text-base">
              Um olhar sobre a arte na vida cotidiana e os registros sensíveis do ambiente urbano e natural.
            </p>
            <Button variant="secondary">Ver Galeria</Button>
          </CardContent>
        </Card>

        <Card className="bg-[#2F8B8B] text-white shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Users /> Artistas e Cultura
            </h2>
            <p className="mb-4 text-base">
              Conheça artistas maranhenses e brasileiros e como dialogam com arte, política e identidade.
            </p>
            <Button variant="secondary">Conhecer</Button>
          </CardContent>
        </Card>
      </section>

      {/* Rodapé */}
      <footer className="mt-12 p-6 bg-[#1A1A1A] text-[#F5E3C8] text-center text-sm">
        © 2025 Zoom na Arte — Projeto interdisciplinar do curso de Artes Visuais.
      </footer>
    </main>
  );
}
