// app/register/page.tsx

"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabse";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConfirmPassword] = useState<string>("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmpassword) {
      setError("Password does not match.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        alert("Registration successful! Please check your email to confirm.");
        router.push("/signIn");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setEmail("");
      setPassword("");
      setName("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-[#131921] flex flex-col text-black items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        {/* Amazon Logo */}
        <Link href="/">
          <Image
            width={240}
            height={240}
            src="/amazon_logo.png"
            alt="Amazon Logo"
            className="w-36 mx-auto mb-6"
          />
        </Link>

        <h1 className="text-3xl font-semibold mb-6">Create account</h1>

        {error && (
          <div className="mb-4 text-center text-red-600 font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={registerHandler} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold text-sm">
              Your name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="First and last name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f0c14b]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f0c14b]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 font-semibold text-sm"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f0c14b]"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmpassword"
              className="block mb-1 font-semibold text-sm"
            >
              Re-enter password
            </label>
            <input
              id="confirmpassword"
              type="password"
              required
              placeholder="Confirm password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f0c14b]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f0c14b] border border-[#a88734] rounded-md py-3 text-sm font-semibold hover:bg-[#ddb347] active:bg-[#c7a22a] transition"
          >
            Create your Amazon account
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-600">
          By creating an account, you agree to Amazon’s{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Notice
          </a>
          .
        </p>

        <div className="mt-6 border-t pt-4 text-center text-sm">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-blue-600 hover:underline"
          >
            Sign-In
          </button>
        </div>
      </div>
    </div>
  );
}
