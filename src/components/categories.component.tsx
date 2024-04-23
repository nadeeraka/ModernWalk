import React from "react";

const CategoriesComponent = () => {
  return (
    <div>
      <h2 className="m-3 font-bold">Categories</h2>
      <div className="flex flex-wrap justify-between">
        <div className="">
          <h1 className="text-center text-4xl">Men's Clothing</h1>
        </div>
        <div className="">
          <h1 className="text-center text-4xl">Women's Clothing</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
