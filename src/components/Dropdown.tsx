"use client";
import { Calculator, ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Dropdown = ({ name, onChange, options, label, isHorizontal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleChange = (name, ele) => {
    onChange(name, ele.value);
    setIsOpen(false);
    setSelected(ele);
  };

  return (
    <div className="relative flex flex-col flex-1 border-2 rounded-lg bg-[#ffffff] min-w-[200px] p-4 ">
      {/* Header Section */}
      <span
        className={`${
          isHorizontal ? "flex items-center gap-[20px]" : "flex flex-col gap-[50px]"
        } cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Calculator />
        <span className="flex justify-between items-center w-full font-semibold">
          <p className="w-max">{(selected && selected.label) || label}</p>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </span>
      {/* Dropdown List */}
      {isOpen && (
        <ul
          className={`absolute left-0 top-full mt-2 w-full max-h-[160px] overflow-y-auto bg-white border rounded-lg shadow-lg z-50`}
          style={{
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {options.map((ele) => (
            <li
              className="p-2 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:font-semibold"
              key={ele.value}
              onClick={() => handleChange(name, ele)}
            >
              {ele.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
