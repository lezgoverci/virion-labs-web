import Link from "next/link";
import Image from "next/image";
import { RoundedButton } from "../button-rounded";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [isOpenNavMobile, setIsOpenNavMobile] = useState(false);

  return (
    <div className="header flex flex-col">
      <div className="py-4 bg-black text-white flex-row flex items-center px-3">
        <div
          onClick={() => setIsOpenNavMobile(!isOpenNavMobile)}
          className="btn-menu"
        >
          <Bars3Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="hidden self-start">
            <Image src={"/logo.png"} width={"100"} height={"100"} />
          </div>

          <span className="pl-3">Virion Labs</span>
        </div>
        <div className="hidden links flex flex-row list-none">
          {[
            {
              title: "Home",
              link: "/",
            },
            {
              title: "Vision",
              link: "/",
            },
            {
              title: "Ecosystem",
              link: "/",
            },
            {
              title: "Why Virion",
              link: "/",
            },
            {
              title: "Partners",
              link: "/",
            },
          ].map((item, index) => {
            return (
              <li key={index} className="mx-6">
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
        <div className="links flex flex-col list-none pt-4 bg-slate-900 text-gray-600">
          {[
            {
              title: "Home",
              link: "/",
              active: true,
            },
            {
              title: "Vision",
              link: "/",
              active: false,
            },
            {
              title: "Ecosystem",
              link: "/",
              active: false,
            },
            {
              title: "Why Virion",
              link: "/",
              active: false,
            },
            {
              title: "Partners",
              link: "/",
              active: false,
            },
          ].map((item, index) => {
            return (
              <li
                key={index}
                className={`pl-4 mb-3 ${
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
  );
}
