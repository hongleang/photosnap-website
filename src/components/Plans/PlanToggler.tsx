import React from "react";

type Props = {
  togglePlan: () => void;
  planType: "month" | "year";
};

export default function PlanToggler({ togglePlan, planType }: Props) {
  const selectorClassName =
    planType === "month" ? "translate-x-1" : "translate-x-7";

  return (
    <div
      onClick={togglePlan}
      className="mx-auto flex w-72 items-center justify-around pb-10"
    >
      <p
        className={`transition-color text-2xl ${
          planType === "year" ? "text-gray-400" : ""
        }`}
      >
        Monthly
      </p>
      <div
        className={`h-8 w-16 rounded-2xl ${
          planType === "year" ? "bg-black" : "bg-gray-200"
        } flex cursor-pointer items-center px-1 transition delay-200`}
      >
        <div
          className={`rounded-full ${
            planType === "year" ? "bg-white" : "bg-black"
          } h-6 w-6 ${selectorClassName} transition duration-300`}
        ></div>
      </div>
      <p
        className={`transition-color text-2xl  ${
          planType === "month" ? "text-gray-400" : ""
        }`}
      >
        Yearly
      </p>
    </div>
  );
}
