// src/database/dcmColors.ts
import { DMC } from './floss/dcm';
import { Anchor } from './floss/anchor';
import { Sullivans } from './floss/sullivans';
import { JPCoats } from './floss/jpcoats';
import { MaxiMouline } from './floss/maximouline';
import type { FlossColor } from '../types/floss';

export type FlossBrand =
  | 'DMC'
  | 'Anchor'
  | 'Sullivans'
  | 'JPCoats'
  | 'MaxiMouline';

export const FLOSS_BRANDS: Record<FlossBrand, FlossColor[]> = {
  DMC,
  Anchor,
  Sullivans,
  JPCoats,
  MaxiMouline,
};
