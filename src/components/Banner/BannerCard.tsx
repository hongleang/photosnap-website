import React, { useMemo } from "react";

import BetaBgLg from "../../assets/images/shared/desktop/bg-beta.jpg";
import BetaBgMd from "../../assets/images/shared/tablet/bg-beta.jpg";
import BetaBgSm from "../../assets/images/shared/mobile/bg-beta.jpg";
import { useWindowDimensions } from "../../utils/useWindowDimensions";
import AnimateBtn from "../Button/AnimateBtn";

export default function BannerCard() {
  const { width } = useWindowDimensions();
  const responsiveImg = useMemo(() => {
    return width >= 640 ? BetaBgMd : width >= 1024 ? BetaBgLg : BetaBgSm;
  }, [width]);
  return (
    <div
      className="items-bottom w-100 relative flex h-[288px] flex-col justify-center bg-cover bg-center bg-no-repeat p-10"
      style={{
        backgroundImage: `url(${responsiveImg})`,
      }}
    >
      <div
        className="absolute top-0 h-1 w-32"
        style={{
          background:
            "linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
        }}
      ></div>
      <div className="flex w-full flex-col gap-y-8 text-white md:flex-row md:items-center md:justify-between">
        <h3 className="text-4xl uppercase tracking-widest md:basis-3/5 md:text-5xl lg:basis-2/5">
          We’re in beta. Get your invite today!
        </h3>
        <div className="mb-9 flex items-center justify-center md:order-2 md:mb-0 md:basis-1/2 md:justify-end">
          <AnimateBtn underline={"dark"}>Get an invite</AnimateBtn>
        </div>
      </div>
    </div>
  );
}
