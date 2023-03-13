import { useState } from "react";
import storiesImages from "../../assets/importer/storiesImg";
import AnimateBtn from "../Button/AnimateBtn";

export default function FocusStoryBlock() {
  const { md, sm, lg } = storiesImages.moon;

  const [hover, setHover] = useState(false);

  const hoverEffect = hover ? "opacity-60" : "opacity-0"

  return (
    <section id="focus-story" className="bg-black text-white">
      <div className="relative">
        <picture>
          <source media="(min-width:1024px)" srcSet={lg} />
          <source media="(min-width:768px)" srcSet={md} />
          <source media="(min-width:640px)" srcSet={sm} />
          <img className="w-full" src={sm} alt={"aooalacia" + " story"} />
        </picture>
        <div
          className={
            "absolute inset-0 hidden sm:flex sm:flex-col gap-y-5 justify-center z-20"
          }
        >
          <div className="md:w-1/2 lg:w-1/3 space-y-4 lg:pl-28 pl-10 py-4">
            <p className="text-base uppercase tracking-widest">
              LAST MONTH’S FEATURED STORY
            </p>
            <h2 className="text-5xl uppercase">HAZY FULL MOON OF APPALACHIA</h2>
            <p className="text-sm text-gray-400">
              March 2nd 2020{" "}
              <span className="ml-2 text-white">by John Appleseed</span>
            </p>
            <p className="text-base text-gray-400">
              The dissected plateau area, while not actually made up of geological
              mountains, is popularly called "mountains," especially in eastern
              Kentucky and West Virginia, and while the ridges are not high, the
              terrain is extremely rugged.
            </p>
            <AnimateBtn onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} underline={"dark"}>Read the story</AnimateBtn>
          </div>
        </div>
        <div
          className={`absolute -bottom-0 -left-0 w-1/2 h-full opacity-0 transition-opacity duration-200 ${hoverEffect}`}
          style={{ background: "radial-gradient(68.48% 68.48% at 0% 100%, #FFC593 0%, rgba(188, 113, 152, 0.496968) 52.36%, rgba(90, 119, 255, 0.0001) 100%)" }}>

        </div>
      </div>

      <div className={"relative block space-y-5 py-20 px-8 sm:hidden "}>
        <p className="text-base uppercase tracking-widest">
          LAST MONTH’S FEATURED STORY
        </p>
        <h2 className="text-4xl uppercase">HAZY FULL MOON OF APPALACHIA</h2>
        <p className="text-sm text-gray-400">
          March 2nd 2020{" "}
          <span className="ml-2 text-white">by John Appleseed</span>
        </p>
        <p className="text-base text-gray-400">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button className="flex gap-x-4 text-sm font-bold uppercase tracking-widest">
          Read the story
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="#fff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
}
