import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TestComponent } from "../components/test-component";
import DefaultTemplate from "../templates/default";
import homestyles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <DefaultTemplate>
      <div className="text-white bg-gray-900 h-full flex flex-col justify-around items-center py-20">
        <div className="uppercase text-6xl max-w-2xl text-center">
          <span className="text-orange-600">Together</span> in building the future of <span className="text-pink-500">Web3</span>
        </div>
        <div className="pt-20">
          <Image src={"/logo.png"} width={"200px"} height={"200px"} />
        </div>
        Virion Labs
        <div className="text-lg">
        Opening our exclusive doors soon
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default Home;
