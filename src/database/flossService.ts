import type { FlossColor, FlossBrand } from '../types/floss';
import { FLOSS_BRANDS } from './flossColors';

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

export function getFlossHexMap(brand: FlossBrand): Record<string, FlossColor> {
  return Object.fromEntries(
    FLOSS_BRANDS[brand].map((color) => [color.hex, color])
  );
}
