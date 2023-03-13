import React, { useState } from "react";

import pricing from "../../data/pricing";
import PlanToggler from "./PlanToggler";
import PlanCard from "./PlanCard";
import { Comparision, PlansType } from "../../models/Pricing";
import ComparisionTable from "./ComparisionTable";

export default function Plans() {
  const [planType, setPlanType] = useState<"month" | "year">("month");

  const togglePlan = () => setPlanType(planType === "month" ? "year" : "month");

  const plans: PlansType[] = pricing.plans;

  const comaparisionData: Comparision[] = pricing.comaprisonData;

  return (
    <div className="mx-auto px-8 pt-16 pb-14 md:px-10 lg:w-5/6">
      <PlanToggler {...{ togglePlan, planType }} />
      <div className="flex flex-col gap-y-6 lg:mb-36 lg:flex-row lg:items-center lg:gap-x-8">
        {plans.map((plan, idx) => (
          <PlanCard
            key={plan.type + idx}
            {...{ plan, planType, focus: idx === 1 ? true : false }}
          />
        ))}
      </div>
      <div className="mx-auto lg:mb-24 lg:w-8/12">
        <h6 className="mb-12 text-center text-5xl font-bold uppercase tracking-widest">
          Compare
        </h6>
        <ComparisionTable data={comaparisionData} />
      </div>
    </div>
  );
}
