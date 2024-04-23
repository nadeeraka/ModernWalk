import axios, { AxiosResponse } from "axios";
import { URL } from "~/lib/constant";
import { ProductList } from "~/lib/@types/types";

export const fetchData = async (limit = 0): Promise<ProductList> => {
  const url = limit <= 0 ? URL : `${URL}?limit=${limit}`; // Concise URL construction

  try {
    const response = await axios.get<ProductList>(url);
    return response.data;
  } catch (error) {
    // Handle errors appropriately (e.g., logging, throwing specific errors)
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data"); // Consider throwing a more informative error
  }
};
