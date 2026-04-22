import type { ReactNode } from 'react';
import type { DetailItem, HighlightItem } from '../types';

const MiniTemple = (): ReactNode => (
  <svg viewBox="0 0 180 120" aria-hidden="true">
    <path d="M20 108h140" stroke="currentColor" strokeWidth="4" />
    <path d="M34 50 92 20l54 30v54H34Z" fill="currentColor" opacity="0.18" />
    <path d="M45 55h92v44H45Z" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M54 52V96M78 52V96M102 52V96M126 52V96" stroke="currentColor" strokeWidth="4" />
    <path d="M38 52h106" stroke="currentColor" strokeWidth="4" />
    <path d="M90 72v24" stroke="currentColor" strokeWidth="6" />
  </svg>
);

const MiniMask = (): ReactNode => (
  <svg viewBox="0 0 180 120" aria-hidden="true">
    <path
      d="M90 18c26 0 48 16 48 36S122 98 90 98 42 74 42 54 64 18 90 18Z"
      fill="currentColor"
      opacity="0.18"
    />
    <path d="M64 52c6-12 18-18 26-18 9 0 20 6 26 18" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M60 74c9 10 18 14 30 14s23-4 30-14" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M70 58c6 0 11 4 11 9s-5 9-11 9-11-4-11-9 5-9 11-9Zm40 0c6 0 11 4 11 9s-5 9-11 9-11-4-11-9 5-9 11-9Z" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M90 44v36" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const MiniBoat = (): ReactNode => (
  <svg viewBox="0 0 180 120" aria-hidden="true">
    <path d="M24 84h132c-10 14-24 20-42 20H62C48 104 34 98 24 84Z" fill="currentColor" opacity="0.18" />
    <path d="M38 76h104" stroke="currentColor" strokeWidth="4" />
    <path d="M52 74h76l-10-22H62Z" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M78 18v52M78 18c18 6 30 16 38 30" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M28 94c16 8 32 12 48 12s32-4 48-12" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const MiniTree = (): ReactNode => (
  <svg viewBox="0 0 180 120" aria-hidden="true">
    <path d="M88 100V66" stroke="currentColor" strokeWidth="6" />
    <path d="M66 68c0-20 12-34 24-34s24 14 24 34c0 17-10 28-24 28S66 85 66 68Z" fill="currentColor" opacity="0.18" />
    <path d="M48 72c0-16 9-28 20-28s20 12 20 28" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M92 54c0-14 10-24 22-24s22 10 22 24" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M58 92c12-6 23-8 32-8s20 2 32 8" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

export const highlights: HighlightItem[] = [
  {
    id: 'arquitetura',
    title: 'Arquitetura em camadas',
    description:
      'Volumes, telhados e monumentos surgem como recortes geométricos costurados por padrões e molduras.',
    accent: '#d94a2c',
    art: <MiniTemple />,
  },
  {
    id: 'cultura',
    title: 'Cultura em símbolos',
    description:
      'Objetos cerimoniais, máscaras e gestos ilustrados aparecem como sinais narrativos dentro da composição.',
    accent: '#0f4c81',
    art: <MiniMask />,
  },
  {
    id: 'movimento',
    title: 'Movimento ambiente',
    description:
      'Barcos, bandeiras e pássaros criam um fluxo contínuo, dando ritmo cinematográfico à cena editorial.',
    accent: '#e39e2f',
    art: <MiniBoat />,
  },
  {
    id: 'natureza',
    title: 'Natureza ornamental',
    description:
      'Árvores, água e relevos tornam a paisagem viva sem perder o rigor gráfico e a harmonia cromática.',
    accent: '#2c8a81',
    art: <MiniTree />,
  },
];

export const interactiveDetails: DetailItem[] = [
  {
    id: 'lanternas',
    title: 'Lanternas suspensas',
    description:
      'Oscilam suavemente e acendem pontos quentes no mural, criando respiro vertical entre monumentos.',
    tone: '#d94a2c',
  },
  {
    id: 'templos',
    title: 'Templos escalonados',
    description:
      'Módulos repetidos com alturas variadas reforçam a sensação de cidade sagrada construída como padrão.',
    tone: '#5fa2d9',
  },
  {
    id: 'rios',
    title: 'Rios ilustrados',
    description:
      'Faixas d’água com linhas, reflexos e curvas contínuas conduzem o olhar pela página inteira.',
    tone: '#1b5f9d',
  },
  {
    id: 'personagens',
    title: 'Figuras em gesto',
    description:
      'Silhuetas simplificadas aparecem em posturas cerimoniais e esportivas para ativar a narrativa visual.',
    tone: '#f0b146',
  },
  {
    id: 'ornamentos',
    title: 'Ornamentos de céu',
    description:
      'Nuvens, discos solares e bandeiras fazem a composição respirar sem perder densidade.',
    tone: '#f3d76a',
  },
  {
    id: 'vegetacao',
    title: 'Vegetação gráfica',
    description:
      'Copas ovais, folhas curvas e ciprestes verticais equilibram massa arquitetônica com formas orgânicas.',
    tone: '#3c8d78',
  },
];
