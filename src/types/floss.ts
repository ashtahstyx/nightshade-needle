export interface FlossColor {
  name: string;
  code: string;
  hex: string;
  category?: string;
  range?: string;
  family?: string;
}

export type FlossBrand =
  | 'DMC'
  | 'Anchor'
  | 'Sullivans'
  | 'JPCoats'
  | 'MaxiMouline';
