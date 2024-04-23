import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type ProductList } from "~/lib/@types/types";
import f from "../../public/images/f1.png";
import m from "../../public/images/m1.png";
import { type StaticImageData } from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createFakeData = (
  data: ProductList,
  isMen: boolean,
): ProductList => {
  // Leverage optional chaining for safer image assignment (avoids potential errors)
  const menClothImage: StaticImageData | undefined = m;
  const womenClothImage: StaticImageData | undefined = f;

  // Use map() to create a new array with modifications, avoiding mutation
  return data.map((product) => {
    // Deep clone the product object to prevent unintended side effects
    const modifiedProduct = { ...product };

    modifiedProduct.image = isMen ? menClothImage : womenClothImage;
    modifiedProduct.title = isMen
      ? "Men's Cotton Jacket"
      : "Women's Short Sleeve";

    return modifiedProduct;
  });
};

export const truncateString = (str: string, n = 120) => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};
