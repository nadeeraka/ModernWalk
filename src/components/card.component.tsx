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
import m1 from "public/images/m1.png";
import f1 from "public/images/f1.png";
import { Product } from "~/lib/@types/types";
import { truncateString } from "~/lib/utils";

export default function CardComponent({ item }: { item: Product }) {
  console.log(item);
  return (
    <Card className=" border-1 right-shadow my-4 h-[580px] w-[400px] rounded-3xl">
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

      <Card className="h-[200px] w-full rounded-3xl bg-[#2BD9AF]">
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
