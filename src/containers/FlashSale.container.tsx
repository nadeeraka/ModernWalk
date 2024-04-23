import React from "react";
import Card from "../components/card.component";
import m1 from "../../public/images/m1.png";
import f1 from "../../public/images/f1.png";

const FlashSaleContainer = () => {
  const lnkarray = [
    { url: m1 },
    { url: f1 },
    { url: m1 },
    { url: f1 },
    { url: m1 },
    { url: f1 },
  ];
  return (
    <div>
      <h3 className="my-3 ml-3 text-2xl font-bold">Flash Sale</h3>
      <div className="grid grid-cols-3 gap-4">
        {lnkarray.map((item, i) => (
          <div key={i}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSaleContainer;
