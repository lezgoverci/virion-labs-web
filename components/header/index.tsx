import Link from "next/link";
import Image from "next/image";
import { RoundedButton } from "../button-rounded";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <div className="py-4 bg-black text-white flex-row flex items-center px-3">
      <div>
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
        ].map((item) => {
          return (
            <li className="mx-6">
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </div>
      <div className="float-right">
        <RoundedButton text="Connect" />
      </div>
    </div>
  );
}
