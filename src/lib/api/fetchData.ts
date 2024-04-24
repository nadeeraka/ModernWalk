import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
import { URL } from "~/lib/constant";
import { type ProductList } from "~/lib/@types/types";

export const fetchData = async (
  limit = 0,
  config?: AxiosRequestConfig, // Optional axios configuration object
): Promise<ProductList | undefined> => {
  const url = limit <= 0 ? URL : `${URL}?limit=${limit}`; // Concise URL construction

  const controller = new AbortController(); // Create AbortController for cancellation

  try {
    const response = await axios.get<ProductList>(url, {
      ...config, // Apply optional configuration
      signal: controller.signal, // Add AbortSignal for cancellation
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error as AxiosError;
      if (axiosError.code === "ECONNABORTED") {
        console.warn("Request cancelled:", error.message); // Handle cancellation gracefully
      } else {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data"); // Consider throwing a more informative error
      }
    } else {
      console.error("Unexpected error:", error);
      throw error; // Re-throw unexpected errors
    }
  } finally {
    controller.abort(); // Cancel request on cleanup, even on successful completion
  }
};
