import { Expandable } from "./Expandable";

const faqs = [
  {
    q: "O material didático está incluso no valor da mensalidade?",
    a: "Não. Para garantir a originalidade e o menor preço, o material oficial da 4ª Edição do American English File (Oxford) é adquirido pelo próprio aluno diretamente em livrarias parceiras credenciadas. A coordenação da sampa.school enviará o link direto para a compra logo após a sua matrícula, e o valor do livro pode ser parcelado em até 6 vezes sem juros no cartão de crédito.",
  },
  {
    q: "Como funciona o contrato? Existe multa de cancelamento se eu não quiser continuar no ano que vem?",
    a: "Não existe nenhuma multa ou pegadinha. O seu compromisso com a sampa.school é por módulo fechado. Cada módulo dura um semestre e possui apenas 4 mensalidades (de setembro a dezembro). Você realiza e paga o módulo atual inteiro. Ao final dele, você só continua para o próximo nível se quiser renovar. Se decidir não dar continuidade, seu contrato encerra automaticamente, sem cobranças extras ou burocracia.",
  },
  {
    q: "Eu nunca estudei inglês, vou conseguir acompanhar as turmas de conversação?",
    a: "Com certeza. Temos turmas de nível Starter (A1), desenhadas sob medida para quem está começando do absoluto zero e tem muita timidez. O ambiente é 100% acolhedor e psicologicamente seguro para você errar e evoluir de forma natural.",
  },
  {
    q: "O que acontece se eu precisar faltar em uma quarta-feira?",
    a: "Como o nosso modelo é Regular Híbrido, você tem o suporte total das ferramentas digitais no celular, incluindo o Online Practice do Oxford English Hub e as atividades do Skills Confidence para praticar conversação e escuta fora da sala de aula, garantindo que não perca o ritmo do semestre.",
  },
  {
    q: "Onde acontecem as aulas presenciais? Tem fácil acesso?",
    a: "Nossa sede física oficial fica na Rua Cristóvão Colombo Gonçalves, 422 – Cidade Dutra, Interlagos. É uma região de facílimo acesso na Zona Sul, com total segurança e opções próximas para você chegar e focar 100% na sua aula.",
  },
  {
    q: "Eu ganho algum certificado oficial ao final do curso?",
    a: "Sim. Ao concluir as 17 semanas de foco total e realizar a Prova Final no dia 16 de dezembro, você receberá o Certificado Oficial de Conclusão de Nível da sampa.school, chancelado com o mapeamento de competências internacionais da Oxford University Press.",
  },
];

export function Faq() {
  return (
    <section className="bg-white py-16 text-grafite sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center font-display text-2xl font-extrabold sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <Expandable key={f.q} title={f.q} expandLabel="Ver resposta">
              <p>{f.a}</p>
            </Expandable>
          ))}
        </div>
      </div>
    </section>
  );
}