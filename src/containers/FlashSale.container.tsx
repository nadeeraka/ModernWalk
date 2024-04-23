"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/card.component";
import m1 from "../../public/images/m1.png";
import f1 from "../../public/images/f1.png";
import { fetchData } from "~/lib/api/fetchData";
import {
  FlashSaleContainerProps,
  Product,
  ProductList,
} from "~/lib/@types/types";
import { createFakeData } from "~/lib/utils";

const FlashSaleContainer = () => {
  const [data, setData] = useState<ProductList | []>([]);
  useEffect(() => {
    const controller = new AbortController(); // Variable to hold the subscription
    const signal = controller.signal;
    const fetchDataAsync = async () => {
      try {
        const data: ProductList = await fetchData();

        const newData = createFakeData(data, true);
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
    <div>
      <h3 className="my-3 ml-3 text-2xl font-bold">Flash Sale</h3>
      <div className="grid grid-cols-3 gap-4">
        {data?.map((item: Product, i) => (
          <div key={i}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSaleContainer;
