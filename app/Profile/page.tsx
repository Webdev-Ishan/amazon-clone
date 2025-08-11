"use client";

import { supabase } from "@/lib/supabse";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userinfo, setuserinfo] = useState<User | null>();
  const router = useRouter();
  const getUserinfo = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      console.log(session);
      if (session && session.user) {
        setuserinfo(session.user);
        console.log(session.user);
      } else if (!session?.user) {
        router.push("/signIn");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert("Unable to fetch userinfo");
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getUserinfo();
  }, [userinfo, router]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-[#131921] p-4 flex items-center justify-center">
        <Link href="/">
          <Image
            src="/amazon_logo.png" // Place in /public
            alt="Amazon Logo"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Profile Card */}
        <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start p-6 gap-6">
            <div className="relative w-32 h-32">
              <Image
                src="/user.jpg" // Place in /public
                alt="Profile Picture"
                fill
                className="rounded-full object-cover border border-gray-300"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-[#131921]">
                {userinfo?.user_metadata.name}
              </h1>
              <p className="text-gray-700 text-sm mb-2">{userinfo?.email}</p>
              <p className="text-gray-600">
                Prime Member since <span className="font-medium">2018</span>
              </p>
              <button className="mt-4 bg-[#febd69] text-[#111] px-4 py-2 rounded hover:bg-[#f3a847] transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-[#131921]">
            Account Details
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#f3f3f3] p-4 hover:shadow-md transition duration-300 rounded-md">
              <h3 className="font-semibold text-lg mb-2">Shipping Address</h3>
              <p className="text-sm text-gray-700">
                1234 Elm Street <br />
                Springfield, IL 62704 <br />
                United States
              </p>
              <button className="mt-3 text-[#007185] hover:underline">
                Edit Address
              </button>
            </div>
            <div className="bg-[#f3f3f3] p-4 hover:shadow-md transition duration-300 rounded-md">
              <h3 className="font-semibold text-lg mb-2">Payment Methods</h3>
              <p className="text-sm text-gray-700">
                Visa ending in 1234 <br />
                Expires 08/26
              </p>
              <button className="mt-3 text-[#007185] hover:underline">
                Manage Payment Options
              </button>
            </div>
          </div>
        </section>

        {/* Orders */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-[#131921]">
            Recent Orders
          </h2>
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between">
              <div>
                <p className="font-medium text-[#007185]">
                  Order #123-4567890-1234567
                </p>
                <p className="text-sm text-gray-600">Placed on July 25, 2025</p>
              </div>
              <button className="mt-2 sm:mt-0 bg-[#febd69] px-3 py-1 rounded text-sm hover:bg-[#f3a847]">
                View Order
              </button>
            </div>
            <div className="p-4 flex gap-4">
              <div>
                <p className="font-medium">Echo Dot (4th Gen)</p>
                <p className="text-sm text-gray-600">
                  Smart speaker with Alexa
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
