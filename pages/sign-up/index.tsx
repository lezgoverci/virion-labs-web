import { TestComponent } from "../../components/test-component";
import DefaultTemplate from "../../templates/default";

export default function UpdatesPage() {
  return (
    <>
      <DefaultTemplate>
        <div className="flex flex-row justify-center items-center bg-black h-screen overflow-y-scroll">
          <form action="" className="flex flex-col max-w-lg flex-1 mt-24 mx-4 bg-gray-700 p-4 text-white rounded">
            <div className="text-3xl py-4">Sign up to Virion Labs</div>
            <div className="my-4 flex flex-col">
              <label className="mb-2" htmlFor="role">Sign up as</label>
              <select className="px-3 py-2 rounded text-black" name="role" id="role">
                <option value="client">Client</option>
                <option value="talent">Talent</option>
                <option value="intern">Intern</option>
              </select>
            </div>

            <div className="my-4 flex flex-col">
              <label className="mb-2"  htmlFor="username">Username</label>
              <input
                className="px-3 py-2 rounded text-black"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="mb-2"  htmlFor="email">Email</label>
              <input
                className="px-3 py-2 rounded text-black"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="mb-2"  htmlFor="password">Password</label>
              <input
                className="px-3 py-2 rounded text-black"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="my-4 flex flex-col">
              <label className="mb-2"  htmlFor="retype-password">Retype Password</label>
              <input
                 className="px-3 py-2 rounded text-black"
                type="password"
                name="retype-password"
                id="retype-password"
              />
            </div>

            <button
              onClick={(e) =>{
                e.preventDefault()
                alert("currently working on this")
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
