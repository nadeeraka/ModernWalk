import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Product } from "~/lib/@types/types";
import { changeCssClassBasedOnGender, truncateString } from "~/lib/utils";

export default function CardComponent({ item }: { item: Product }) {
  return (
    <Card className=" border-1 right-shadow my-6 h-[470px] w-[400px] rounded-3xl ">
      <CardHeader>
        <CardTitle>
          <h1 className="text-center font-bold">{item.title}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          width={400}
          quality={"90"}
          src={item.image}
          alt="Modern Walk"
          className="h-[200px] w-[395px] object-contain"
        />
      </CardContent>

      <Card
        className={`max-h-[250px] border-0 ${changeCssClassBasedOnGender(item.title)}`}
      >
        <CardContent className=" ">
          <CardTitle className="py-3">
            <h1 className="text-center font-bold text-blue-700 ">
              RS {item.price}
            </h1>
          </CardTitle>

          <p className=" text-center text-base font-[620]">
            {truncateString(item.description)}
          </p>
        </CardContent>
      </Card>
    </Card>
  );
}
