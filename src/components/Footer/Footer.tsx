import React from "react";
import {
  FaceBook,
  Instagram,
  Logo,
  Pinterest,
  Twitter,
  Youtube,
} from "../../assets/importer/sharedImg/SvgImporter";
import { Link } from "react-router-dom";
import AnimateBtn from "../Button/AnimateBtn";

export default function Footer() {
  return (
    <footer className="flex w-full justify-center bg-black py-14 md:p-10">
      <div className="flex flex-col flex-wrap items-center text-center text-white md:flex-row md:text-start lg:items-start">
        <div className="md:basis-1/2 lg:basis-1/3">
          <Logo color="white" />
        </div>
        <ul className="mt-8 flex w-full items-center justify-between md:order-5 md:mt-0 md:basis-1/2 md:justify-start md:gap-x-3">
          <li>
            <FaceBook className="cursor-pointer" enableHover={false} />
          </li>
          <li>
            <Youtube className="cursor-pointer" enableHover={false} />
          </li>
          <li>
            <Twitter className="cursor-pointer" enableHover={false} />
          </li>
          <li>
            <Pinterest className="cursor-pointer" enableHover={false} />
          </li>
          <li>
            <Instagram className="cursor-pointer" enableHover={false} />
          </li>
        </ul>
        <ul 
          className="mt-12 mb-24 items-center gap-x-5 space-y-4 tracking-widest md:order-3 md:mt-4 md:mb-16 md:flex md:basis-full md:space-y-0 lg:block lg:order-2 lg:basis-1/3 lg:my-0 lg:space-y-3">
          <li className="nav-link text-sm font-normal">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link text-sm font-normal">
            <Link to="/stories">Stories</Link>
          </li>
          <li className="nav-link text-sm font-normal">
            <Link to="/features">Features</Link>
          </li>
          <li className="nav-link text-sm font-normal">
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
        <div className="mb-9 flex items-center justify-center md:order-2 md:mb-0 md:basis-1/2 md:justify-end lg:order-3 lg:basis-1/3">
          <AnimateBtn underline={"dark"}>Get an invite</AnimateBtn>
        </div>
        <p className="text-sm text-gray-500 md:order-last md:basis-1/2 md:text-end">
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
