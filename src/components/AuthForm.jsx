import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, replace, useNavigate, useSearchParams } from "react-router-dom";
import { userActions } from "../features/users/userSlice";
import { auth } from "./firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") !== "signup";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (!isLogin && password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      let userCredentials;
      if (isLogin) {
        userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      }
      const user = userCredentials.user;
      const token = await user.getIdToken();

      dispatch(
        userActions.login({ token, email: user.email, userId: user.uid })
      );
      if(isLogin){
        navigate('/')
      }
      else{
        navigate('/profile', {replace: true})
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const switchMode = () => {
    setSearchParams({ mode: isLogin ? "signup" : "login" });
  };

  return (
    <Form onSubmit={submitHandler} className="flex flex-col gap-4 p-4">
      <h2 className="text-xl font-bold tracking-widest text-gray-700 uppercase">
        {isLogin ? "Sign In" : "Create new Account"}
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        className="col-span-2 text-gray-700 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="col-span-2 text-gray-700 w-full px-4 py-4 outline-none border border-gray-300 rounded"
        placeholder="Enter you password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {!isLogin && (
        <input
          type="password"
          className="col-span-2 text-gray-700 w-full px-4 py-4 outline-none border border-gray-300 rounded"
          placeholder="Confirm password..."
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      )}
      <button
        type="submit"
        className="col-span-2 w-full px-8 py-2 bg-[#63ce36] text-lg tracking-widest text-center text-white mt-4 mb-4 uppercase"
      >
        {isLogin ? "Login" : "Sign-Up"}
      </button>
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

export default AuthForm;
