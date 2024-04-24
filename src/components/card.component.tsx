import * as React from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Product } from "~/lib/@types/types";
import { identifyGender, truncateString } from "~/lib/utils";

export default function CardComponent({ item }: { item: Product }) {
  return (
    <Card className=" border-1 right-shadow my-4 h-[580px] w-[400px] rounded-3xl ">
      <CardHeader>
        <CardTitle>
          <h1 className="text-center font-bold">{item.title}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={item.image}
          alt="Modern Walk"
          className="h-[284px] w-[395px] object-cover"
        />
      </CardContent>

      <Card className={identifyGender(item.title)}>
        <CardContent className=" ">
          <CardTitle className="py-3">
            <h1 className="text-center font-bold text-blue-700 ">
              RS {item.price}
            </h1>
          </CardTitle>

          <p className="text-center text-base font-[400]">
            {truncateString(item.description)}
          </p>
        </CardContent>
      </Card>
    </Card>
  );
}
