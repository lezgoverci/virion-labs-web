import { TestComponent } from "../../components/test-component";
import DefaultTemplate from "../../templates/default";
import BlankTemplate from "../../templates/blank";
import useSWR from "swr";
import { SyntheticEvent, useEffect, useState } from "react";

import { fetcher } from "../../lib/api.js";
import { useRouter } from "next/router";
import { NextRequest } from "next/server";

type LoginInputType = {
  identifier: string;
  password: string;
};

const INITIAL_DATA: LoginInputType = {
  identifier: "",
  password: "",
};

export default function LoginPage() {
  const [userInput, setUserInput] = useState<LoginInputType>(INITIAL_DATA);
  const [errorMsg, setErrorMessage] = useState("");
  const router = useRouter();

  const handleInput = (e) => {
    setUserInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    const data = JSON.stringify({ ...userInput });

    if (errorMsg === "") {
      fetcher(`${process.env.NEXT_PUBLIC_API_URI}/auth/local/`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
        method: "POST",
      })
        .then((res) => {
          localStorage.setItem("io.virionlabs.jwt", res.jwt);
          localStorage.setItem("io.virionlabs.user", JSON.stringify(res.user));

          router.push("/profile")
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetcher(`${process.env.NEXT_PUBLIC_API_URI}/users`);
  }, []);

  useEffect(() => {
    console.log("errorMsg", errorMsg);
  }, [errorMsg]);

  return (
    <>
      <BlankTemplate>
        <div className="flex flex-row justify-center items-center bg-black h-screen overflow-y-scroll">
          <div className="bg-white h-screen  hidden flex-col justify-center items-start px-20 lg:flex  grow">
            <div className="max-w-4xl">
              <div className="mb-12">Title</div>
              <div className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                fuga nam nulla necessitatibus quam enim voluptate sed asperiores
                accusamus architecto eum, pariatur aut accusantium deleniti,
                libero consequuntur dicta ratione quibusdam!
              </div>
              <div className="flex flex-wrap">
                <div className="rounded bg-gray-200 w-60 h-60 mr-2 mb-2 flex justify-center align-center flex-col text-center">
                  <div>Title</div>
                  <div>Icon </div>
                </div>
                <div className="rounded bg-gray-200 w-60 h-60 mr-2 mb-2 flex justify-center align-center flex-col text-center">
                  <div>Title</div>
                  <div>Icon </div>
                </div>
                <div className="rounded bg-gray-200 w-60 h-60 mr-2 mb-2 flex justify-center align-center flex-col text-center">
                  <div>Title</div>
                  <div>Icon </div>
                </div>
                <div className="rounded bg-gray-200 w-60 h-60 mr-2 mb-2 flex justify-center align-center flex-col text-center">
                  <div>Title</div>
                  <div>Icon </div>
                </div>
                <div className="rounded bg-gray-200 w-60 h-60 mr-2 mb-2 flex justify-center align-center flex-col text-center">
                  <div>Title</div>
                  <div>Icon </div>
                </div>
              </div>
            </div>
          </div>
          <form
            action=""
            className="flex flex-col max-w-xl flex-1 grow mt-24 mx-4 p-4 text-white rounded"
          >
            <div className="text-3xl py-4">Log into Virion Labs</div>

            <div className="my-4 flex flex-col">
              <label className="mb-2" htmlFor="identifier">
                Username or email
              </label>
              <input
                value={userInput.identifier}
                className="px-3 py-2 rounded text-black"
                type="text"
                name="identifier"
                id="identifier"
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="my-4 flex flex-col">
              <label className="mb-2" htmlFor="password">
                Password
              </label>
              <input
                value={userInput.password}
                className="px-3 py-2 rounded text-black"
                type="password"
                name="password"
                id="password"
                onChange={(e) => handleInput(e)}
              />
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="submit"
              className="rounded-full bg-pink-700 px-2 py-1 text-center text-xl py-3 "
            >
              Submit
            </button>
          </form>
        </div>
      </BlankTemplate>
    </>
  );
}
