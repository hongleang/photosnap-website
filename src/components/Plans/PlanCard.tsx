import React from "react";
import { PlansType } from "../../models/Pricing";

type Props = {
  plan: PlansType;
  planType: "month" | "year";
  focus: boolean;
};

export default function PlanCard({ plan, planType, focus }: Props) {
  const {
    type,
    desc,
    price: { month, year },
  } = plan;
  const price = planType === "month" ? month : year;

  const focusThemeClass = focus
    ? "text-white bg-black h-cardFocus"
    : "bg-gray-200";
  const focusBtnClass = focus ? "text-black bg-white" : "bg-black text-white";

  return (
    <div
      className={`relative w-full space-y-7 px-8 py-10 text-center ${focusThemeClass}`}
    >
      {focus && (
        <div
          className="absolute inset-x-0 top-0 h-1"
          style={{
            background:
              "linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
          }}
        ></div>
      )}
      <div>
        <h4 className="mb-3 text-3xl">{type}</h4>
        <p className="text-gray-500">{desc}</p>
      </div>
      <div>
        <p className="text-[40px] font-bold">${price}</p>
        <p className="text-gray-500">per {planType}</p>
      </div>
      <button
        className={`w-full py-2 text-sm uppercase tracking-widest transition-opacity focus:opacity-80 ${focusBtnClass}`}
      >
        Pick plan
      </button>
    </div>
  );
}
