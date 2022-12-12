import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { TestComponent } from "../components/test-component";
import DefaultTemplate from "../templates/default";
import homestyles from "./index.module.scss";
import TabMenu from "../components/tab-menu";

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white">
      <DefaultTemplate>
        <div
          id="home"
          className="section-hero text-white bg-gray-900 h-full flex flex-col justify-around py-20 px-4 sm:items-center"
        >
          <div className="capitalize text-4xl sm:text-5xl sm:text-center md:text-6xl max-w-2xl my-10">
            <span className="text-orange-600">Together</span> in building the
            future of <span className="text-pink-500">Web3</span>
          </div>
          <div className="mb-10">Reimagine. Connect. Execute</div>
          <button className="rounded-full bg-pink-700 px-3 py-1 text-center text-xl py-3 w-full max-w-xs sm:max-w-sm">
            Book a call
          </button>
        </div>
        <div
          id="vision"
          className="section-vision py-20 px-4 flex flex-col justify-center md:flex-row md:flex-wrap items-center "
        >
          <div className="max-w-2xl">
            <div className="order-1 md:order-1 md:grow-1">
              <h2 className="text-4xl pb-10">
                We dream of a new tomorrow geared towards mass adoption and
                decentralization
              </h2>
            </div>
            <div className="order-3 md:order-2 md:flex-1">
              <p>
                We believe that for web 3 to be truly limitless, like-minded
                individuals must come together to create innovative solutions.
                Traditional marketing, education and structure is slowly coming
                to an end, advancements in technology can soon takeover the
                realm we people used to dominate. But human ingenuity and
                imagination can never be out performed by the sheer complexity
                of today&apos;s technology. Through the power of making strong and
                genuine connections, we will be able to surpass the limitations
                of our modern day solutions. Afterall, without us, advancements
                would have never existed.
              </p>
            </div>
            <div className="order-2 flex justify-center py-10 md:order-3 md:flex-1">
              <Image src={"/logo.png"} width={"200px"} height={"200px"} />
            </div>
          </div>
        </div>
        <div
          id="ecosystem"
          className="section section-ecosystem py-20 px-4 flex flex-col items-center bg-gray-900"
        >
          <div className="max-w-2xl">
            <div className="">
              <div className="text-3xl mb-4">VIRIONLABS ECOSYSTEM</div>
              <div className="text-lg my-10">
                OUR FLAGSHIP OFFERINGS THAT WILL MAKE OUR VISION A REALITY
              </div>
            </div>
            <TabMenu
              items={[
                {
                  title: "Virion Solutions",
                  active: true,
                  content: {
                    title: "Work with us",
                    text: `Let Virion Labs' core team handle your headache! From ideation to
            implementation, we got you covered! With over 4 years of
            experience and numerous case studies, there is no problem we wont
            be able to create a solution for.`,
                  },
                },
                {
                  title: "Virion Connect",
                  active: false,
                  content: {
                    title: "Tap into our resources!",
                    text: `With Virion Connect, you will be able to hand pick highly
            qualified talents and specially curate a team that will take your
            project to the next level! Get access to our database of over
            15,000 skilled web 3 talents now!`,
                  },
                },
                {
                  title: "Virion Node System",
                  active: false,
                  content: {
                    title: "Need a quick broadcast?",
                    text: `Virion node system is a powerful broadcasting tool that allows
            project founders like you to gain instant exposure to thousands of
            users across the globe.`,
                  },
                },
              ]}
            />
          </div>
        </div>
        <div
          id="why"
          className="section text-black section-why py-20 px-4 flex flex-col items-center bg-gray-200"
        >
          <div className="max-w-2xl">
            <div className="text-black">
              <div className="text-3xl mb-4">WHY CHOOSE VIRION LABS?</div>
              <div className="text-lg mb-10">
                We bring creative solutions to make what seems to be impossible
                possible.
              </div>
            </div>
            <div>
              <div className="bg-slate-300 p-6 rounded-3xl mt-4">
                <div className="text-4xl pb-4 text-pink-700">Reimagine</div>
                <div>
                  With our core team&apos;s combined experience in project
                  management, marketing, community development and tech, we will
                  be able to facilitate the ideation phase for your WEB 3
                  project in a fast paced and cost efficient manner.
                </div>
              </div>
              <div className="bg-slate-300 p-6 rounded-3xl mt-4">
                <div className="text-4xl pb-4 text-pink-700">Connect</div>
                <div>
                  We built Virion Labs with the objective of being a marketing
                  powerhouse by bringing together different WEB 3 communities,
                  teams, founders and projects. By doing so, we are able to
                  speed up the building process for project founders by
                  leveraging the power of networking to your advantage.
                </div>
              </div>
              <div className="bg-slate-300 p-6 rounded-3xl mt-4">
                <div className="text-4xl pb-4 text-pink-700">Execute</div>
                <div>
                  Our talents go through a rigorous training and selection
                  process to make sure we are getting the best of the best.
                  Regardless of their previous experience and position, when
                  entering Virion Labs, they will all be treated the same. After
                  a 3 step skills and knowledge assessment, talents are then
                  assigned ranks based on their understanding of WEB 3
                  principles and their performance on the positions they
                  selected to enlist in. This is how we are able to maintain a
                  certain level of proficiency and make sure the reimagined
                  steps are executed properly.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="partners"
          className="section py-20 section-partners px-4 flex flex-col items-center bg-slate-900"
        >
          <div className="max-w-2xl">
            <div className="text-3xl mb-4">VIRION LABS INDUSTRY PARTNERS</div>
            <div className="flex flex-wrap justify-between mt-10">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white mb-4"></div>
              <div className="w-28 h-28 md:w-32 md:h-32  rounded-full bg-white mb-4"></div>
              <div className="w-28 h-28 md:w-32 md:h-32  rounded-full bg-white mb-4"></div>
              <div className="w-28 h-28 md:w-32 md:h-32  rounded-full bg-white mb-4"></div>
              <div className="w-28 h-28 md:w-32 md:h-32  rounded-full bg-white mb-4"></div>
              <div className="w-28 h-28 md:w-32 md:h-32  rounded-full bg-white mb-4"></div>
            </div>
          </div>
        </div>
        <div className="section cta py-20 h-full px-4 align-center flex flex-col items-center">
          <div className="max-w-2xl flex-col">
            <div className="text-3xl mb-4">
              Are you ready to unlock the power of virion labs?
            </div>
            <div className="my-8">
              Book a free call with us. No time wasted. Just pure value.
            </div>
            <div className="rounded-full bg-pink-700 px-3 py-1 text-center text-xl py-3 max-w-sm">
              <button>
              Reimagine
              </button>

            </div>
          </div>
        </div>
      </DefaultTemplate>
    </div>
  );
};

export default Home;
