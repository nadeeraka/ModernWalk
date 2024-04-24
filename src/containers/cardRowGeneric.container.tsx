"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/card.component";
import { fetchData } from "~/lib/api/fetchData";
import { Product, ProductList } from "~/lib/@types/types";
import { createFakeData } from "~/lib/utils";

// Note!

// CardGrid component: Flexible product grid with data filtering

// This component displays a grid of products with filtering options.
// You can control the following aspects:

// - **Number of products displayed:** Specify the desired limit using the `limit` prop (defaults to 5).
// - **Gender filter:** Control whether to show men's or women's clothing using the `isMen` prop (defaults to false for women's clothing).
// - **Hybrid display:** Optionally show a mix of men's and women's clothing by setting the `hybrid` prop to true (defaults to true).

// This component is ideal for displaying flash sale items or other product selections where filtering and customization are desired.

interface cardRowGenericProps {
  limit: number;
  isMen: boolean;
  hybrid?: boolean;
}
const CardRowGenericContainer: React.FC<cardRowGenericProps> = ({
  limit = 5,
  isMen = false,
  hybrid = true,
}) => {
  const [data, setData] = useState<ProductList | []>([]);
  // fetch data  on component mount and when dependency change
  useEffect(() => {
    const controller = new AbortController(); // Variable to hold the subscription
    const signal = controller.signal;
    const fetchDataAsync = async () => {
      try {
        const data: Product[] | undefined = await fetchData(limit);

        const newData = createFakeData(data, isMen, hybrid);
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally, display an error message to the user
      }
    };
    void fetchDataAsync();
    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, [limit, hybrid, isMen]);

  return (
    <div className="mx-4">
      <h3 className=" p-10 text-3xl font-bold">Flash Sale</h3>
      <div className=" grid grid-cols-4 gap-1">
        {data?.map((item: Product, i) => (
          <div key={i}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRowGenericContainer;
