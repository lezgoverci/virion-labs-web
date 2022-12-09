import Link from "next/link";
import Image from "next/image";
import { RoundedButton } from "../button-rounded";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);
  const [navList, setNavList] = useState([
    {
      title: "Home",
      link: "#home",
      active: true,
    },
    {
      title: "Vision",
      link: "#vision",
      active: false,
    },
    {
      title: "Ecosystem",
      link: "#ecosystem",
      active: false,
    },
    {
      title: "Why Virion",
      link: "#why",
      active: false,
    },
    {
      title: "Partners",
      link: "#partners",
      active: false,
    },
  ]);

  const handleNavSelect = (navItem: {
    title: string;
    link: string;
    active: boolean;
  }) => {
    navList.map((item) => {
      if (item.title == navItem.title) {
        item.active = true;
        window.location.href = item.link;
        setIsOpenNavMobile(false)
      } else {
        item.active = false;
      }
    });
  };

  return (
    <div className="fixed w-full z-10 shadow">
      <div className="header flex flex-col bg-gray-900 xl:justify-center xl:flex-1 ">
        <div className="py-6  text-white flex-row  flex items-center align-center px-3  ">
          <div
            onClick={() => setIsOpenNavMobile(!isOpenNavMobile)}
            className="btn-menu md:hidden"
          >
            <Bars3Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 md:flex-none">
            <div className="hidden self-start">
              <Image src={"/logo.png"} width={"100"} height={"100"} />
            </div>

            <span className="pl-3">Virion Labs</span>
          </div>
          <div className="hidden links md:flex md:flex-1 justify-end lg:justify-center flex-row list-none">
            {navList.map((item, index) => {
              return (
                <li
                  onClick={() => handleNavSelect(item)}
                  key={index}
                  className="mx-6"
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </div>
          <div className="float-right">
            <RoundedButton text="Connect" />
          </div>
        </div>

        {isOpenNavMobile ? (
          <div className="md:hidden links flex flex-col list-none pt-4 bg-slate-800 text-gray-600">
            {navList.map((item, index) => {
              return (
                <li
                  onClick={() => handleNavSelect(item)}
                  key={index}
                  className={`pl-4 my-3 ${
                    item.active ? "text-white" : "text-gray-600"
                  }`}
                >
                  <Link href={item.link}>{item.title}</Link>
                </li>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
