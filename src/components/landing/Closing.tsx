import urbanImage from "@/assets/sp-urban-night.jpg";

import { waMessages } from "@/lib/whatsapp";
import { WhatsAppCta } from "./WhatsAppCta";

export function Closing() {
  return (
    <section className="relative overflow-hidden py-20 text-white sm:py-28">
      <img
        src={urbanImage}
        alt=""
        aria-hidden
        loading="lazy"
        width={1536}
        height={864}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0 bg-grafite-deep/90" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-display text-2xl leading-snug font-extrabold sm:text-4xl">
          Não adie mais o seu futuro.{" "}
          <span className="text-neon">O "momento ideal" não existe.</span>
        </h2>
        <div className="mt-8 space-y-5 text-left text-sm leading-relaxed text-white/85 sm:text-base">
          <p>
            "No ano que vem eu começo." "Quando o trabalho acalmar, eu procuro
            um curso." "Ainda não é o momento ideal." Quantas vezes você já
            repetiu essas frases para si mesmo nos últimos anos? A verdade nua e
            crua é que a rotina de São Paulo sempre será corrida e os
            imprevistos continuarão acontecendo.
          </p>
          <p>
            Adiar o inglês não é empurrar um curso para frente; é adiar sua
            promoção profissional, sua viagem internacional sem sufoco e a
            expansão da sua mente. O ano de 2026 está avançando rapidamente.
            Entrar no próximo ano com as mesmas promessas não cumpridas gera
            frustração.
          </p>
          <p>
            Com o nosso Modelo Regular Híbrido, você só precisa estar na nossa
            sede física em Interlagos 1 vez por semana (80 minutos); o restante
            da sua prática de conversação acontece de forma flexível pelo
            celular. O tempo vai passar de qualquer maneira; a escolha de como
            você estará daqui a seis meses é estritamente sua.
          </p>
          <p className="font-semibold text-white">
            Troque a desculpa pela sua matrícula. As vagas são estritamente
            limitadas a 6 alunos por sala.{" "}
            <span className="text-neon">
              O mundo está esperando pela sua voz!
            </span>
          </p>
        </div>
        <WhatsAppCta
          className="mt-10"
          message={waMessages.closing}
          label="CHEGA DE DESCULPAS, VOU COMEÇAR HOJE"
          size="large"
        />
      </div>
    </section>
  );
}