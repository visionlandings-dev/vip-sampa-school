# Plano — Landing Page sampa.school (v4 definitiva)

Landing page de alta conversão, página única em `/`, seguindo 100% a especificação v4 (4ª edição). Todo o copy vem do documento aprovado. Sem backend: conversão 100% via WhatsApp da Jéssica (**wa.me/5511936241913**), cada um dos 5 botões com mensagem pré-preenchida própria.

## Identidade visual (tokens em `src/styles.css`)

- Grafite `#1E1E24` (fundo hero/fechamento), Branco `#FFFFFF` e Cinza `#F4F4F6` (seções alternadas)
- Amarelo Neon `#FFD23F` (títulos/destaques), Verde `#25D366` (exclusivo dos CTAs), Vermelho `#D90429` (urgência: "ÚLTIMAS VAGAS DO LOTE INAUGURAL", escassez)
- Montserrat Bold/ExtraBold (títulos) + Inter Regular/Medium (leitura), via `<link>` Google Fonts no `__root.tsx`
- CTAs grandes, arredondados, com efeito de pulso sutil

## Logos oficiais (arquivos enviados)

- Recortar os PNGs enviados (remover excesso de fundo), subir via Lovable Assets e usar no cabeçalho fixo: **sampa.school à esquerda, sampa.group à direita**; no mobile, centralizadas lado a lado em tamanho simétrico.
- **Observação:** os arquivos têm fundo escuro embutido (o da school é verde-escuro). Vou recortar rente à marca para disfarçar; se tiver versões com fundo transparente (PNG/SVG), troco depois em 1 minuto.
- Favicon derivado do símbolo hexagonal "S" da logo school.

## Estrutura da página (copy v4, palavra por palavra)

1. **Hero** (grafite) — headline "Destrave seu inglês ainda este ano…", frase garrafal "SÃO PAULO NÃO PARA POR QUEM NÃO FALA INGLÊS…", subtítulo (turmas 4–6, Cidade Dutra, American English File 4ª Ed.), texto emocional + imagem de jovens estudando (gerada em IA, estilo foto urbana). **CTA 1**.
2. **4 Pilares** (branco) — grid 4 colunas: Turmas Ultra Reduzidas / Oxford 4ª Ed. + Hub / Cronograma 17 Semanas / Preço Transparente. **CTA 2**.
3. **Ecossistema & Tecnologia** (cinza) — "Ninguém aprende a nadar fora da água", 4 habilidades (Speaking/Listening/Reading/Writing) + bloco Oxford English Hub & Skills Confidence. **CTA 3**.
4. **Manifestos** (branco) — 7 cards expansíveis (accordion): Introdução, Carreira, Viagens, Psicologia, Anti-Procrastinação, Interação Humana, Metodologia Oxford. Prévia visível + botão "+ Ler manifesto completo".
5. **Calendário, Horários & Investimento** (cinza) — calendário oficial das 17 quartas (26/ago → 16/dez), grade de horários **apenas com os 5 horários** (13h45–15h05, 15h15–16h35, 16h50–18h10, 18h30–19h50, 20h00–21h20), sem rótulos de turma/nível; modelo de lotes: Matrícula R$ 78 PIX, Lote Inaugural 4× R$ 225 (30 primeiras vagas, selo vermelho de urgência), Lote Regular 4× R$ 290 (R$ 261 c/ pontualidade), sem fidelidade. **Bloco do Placement Test EXCLUÍDO** (orientação do e-mail). **CTA 4**.
6. **FAQ** (branco) — sanfona com as 6 perguntas/respostas.
7. **Mini-formulário de reserva** (cinza sobre branco) — Nome completo, WhatsApp com DDD, horário preferido (select com os 5 horários + "outro"). Validação com Zod; ao enviar, **abre o WhatsApp da Jéssica com a mensagem já montada** com os dados. Botão "ENVIAR E RESERVAR MINHA VAGA DE INAUGURAÇÃO".
8. **Fechamento Anti-Procrastinação** (grafite) — manifesto final + **CTA 5** grande e chamativo.
9. **Rodapé** (preto/grafite) — sampa.school | Membro do sampa.group, chancela Oxford, endereço da sede, direitos reservados ©2026.

## Links de WhatsApp (mensagens pré-preenchidas)

1. Hero → "Quero garantir minha vaga promocional"
2. Pilares → "Quero conhecer a sede na Cidade Dutra"
3. Ecossistema → "Quero destravar meu inglês profissional"
4. Grade/Preços → "Quero reservar minha vaga e escolher meu horário"
5. Fechamento → "Chega de desculpas, vou começar hoje"

## Imagens geradas por IA (otimizadas)

- Hero: jovens adultos paulistanos estudando em mesa moderna com notebooks e café (foto realista)
- Apoio seção 3 ou hero secundário: São Paulo/Interlagos urbano noturno com filtro escuro

## SEO, performance e rastreamento

- `head()` própria na rota `/` (título, description, og:) e atualização das metas do `__root.tsx` (remover "Lovable App")
- Mobile-first absoluto, imagens otimizadas, sem efeitos pesados
- Pontos de encaixe preparados para GTM / Meta Pixel / GA4 (via variáveis de ambiente — você só cola os IDs quando quiser ativar)
- O bloco de Meta Ads do documento é guia de campanha, não entra no site

## Detalhes técnicos

- Reescrever `src/routes/index.tsx` (substituir placeholder); componentes por seção em `src/components/landing/`
- Accordions (manifestos + FAQ) com componente próprio leve; sem novas dependências pesadas
- Sem Lovable Cloud/banco de dados nesta fase — nada é salvo, tudo vai direto ao WhatsApp