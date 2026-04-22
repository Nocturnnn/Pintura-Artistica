import type { ReactNode } from 'react';

export type HighlightItem = {
  id: string;
  title: string;
  description: string;
  accent: string;
  art: ReactNode;
};

export type DetailItem = {
  id: string;
  title: string;
  description: string;
  tone: string;
};
