import React from "react";

const SortByPrice = () => {
  return (
    <select className="p-[11px] max-w-md w-40 border border-black rounded-md">
      <option value='asc'>Low to high</option>
      <option value='desc'>High to low</option>
    </select>
  );
};

export default SortByPrice;
