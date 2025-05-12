import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Range } from "react-range";
import { setPriceRange } from "../../redux/productSlice";

export default function ProductPage() {
  const dispatch = useDispatch();
  const {
    values,
    selectedCats,
    sortOrder,
    products: reduxProducts,
  } = useSelector((state) => state.product);

  return (
    <div>
      {/* Sidebar */}
      <aside className="w-[309px] space-y-8 pr-6 text-[#2C2C2C] font-medium">
        {/* Price Range */}
        <div>
          <h2 className="text-xl font-bold mb-4">Price range</h2>
          <Range
            step={1}
            min={100}
            max={500}
            values={values}
            onChange={(vals) => dispatch(setPriceRange(vals))}
            renderTrack={({ props, children }) => (
              <div {...props} className="h-2 w-full bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{
                    marginLeft: `${((values[0] - 100) / (500 - 100)) * 100}%`,
                    width: `${((values[1] - values[0]) / (500 - 100)) * 100}%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                className="w-4 h-4 rounded-full bg-blue-500 shadow-md"
              />
            )}
          />
          <div className="flex justify-between mt-4 text-sm gap-4">
            <div>
              <label className="block text-base text-[#4F4F4F] mb-1">
                Min price
              </label>
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
                <input
                  type="number"
                  value={values[0]}
                  readOnly
                  className="w-14 text-center bg-transparent border-none outline-none"
                />
                <span className="ml-1 text-gray-400">$</span>
              </div>
            </div>

            <div>
              <label className="block text-base text-[#4F4F4F] mb-1">
                Max price
              </label>
              <div className="flex items-center border border-gray-300 rounded-full px-3 py-2">
                <input
                  type="number"
                  value={values[1]}
                  readOnly
                  className="w-14 text-center bg-transparent border-none outline-none"
                />
                <span className="ml-1 text-gray-400">$</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
