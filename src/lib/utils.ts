import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type ProductList } from "~/lib/@types/types";
import f from "../../public/images/f1.png";
import m from "../../public/images/m1.png";
import { type StaticImageData } from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//
export const createFakeData = (data: ProductList, isMen: boolean) => {
  const menClothImage: StaticImageData = m;
  const womenClothImage: StaticImageData = f;
  return data.filter((d) => {
    if (isMen) {
      d.image = menClothImage;
      d.title = "Mens Cotton Jacket";
    } else {
      d.image = womenClothImage;
      d.title = "Women's Short Sleeve";
    }
    return d;
  });
};

export const truncateString = (str: string, n = 150) => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};
