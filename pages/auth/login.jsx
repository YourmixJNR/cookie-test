import React from "react";
import { useState } from "react";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // check the format of the email using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }
  };

  function clearFormState() {
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="py-5 font-bold text-xl">Login as Admin</h3>
      <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit}>
        <input
          type="email"
          required={true}
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          className="w-full text-black p-3 rounded-lg outline-none border border-gray-300"
        />
        <input
          type="password"
          required={true}
          value={password}
          onChange={handlePasswordChange}
          className="w-full text-black p-3 rounded-lg outline-none border border-gray-300"
        />
        <button className="bg-white w-full flex justify-center text-black font-semibold rounded p-2 my-6">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default login;
