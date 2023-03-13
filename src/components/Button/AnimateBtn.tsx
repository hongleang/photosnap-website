import React from "react";

export default function AnimateBtn({ ...props }) {
  return (
    <button className={"btn-invite group " + props.className ?? ""} {...props}>
      <div
        className={`invite-underline group-hover:scale-x-100 ${
          props?.underline && props.underline === "dark"
            ? "bg-white"
            : "bg-black"
        }`}
      ></div>
      <span className="mr-4 text-sm uppercase tracking-widest">
        {props.children}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fillRule="evenodd" stroke="#fff">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </button>
  );
}
