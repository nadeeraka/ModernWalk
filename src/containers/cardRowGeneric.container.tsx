"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/card.component";
import { fetchData } from "~/lib/api/fetchData";
import { Product, ProductList } from "~/lib/@types/types";
import { createFakeData } from "~/lib/utils";

// Note!
// this component accept 3main values
// 1 api result limit [ limit]
// 2 what is it women cloths or men [isMen]
// 3 if you want both cloths as mix  [hybrid]

interface cardRowGenericProps {
  limit: number;
  isMen: boolean;
  hybrid?: boolean;
}
const CardRowGenericContainer = ({
  limit = 5,
  isMen = false,
  hybrid = true,
}: cardRowGenericProps) => {
  const [data, setData] = useState<ProductList | []>([]);
  console.log(isMen, hybrid, "limit", limit);
  // fetch data only on component mount
  useEffect(() => {
    const controller = new AbortController(); // Variable to hold the subscription
    const signal = controller.signal;
    const fetchDataAsync = async () => {
      try {
        const data: ProductList = await fetchData(limit);

        const newData = createFakeData(data, isMen, hybrid);
        console.log(newData);
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally, display an error message to the user
      }
    };
    console.log(data);
    void fetchDataAsync();
    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, []); // Empty dependency array to fetch data only on mount

  return (
    <div className="mx-4">
      <h3 className=" p-10 text-3xl font-bold">Flash Sale</h3>
      <div className="mx-3 grid grid-cols-4 gap-1">
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
