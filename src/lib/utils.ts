import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product, type ProductList } from "~/lib/@types/types";
import f from "../../public/images/f1.png";
import m from "../../public/images/m1.png";
import { type StaticImageData } from "next/image";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Note!
// createFakeData acts as a data transformer. It takes the product data received from an API (or any other source)
// and modifies it based on the provided options. These modifications can involve:

// Filtering: It can filter the data to show only men's or women's clothing based on the isMen flag.
// Mixing: When hybrid is set to true, it creates a mix of men's and women's clothing by alternating between images and titles for each product in the resulting data.
// Custom Modifications: You can optionally provide a function to further modify each product individually. This allows for more granular control over the data transformation.

export const createFakeData = (
  data: Product[] | undefined,
  isMen: boolean,
  hybrid = false,
): ProductList => {
  // Leverage optional chaining for safer image assignment (avoids potential errors)
  const menClothImage: StaticImageData | undefined = m;
  const womenClothImage: StaticImageData | undefined = f;

  // Use map() to create a new array with modifications, avoiding mutation
  return data.map((product, i) => {
    // Deep clone the product object to prevent unintended side effects
    const modifiedProduct = { ...product };
    // if need to fetch both men and women data
    if (hybrid) {
      modifiedProduct.image = i % 2 == 0 ? menClothImage : womenClothImage;
      modifiedProduct.title =
        i % 2 == 0 ? "Men's Cotton Jacket" : "Women's Short Sleeve";

      return modifiedProduct;
    } else {
      modifiedProduct.image = isMen ? menClothImage : womenClothImage;
      modifiedProduct.title = isMen
        ? "Men's Cotton Jacket"
        : "Women's Short Sleeve";

      return modifiedProduct;
    }
  });
};

export const truncateString = (str: string, n = 150): string => {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
};

export const changeCssClassBasedOnGender = (str: string): string => {
  return str.split("")[0] === "M"
    ? "flash-sale-card-for-men"
    : "flash-sale-card-for-women";
};
