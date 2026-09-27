# Ruan Stuart Barbearia — Site

Abra `index.html` no navegador para visualizar, ou use a extensão **Live Server** no VS Code.

## O que trocar (todos marcados com `TROCAR` no código)

1. **Logo** — texto em `.logo` (index.html, header e footer). Se quiser logo em imagem, troque por `<img>`.
2. **Fotos** — os oito arquivos `images/galeria-1.jpg` a `images/galeria-8.jpg` foram recortados da captura fornecida e já estão conectados ao hero, serviços e galeria.
3. **Logo** — a captura da logo do Instagram não está disponível como arquivo local; o site mantém o wordmark textual até que a imagem original seja adicionada em `images/`.
4. **WhatsApp** — os botões de contato usam o número `+55 21 96559-6009` e podem ser ajustados diretamente nos links `wa.me` do `index (1).html`.
5. **Instagram** — link no footer, seção "Redes".
6. **Serviços** — seção `<section class="services">`: nomes, descrições e imagens de cada `.service-card`.
7. **Preços** — `<span class="service-card__price">R$ --,--</span>` em cada card.
8. **Horários** — seção `<section class="location">`, campo `.location__hours`.
9. **Google Maps** — troque o `href` do botão "Como chegar" e o `src` do `<iframe>` pelo link real (Google Maps → Compartilhar → Incorporar mapa).
10. **Mensagem do WhatsApp** — personalize o texto pré-preenchido nos links `wa.me` dos botões, se necessário.
11. **Telefone e URL do site** — dentro do bloco `<script type="application/ld+json">` no `<head>` do `index.html`.

## Estrutura
```
ruan-stuart-barbearia/
├── index.html
├── style.css
├── script.js
└── images/   (adicione suas fotos aqui)
```
