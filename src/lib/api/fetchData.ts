import axios, { AxiosResponse } from "axios";
import { URL } from "~/lib/constant";
import { ProductList } from "~/lib/@types/types";

export const fetchData = async (): Promise<ProductList> => {
  const response: AxiosResponse<ProductList> = await axios.get(URL);
  return response.data;
};
