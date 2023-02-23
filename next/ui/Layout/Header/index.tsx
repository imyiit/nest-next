import React, { useState } from "react";
import Link from "next/link";
import { MdGTranslate } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

import type { Props } from "./index.d";

const Header = ({
  items = [],
  children,
  itemPosition = "Back",
  logo = { icon: <MdGTranslate />, text: "Yiit" },
}: Props & React.PropsWithChildren) => {
  const [hamburgerOpened, setHamburgerOpened] = useState<boolean>(false);

  return (
    <div className="w-full h-full">
      <div className="h-full grid grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-2">
        <div className="flex items-center h-full col-span-1 max-md:items-center max-md:w-full max-md:justify-center">
          <Link href="/" className="flex items-center font-bold text-xl">
            {logo.icon} <p>{logo.text}</p>
          </Link>
        </div>

        <div className="z-50 flex relative justify-end items-center col-span-2 max-md:flex-col max-md:justify-start max-md:gap-y-2">
          <div
            onClick={() => {
              setHamburgerOpened((k) => !k);
            }}
            className={`transition-all cursor-pointer p-3 text-xl rounded hidden max-md:block absolute shadow-xl text-white right-0 top-0 z-[1] select-none ${
              hamburgerOpened
                ? "bg-red-600 hover:bg-red-500"
                : "bg-gray-800 hover:bg-blue-800"
            }`}
          >
            {!hamburgerOpened ? <GiHamburgerMenu /> : <MdOutlineClose />}
          </div>

          <div
            className={`transition-all flex items-center gap-x-4 max-md:flex-col max-md:gap-y-1 max-md:bg-gray-100 max-md:shadow max-md:w-full max-md:mt-5 max-md:overflow-hidden max-md:absolute ${
              hamburgerOpened ? "max-h-screen" : "max-h-0"
            }`}
          >
            {itemPosition === "Front" && children}

            {items &&
              items.map((v, i) => {
                return (
                  <Link
                    key={`HeaderItem-${i}`}
                    href={`${v.url}`}
                    className="transition-all relative font-bold rounded select-none py-2 text-gray-800 after:absolute after:transition-all after:w-full after:scale-0 after:h-0.5 after:rounded after:bg-blue-500 after:bottom-0 after:left-0 hover:after:scale-100 max-md:min-w-24 max-md:my-1 max-md:flex max-md:flex-shrink-0 max-md:justify-center max-md:items-center"
                  >
                    {v.label}
                  </Link>
                );
              })}

            {itemPosition === "Back" && children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
