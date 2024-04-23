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
    <Card className="  shadow-[box-shadow: 10px 15px 20px 0px rgba(0, 0, 35, 0.15)_40px_0px_0px_0px] h-[700px] w-[350px] border-0">
      <CardHeader>
        <CardTitle>
          <h1 className="text-center font-bold">{item.title}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={item.image}
          alt="Modern Walk"
          className="h-[384px] w-[395px] object-cover"
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="text-center font-bold text-blue-700 ">
                RS {item.price}
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="mb102 h-[150px] w-full rounded-3xl bg-[#2BD9AF]">
            <p className="text-center text-base">
              {truncateString(item.description)}
            </p>
          </CardContent>
        </Card>
      </CardFooter>
    </Card>
  );
}
