import React, { useRef, useState } from "react";
import GigCard from "../components/Gigcard";
import { gigs } from "../data";
import { IoIosArrowDown } from "react-icons/io";

export default function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="w-full flex justify-center bg-background text-textMain font-roboto px-6 lg:px-0">
      <div className="max-w-[1400px] w-full py-10 flex flex-col gap-4">
        {/* Breadcrumbs */}
        <span className="uppercase text-xs text-gray-600 tracking-wide">
          CraftHub &gt; Graphics & Design &gt;
        </span>

        {/* Title */}
        <h1 className="text-3xl font-bold">AI Artists</h1>

        {/* Description */}
        <p className="text-gray-500 font-light">
          Explore the boundaries of art and technology with CraftHub&apos;s AI artists.
        </p>

        {/* Filter and Sort Menu */}
        <div className="flex justify-between items-center mt-6 mb-8 flex-wrap gap-4">
          {/* Left - Budget Filter */}
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <span>Budget</span>
            <input
              ref={minRef}
              type="number"
              placeholder="Min"
              className="border border-gray-300 rounded px-2 py-1 w-20 text-sm outline-none placeholder:text-gray-400"
            />
            <input
              ref={maxRef}
              type="number"
              placeholder="Max"
              className="border border-gray-300 rounded px-2 py-1 w-20 text-sm outline-none placeholder:text-gray-400"
            />
            <button
              onClick={apply}
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition text-sm"
            >
              Apply
            </button>
          </div>

          {/* Right - Sort Menu */}
          <div className="relative flex items-center gap-3 text-sm">
            <span className="text-gray-500">Sort by</span>
            <span className="font-medium">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <IoIosArrowDown
              className="w-4 h-4 cursor-pointer"
              onClick={() => setOpen((prev) => !prev)}
            />
            {open && (
              <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded shadow-md p-4 flex flex-col gap-2 z-10">
                {sort === "sales" ? (
                  <span
                    onClick={() => reSort("createdAt")}
                    className="cursor-pointer hover:text-primary"
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => reSort("sales")}
                    className="cursor-pointer hover:text-primary"
                  >
                    Best Selling
                  </span>
                )}
                <span
                  onClick={() => reSort("sales")}
                  className="cursor-pointer hover:text-primary"
                >
                  Popular
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Gig Cards Grid */}
        <div className="flex flex-wrap justify-between gap-4">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}
