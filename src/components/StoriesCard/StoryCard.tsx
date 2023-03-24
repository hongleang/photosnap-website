import { animated } from "@react-spring/web";

import React, { useMemo } from "react";
import { Story } from "../../models/Stories";
import { useWindowDimensions } from "../../utils/useWindowDimensions";

type Props = {
  details: Story;
  hasDate: boolean;
  style: any;
};

export default function StoryCard({ details, hasDate, style }: Props) {
  const { img, author, name, date } = details;
  const { sm, lg, md } = img;

  const { width } = useWindowDimensions();

  const responsiveImg = useMemo(() => {
    return width >= 640 ? md : width >= 1024 ? lg : sm;
  }, [width]);

  return (
    <animated.div
      className="card-story group"
      style={{
        backgroundImage: `url('${responsiveImg}')`,
        ...style
      }}
    >
      <div
        className="absolute inset-x-0 bottom-0 hidden h-2 group-hover:block"
        style={{
          background:
            "linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
        }}
      ></div>
      <div className="w-full text-white">
        {hasDate && <h2 className="text-sm leading-6">{date}</h2>}
        <h3 className="text-2xl capitalize">{name}</h3>
        <p className="text-sm leading-6">by {author}</p>
        <hr className="my-4 w-full opacity-80" />
        <div className="flex items-center justify-between">
          <p className="leading-widest text-base uppercase">Read story</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="#fff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </div>
      </div>
    </animated.div>
  );
}
