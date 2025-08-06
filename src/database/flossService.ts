import { FLOSS_BRANDS } from './flossColors';

export const getAllBrands = () => {
  return Object.keys(FLOSS_BRANDS);
};

export const getColorsByBrand = (brand: string) => {
  return FLOSS_BRANDS[brand] || [];
};

export const getColorByCode = (brand: string, code: string) => {
  const colors = FLOSS_BRANDS[brand] || [];
  return colors.find((c) => c.code === code);
};
