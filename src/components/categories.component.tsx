import React from "react";
import Link from "next/link";

const CategoriesComponent = () => {
  return (
    <div className="my-20">
      <h2 className=" m-10 text-3xl font-bold">Categories</h2>

      <div className="grid grid-cols-2 gap-1">
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Link href="/mens-clothing">
          <div className=" m-10 flex h-[470px] w-[900px] items-center justify-center rounded-3xl bg-[#2BD9AF]">
            <h1 className="my-auto text-center text-[90px] text-white">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Men's Clothing
            </h1>
          </div>
        </Link>
        <Link href="/womens-clothing">
          <div className="m-10 flex h-[470px] w-[900px] items-center justify-center rounded-3xl bg-[#FF5E84]">
            <h1 className="text-center text-4xl text-[90px] text-white">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Women's Clothing
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoriesComponent;
