export interface Product {
  id: number;
  title: string;
  price: string; // Assuming price is represented as a string
  category: string;
  description: string;
  image: string;
}

export type ProductList = Product[];
export interface FlashSaleContainerProps {
  item: Product;
}
