import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const firebaseErrorMessages = {
    "auth/invalid-email":
      "The email address is invalid. Please enter a valid email address.",
    "auth/user-disabled":
      "This user account has been disabled. Please contact support.",
    "auth/user-not-found":
      "No account found with this email. Please sign up or try a different email.",
    "auth/wrong-password": "The password is incorrect. Please try again.",
    "auth/too-many-requests":
      "You've exceeded the rate limit for authentication attempts. Please try again later.",
    "auth/operation-not-allowed":
      "Email/password sign-in is currently disabled. Please contact support.",
    "auth/invalid-credential":
      "The provided credential is invalid. Please check your email and password and try again.",
  };

  const signIn = (e) => {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage =
          firebaseErrorMessages[errorCode] ||
          "An error occurred. Please try again.";
        setError(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="w-full max-w-md p-6 bg-white border-t-2">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Log In</h1>
        <form onSubmit={signIn}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <Link
            to="/forgot-password"
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot Password?
          </Link>
          <Link
            to="/sign-up"
            className="text-sm text-indigo-600 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
