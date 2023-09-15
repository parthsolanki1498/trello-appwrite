import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import { useState } from "react";

function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false); // State to toggle login form

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>

        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="Trello Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"></MagnifyingGlassIcon>
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="Parth Solanki" round size="50" color="#0055D1" />

          {/* Login Button */}
          <button
            onClick={() => setShowLoginForm(!showLoginForm)}
            className="px-4 py-2 text-white bg-[#0055D1] rounded-md hover:bg-[#0043C2] transition-colors"
          >
            {showLoginForm ? "Close" : "Login"}
          </button>
        </div>
      </div>

      {/* Chat GPT */}
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-[#0055D1] mr-1 ${
              loading && "animate-spin"
            }`}
          />
          {suggestion && !loading
            ? suggestion
            : "GPT is summarizing your tasks for the day..."}
        </p>
      </div>

      {/* Login Form */}
      {showLoginForm && (
        <div className="bg-white p-5 mt-2 rounded-md shadow-md max-w-sm mx-auto">
          <h2 className="text-[#0055D1] text-2xl font-semibold mb-4">
            Login to Your Account
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0055D1]"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#0055D1]"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 bg-[#0055D1] text-white rounded-md hover:bg-[#0043C2] transition-colors"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
