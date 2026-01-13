import React from "react";
import { Form, Link, useSearchParams } from "react-router-dom";

const LoginForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") !== "signup";

  const switchMode = () => {
    setSearchParams({ mode: isLogin ? "signup" : "login" });
  };

  return (
    <Form className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold tracking-widest text-gray-700 uppercase">
        {isLogin ? "Sign In" : "Create new Account"}
      </h2>
      <input
        type="email"
        className="col-span-2 text-gray-700 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        placeholder="Enter your email..."
      />
      <input
        type="password"
        className="col-span-2 text-gray-700 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        placeholder="Enter you password..."
      />
      {!isLogin && (
        <input
          type="password"
          className="col-span-2 text-gray-700 w-full px-4 py-4 outline-none border border-gray-300 rounded"
          placeholder="Confirm password..."
        />
      )}
      <Link
        to={`?mode=${isLogin}`}
        className="col-span-2 w-full px-8 py-2 bg-[#63ce36] text-lg tracking-widest text-center text-white mt-4 mb-4 uppercase"
      >
        {isLogin ? "Login" : "Sign-Up"}
      </Link>
      <p className="text-gray-700 ">
        Don't have an account?{" "}
        <span
          onClick={switchMode}
          className="text-[#63ce36] underline cursor-pointer"
        >
          Click here
        </span>{" "}
        to sign-up.
      </p>
    </Form>
  );
};

export default LoginForm;
