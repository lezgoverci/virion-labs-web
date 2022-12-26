import { TestComponent } from "../../components/test-component";
import DefaultTemplate from "../../templates/default";
import useSWR from "swr";
import { SyntheticEvent, useEffect, useState } from "react";

import { fetcher } from "../../lib/api.js";

type User = {
  username: string;
  email: string;
  password: string;
  role: string;
  type?: string;
};

const INITIAL_DATA: User = {
  username: "",
  email: "",
  password: "",
  role: "",
  type: "",
};

export default function UpdatesPage() {
  const [userInput, setUserInput] = useState<User>(INITIAL_DATA);
  const [errorMsg, setErrorMessage] = useState("");

  const handleInput = (e) => {
    setUserInput((prev) => {
      if (e.target.name === "retype-password") {
        if (e.target.value !== userInput.password) {
          setErrorMessage("Passwords don't match");
        } else {
          setErrorMessage("");
        }
      }
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    const data = JSON.stringify({ ...userInput });

    if (errorMsg === "") {
      fetcher(`${process.env.NEXT_PUBLIC_API_URI}/users`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
        method: "POST",
      });
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
      <DefaultTemplate>
        <div className="flex flex-row justify-center items-center bg-black h-screen overflow-y-scroll">
          <form
            action=""
            className="flex flex-col max-w-lg flex-1 mt-24 mx-4 bg-gray-700 p-4 text-white rounded"
          >
            <div className="text-3xl py-4">Sign up to Virion Labs</div>
            <div className="my-4 flex flex-col">
              <label className="mb-2" htmlFor="role">
                Sign up as
              </label>
              <select
                className="px-3 py-2 rounded text-black"
                name="type"
                id="type"
                onChange={(e) => handleInput(e)}
              >
                <option value="client">Client</option>
                <option value="talent">Talent</option>
                <option value="intern">Intern</option>
              </select>
            </div>

            <div className="my-4 flex flex-col">
              <label className="mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="px-3 py-2 rounded text-black"
                type="text"
                name="username"
                id="username"
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="px-3 py-2 rounded text-black"
                type="email"
                name="email"
                id="email"
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="px-3 py-2 rounded text-black"
                type="password"
                name="password"
                id="password"
                onChange={(e) => handleInput(e)}
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="mb-2" htmlFor="retype-password">
                Retype Password
              </label>
              <input
                className="px-3 py-2 rounded text-black"
                type="password"
                name="retype-password"
                id="retype-password"
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
      </DefaultTemplate>
    </>
  );
}
