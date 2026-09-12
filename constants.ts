import { Project, FAQItem } from "./types";

/** Imagem cinza clássica pra slots de mídia em mock */
export const PLACEHOLDER_IMG = "/placeholder.svg";

export const PH = {
  title: "Título placeholder",
  subtitle: "Subtítulo placeholder",
  text: "Texto placeholder. Conteúdo temporário para layout e revisão visual.",
  name: "Nome placeholder",
  company: "Empresa placeholder",
  tag: "Tag placeholder",
  category: "Categoria placeholder",
  label: "Label placeholder",
  value: "00",
  button: "Botão placeholder",
} as const;

/** Seções numeradas da home (pós-hero). Formato: 04 / 08 */
export const HOME_SECTION_TOTAL = 8;

export const HOME_SECTION = {
  sobre: 1,
  solucoes: 2,
  pilares: 3,
  cases: 4,
  perfil: 5,
  avaliacoes: 6,
  convite: 7,
  duvidas: 8,
} as const;

export const homeSectionIndex = (n: number) =>
  `${String(n).padStart(2, "0")} / ${String(HOME_SECTION_TOTAL).padStart(2, "0")}`;

/** Nav do hero / menu: âncoras das seções da home (Domu, não Domo). */
export const HOME_NAV = [
  { name: "Sobre", href: "/#sobre-studio" },
  { name: "Soluções", href: "/#solucoes" },
  { name: "Pilares", href: "/#pilares" },
  { name: "Cases", href: "/#cases-home" },
  { name: "Estúdio", href: "/#studio-perfil" },
  { name: "Avaliações", href: "/#avaliacoes" },
  { name: "Contato", href: "/#convite" },
  { name: "Dúvidas", href: "/#faq" },
] as const;

export const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "Cases", href: "/cases" },
  { name: "Sobre", href: "/sobre" },
  { name: "Login", href: "/login" },
];

export const FOOTER_INSTITUCIONAL = [
  { name: "Home", href: "/" },
  { name: "Cases", href: "/cases" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Criar conta", href: "/login" },
  { name: "Loja de Layouts", href: "/layouts" },
  { name: "Aviso de Cookies", href: "#" },
];

export const FOOTER_SERVICOS = [
  { name: "Criar conta", href: "/login" },
  { name: "Layouts", href: "/layouts" },
  { name: "Cases", href: "/cases" },
  { name: "Sobre a Domu", href: "/sobre" },
  { name: "Login", href: "/login" },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    tag: PH.tag,
    title: `${PH.title} 01`,
    description: PH.text,
    image: PLACEHOLDER_IMG,
    link: "#",
    isFeatured: true,
  },
  {
    tag: PH.tag,
    title: `${PH.title} 02`,
    description: PH.text,
    image: PLACEHOLDER_IMG,
    link: "#",
    isFeatured: true,
  },
  {
    tag: PH.tag,
    title: `${PH.title} 03`,
    description: PH.text,
    image: PLACEHOLDER_IMG,
    link: "#",
    isFeatured: true,
  },
  {
    tag: PH.tag,
    title: `${PH.title} 04`,
    description: PH.text,
    image: PLACEHOLDER_IMG,
    link: "#",
    isFeatured: true,
  },
  {
    tag: PH.tag,
    title: `${PH.title} 05`,
    description: PH.text,
    image: PLACEHOLDER_IMG,
    link: "#",
    isFeatured: true,
  },
  {
    tag: PH.tag,
    title: `${PH.title} 06`,
    description: PH.text,
    image: PLACEHOLDER_IMG,
    link: "#",
  },
  {
    tag: PH.tag,
    title: `${PH.title} 07`,
    description: PH.text,
    image: PLACEHOLDER_IMG,
    link: "#",
  },
];

export const FAQ_DATA: FAQItem[] = Array.from({ length: 10 }, (_, i) => ({
  question: `${PH.title} ${String(i + 1).padStart(2, "0")}?`,
  answer: PH.text,
}));
