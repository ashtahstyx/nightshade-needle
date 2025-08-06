import { FLOSS_BRANDS, type FlossBrand } from './flossColors';
import type { FlossColor } from '../types/floss';

export function getFlossColors(brand: FlossBrand): FlossColor[] {
  return FLOSS_BRANDS[brand] || [];
}

export function findColorByCode(
  brand: FlossBrand,
  code: string
): FlossColor | undefined {
  const colors = FLOSS_BRANDS[brand] || [];
  return colors.find((c) => c.code === code);
}
