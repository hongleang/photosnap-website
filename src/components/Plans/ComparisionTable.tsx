import React from "react";
import { Comparision } from "../../models/Pricing";

type Props = {
  data: Comparision[];
};

export default function ComparisionTable({ data }: Props) {
  return (
    <table className="mt-14 w-full table-auto text-sm">
      <thead>
        <tr>
          <th className="table-cell border-b-2 border-black pb-5 text-left uppercase">
            The features
          </th>
          <th className="hidden border-b-2 border-black pb-5 sm:table-cell">
            Basic
          </th>
          <th className="hidden border-b-2 border-black pb-5 sm:table-cell">
            Pro
          </th>
          <th className="hidden border-b-2 border-black pb-5 sm:table-cell">
            Business
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ feature, availibility }) => (
          <React.Fragment key={"feats-" + feature}>
            <tr>
              <td className="py-5 font-bold uppercase">{feature}</td>
              <td className="hidden flex-1 text-center sm:table-cell">
                {availibility.includes("basic") && (
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      d="M1 8.124L5.623 13 17 1"
                    />
                  </svg>
                )}
              </td>
              <td className="hidden flex-1 text-center sm:table-cell">
                {availibility.includes("pro") && (
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      d="M1 8.124L5.623 13 17 1"
                    />
                  </svg>
                )}
              </td>
              <td className="hidden flex-1 text-center sm:table-cell">
                {availibility.includes("business") && (
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      d="M1 8.124L5.623 13 17 1"
                    />
                  </svg>
                )}
              </td>
            </tr>
            <tr className="flex pb-1 text-left text-[10px] font-bold uppercase text-gray-500 sm:hidden">
              <th className="flex-1">Basic</th>
              <th className="flex-1">Pro</th>
              <th className="flex-1">Business</th>
            </tr>
            <tr className="flex border-b-2 border-gray-300 pb-5 font-bold uppercase text-gray-500 sm:hidden">
              <td className="flex-1">
                {availibility.includes("basic") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      d="M1 8.124L5.623 13 17 1"
                    />
                  </svg>
                )}
              </td>
              <td className="flex-1">
                {availibility.includes("pro") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      d="M1 8.124L5.623 13 17 1"
                    />
                  </svg>
                )}
              </td>
              <td className="flex-1">
                {availibility.includes("business") && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      d="M1 8.124L5.623 13 17 1"
                    />
                  </svg>
                )}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
