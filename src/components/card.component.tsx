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

export default function CardComponent({ item }: { item: Product }) {
  console.log(item);
  return (
    <Card className="  shadow-[box-shadow: 10px 15px 20px 0px rgba(0, 0, 35, 0.15)_40px_0px_0px_0px] h-[700px] w-[350px] border-0">
      <CardHeader>
        <CardTitle>
          <h1 className="font-bold">Mens Cotton Jacket</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/*<Image*/}
        {/*  src={}*/}
        {/*  alt="Modern Walk"*/}
        {/*  className="h-[384px] w-[395px] object-cover"*/}
        {/*/>*/}
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
