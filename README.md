# <p align="center">STARKFIT</p>

<p align="center">
  <strong>Elite Performance Club: Onde a Biologia Encontra a Tecnologia de Ponta.</strong>
</p>

<p align="center">
  <a href="https://starkfit.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-STARKFIT-9cd15a?style=for-the-badge&logo=vercel" alt="Live Demo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2.0-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.2.2-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/next--intl-4.8.3-green?style=flat-square" alt="next-intl" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.38.0-ff69b4?style=flat-square&logo=framer" alt="Framer Motion" />
</p>

---

## 📖 Panorama Geral

A **STARKFIT** é uma landing page de alta performance para uma academia premium. O projeto foi desenvolvido para redefinir o conceito de fitness digital, adotando uma estética **Industrial & High-Tech** que prioriza a força bruta, a tecnologia de ponta e um design focado em resultados.

### 🎯 Diferenciais Estratégicos
- **Estética Elite & Performance:** Design agressivo e moderno, utilizando uma paleta de cores escura com acentos em Verde Lima (#9CD15A), transmitindo energia e exclusividade.
- **Experiência Imersiva:** Animações fluidas e transições cinematográficas orquestradas pelo Framer Motion para guiar o usuário na jornada da evolução física.
- **Internacionalização Robusta:** Sistema de tradução completo (PT/EN) integrado via cookies, garantindo URLs limpas e uma experiência global sem atritos.

---

## ✨ Ecossistema de Funcionalidades

### 🎞️ Impacto Visual (Hero & Brand)
- **Cinematic Hero:** Uma seção inicial monumental com efeitos de paralaxe e tipografia "extra-bold" que estabelece o tom de dominância da marca.
- **Dynamic Backgrounds:** Uso estratégico de sobreposições de texto e imagens em alta definição para criar profundidade visual.

### 🏋️ Estrutura & Performance
- **ADN Stark:** Showcase dos diferenciais tecnológicos e metodológicos da academia, focando em biometria avançada e infraestrutura 24h.
- **Membership Protocols:** Sistema de planos escalonáveis (Foundation, Standard, Summit) apresentados em cards interativos com destaque para o plano de maior valor.
- **Bio Fuel Selection:** Seção dedicada à suplementação de alta densidade, reforçando o ecossistema completo de saúde da marca.

### 📍 Conectividade Global
- **Strategic Bases:** Localizador de unidades com integração visual, permitindo que membros identifiquem onde a elite treina.
- **Interactive Free Access:** Fluxo de conversão otimizado para resgate de acessos experimentais de 7 dias.

---

## 🛠️ Deep Dive Tecnológico

### Arquitetura de Internacionalização
O projeto utiliza o **next-intl** com uma estratégia avançada de detecção via middleware:
- **Clean URLs:** O idioma é gerenciado via cookie `NEXT_LOCALE`, eliminando prefixos de rota e mantendo o SEO otimizado.
- **App Router Integration:** Estrutura `[locale]` para pré-renderização eficiente e troca dinâmica de dicionários no servidor.

### Performance e Estilização
- **Tailwind CSS v4:** Aproveita as melhorias de performance da v4 para uma gestão de estilos ultra-eficiente através de variáveis CSS e engine JIT.
- **Framer Motion Engine:** Orquestração complexa de animações de entrada, scroll progressivo e interações de hover que garantem 60fps constantes.
- **Shadcn/UI & Radix:** Componentes de interface acessíveis e altamente customizados para manter a consistência visual do projeto.

---

## 🏗️ Estrutura Arquitetural

```text
├── messages/             # Dicionários de tradução (en.json, pt.json)
├── src/
│   ├── app/
│   │   └── [locale]/     # Next.js App Router (Layouts e Páginas traduzidas)
│   ├── components/
│   │   ├── sections/     # Componentes de seção (Hero, Membership, Benefits...)
│   │   └── ui/           # Elementos de interface (Shadcn/UI & Radix)
│   ├── i18n/             # Configurações de request e mapeamento de idiomas
│   ├── lib/              # Utilitários e configurações de animação
│   └── proxy.ts          # Middleware inteligente de internacionalização
└── next.config.mjs       # Configuração Next.js com suporte a i18n
```

---

## 🧪 Engenharia de Qualidade

A integridade do projeto é garantida por fluxos de validação contínuos:
- **Total i18n Coverage:** Todas as strings são externalizadas, permitindo escalabilidade para novos idiomas sem alteração no código.
- **Type Safety:** Uso rigoroso de TypeScript em todo o ecossistema, desde as rotas até as variantes de animação.
- **Responsive Architecture:** Design que se adapta perfeitamente de grandes monitores (2K/4K) até dispositivos mobile compactos.

Para rodar o projeto localmente:
```bash
pnpm install
pnpm dev
```

Para validar o build:
```bash
pnpm build
```

---
<p align="center">
  Designed with intent by <a href="https://www.linkedin.com/in/gui-bus/">guibus.dev</a> &bull; 2026
</p>
