---
name: Estrutura e copy da landing page sampa.school
description: Seções, manifestos expansíveis, FAQ, CTAs, logos e copy aprovada (especificação v4, email definitivo)
type: feature
---

Landing page one-page da sampa.school (escola de inglês presencial em Interlagos, SP, grupo sampa.group).

- Copy fonte: "Documento de Especificação Técnica e Copywriting Definitivo (Revisado - 4ª edição)". A v4 substitui a v1 (que tinha formulário com captura e aulas quarta/sexta); o cliente pediu feedback comparativo antes de construir.
- Sem backend: todos os CTAs abrem wa.me/5511936241913 com mensagens pré-definidas por seção (src/lib/whatsapp.ts). O formulário da Seção 5 apenas monta a mensagem e redireciona ao WhatsApp.
- Estrutura: Header fixo (logo sampa.school à esquerda, sampa.group à direita, recortadas das imagens enviadas, fundo removido, CDN) → Hero → 4 Pilares → Ecossistema (4 skills + Oxford English Hub) → 7 Manifestos expansíveis → Agenda (calendário 17 semanas + 5 horários + lotes) → FAQ (6 itens) → Formulário de reserva → Encerramento (manifesto procrastinação) → Footer institucional.
- 5 CTAs WhatsApp: Hero, Pilares, Agenda/Preços, Formulário, Encerramento.
- Favicon derivado do ícone hexagonal da sampa.school.
- Slots de tracking em __root.tsx: VITE_GTM_ID, VITE_GA4_ID, VITE_META_PIXEL_ID (pedidos do cliente).
- Endereço oficial: Rua Cristóvão Colombo Gonçalves, 422 – Cidade Dutra, Interlagos, São Paulo - SP.