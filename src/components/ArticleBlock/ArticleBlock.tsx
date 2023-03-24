import { animated } from "@react-spring/web";

import { ArticleBlockType } from "../../models/ArticleBlock";
import AnimateBtn from "../Button/AnimateBtn";

type Props = {
  articleBlock: ArticleBlockType;
  reverse?: boolean;
  style?: any;
};

export default function ArticleBlock({
  articleBlock: { title, desc, image, theme },
  reverse = false,
  style,
}: Props) {
  const { lg, md } = image;
  const themeClassName =
    theme === "dark" ? "bg-black text-white" : "bg-white text-black";

  return (
    <animated.div className="md:flex" style={style ? style : {}}>
      <picture className={`flex-1 ${reverse ? "order-2" : ""}`}>
        <source media="(min-width:1024px)" srcSet={lg} />
        <source media="(min-width:768px)" srcSet={md} />
        <source media="(min-width:640px)" srcSet={md} />
        <img className="w-full" src={lg} alt={title + " story"} />
      </picture>
      <div
        className={
          "relative py-20 px-8 md:basis-7/12 md:py-36 md:px-14 lg:basis-5/12 lg:px-32 " +
          themeClassName
        }
      >
        {theme === "dark" && (
          <div
            className="absolute top-0 h-1 w-32 md:top-32 md:left-0 md:h-72 md:w-2"
            style={{
              background:
                "linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)",
            }}
          ></div>
        )}
        <div className="space-y-5">
          <h2 className="text-4xl uppercase lg:text-5xl">{title}</h2>
          <p className="text-base text-gray-400">{desc}</p>
          <AnimateBtn underline={theme}>Get an invite</AnimateBtn>
        </div>
      </div>
    </animated.div>
  );
}
