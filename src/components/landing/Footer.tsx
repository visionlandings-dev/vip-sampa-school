import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-grafite-deep py-10 text-center text-white">
      <div className="mx-auto max-w-4xl space-y-3 px-4">
        <p className="font-display text-lg font-extrabold">
          <span className="text-white">sampa</span>
          <span className="text-neon">.school</span>
          <span className="mx-2 text-white/40">|</span>
          <span className="font-medium text-white/80">
            Membro do sampa.group
          </span>
        </p>
        <p className="text-sm text-white/60">
          Chancelaria de livros pela Oxford University Press
        </p>
        <p className="flex items-center justify-center gap-2 text-sm text-white/70">
          <MapPin className="h-4 w-4 shrink-0 text-neon" aria-hidden />
          Sede Física Oficial: Rua Cristóvão Colombo Gonçalves, 422 – Cidade
          Dutra, Interlagos, São Paulo - SP
        </p>
        <p className="pt-2 text-xs text-white/40">
          Todos os direitos reservados. © 2026
        </p>
      </div>
    </footer>
  );
}