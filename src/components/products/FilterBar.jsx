import React from "react";
import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = ({ setBrand, setCategory, handleReset }) => {
  return (
    <div className="bg-gray-200 h-full min-h-screen p-4 rounded-t-md">
        <div className="flex items-center gap-1">
            <TbFilter size={24} />
            <h2 className="text-xl font-semibold">Filters</h2>
        </div>
        <div className="mt-8 flex flex-col gap-3 items-center">
            <div className="w-full">
                <select className="p-[11px] w-full border border-black rounded-md" onChange={(e) => setBrand(e.target.value)}>
                    <option disabled selected>
                        Brand
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>
            <div className="w-full">
                <select className="p-[11px] w-full border border-black rounded-md" onChange={(e) => setCategory(e.target.value)}>
                    <option disabled selected>
                    Category
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
            </div>
        </div>
        <button onClick={handleReset} className="btn mt-4 w-full btn-primary flex items-center">
            <p>Reset</p>
            <GrPowerReset size={20}/>
        </button>
    </div>
  );
};

export default FilterBar;
