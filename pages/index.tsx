import type { NextPage } from "next";
import router from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    //const jwt = localStorage.getItem("io.virionlabs.jwt");

      router.replace("/home")


  }, []);

  return <></>
};

export default Home;
