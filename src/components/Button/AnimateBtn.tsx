import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  underline?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function AnimateBtn({ className, underline, children, onMouseLeave, onMouseEnter }: Props) {
  return (
    <button className={"btn-invite group " + className ?? ""} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <span
        className={`invite-underline group-hover:scale-x-100 ${
          underline && underline === "dark"
            ? "bg-white"
            : "bg-black"
        }`}
      ></span>
      <span className="mr-4 text-sm uppercase tracking-widest">
        {children}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fillRule="evenodd" stroke="#fff">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </button>
  );
}
