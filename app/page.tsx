// app/page.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaLocationCrosshairs,
  FaMagnifyingGlass,
  FaGlobe,
  FaCartShopping,
  FaBars,
} from "react-icons/fa6";

export default function Home() {
  const router = useRouter();
  const products = [
    { title: "Clothes", img: "/box1_image.jpg" },
    { title: "Health & Personal Care", img: "/box2_image.jpg" },
    { title: "Furniture", img: "/box3_image.jpg" },
    { title: "Mobiles", img: "/box4_image.jpg" },
    { title: "Beauty Pics", img: "/box5_image.jpg" },
    { title: "Pet Care", img: "/box6_image.jpg" },
    { title: "New Arrival in Toys", img: "/box7_image.jpg" },
    { title: "Discover Fashion Trends", img: "/box8_image.jpg" },
  ];

  return (
    <div className="font-sans">
      {/* NAVBAR */}
      <div className="bg-[#0f1111] text-white flex flex-wrap items-center justify-between px-4 py-2 gap-2">
        {/* Logo */}
        <div className="relative h-8 w-16 sm:h-10 sm:w-20">
          <Image
            onClick={() => router.push("/About")}
            src="/amazon_logo.png"
            alt="Amazon Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Address (hidden on xs) */}
        <div className="hidden sm:flex flex-col leading-tight">
          <p className="text-[#ccc] text-xs">Deliver to</p>
          <div className="flex items-center gap-1 text-sm">
            <FaLocationCrosshairs /> India
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 order-last sm:order-none items-center bg-white rounded-full overflow-hidden border-2 border-transparent hover:border-[#febd68] max-w-full">
          <select className="bg-[#f3f3f3] h-8 sm:h-10 w-14 pl-2 text-xs sm:text-sm outline-none">
            <option>All</option>
          </select>
          <input
            className="flex-1 px-2 text-xs sm:text-sm outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-[#febd68] flex items-center justify-center w-10 sm:w-14 h-8 sm:h-10 text-white">
            <FaMagnifyingGlass />
          </button>
        </div>

        {/* Language */}
        <div className="hidden sm:flex items-center gap-1">
          <FaGlobe /> EN
        </div>

        {/* Sign In */}
        <div className="hidden md:block leading-tight">
          <p
            onClick={() => router.push("/signIn")}
            className="text-xs cursor-pointer text-yellow-400"
          >
            {" "}
            Sign in
          </p>
          <p
            onClick={() => router.push("/Profile")}
            className="text-sm font-semibold text-yellow-500 cursor-pointer"
          >
            Account
          </p>
        </div>

        {/* Returns */}
        <div className="hidden md:block leading-tight">
          <p className="text-xs">Returns</p>
          <p className="text-sm font-semibold">& Orders</p>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-1">
          <FaCartShopping className="text-lg sm:text-2xl" />
          <span className="hidden sm:inline">Cart</span>
        </div>
      </div>

      {/* SECONDARY NAV */}
      <div className="bg-[#222f3d] text-white text-xs sm:text-sm px-4 py-2 flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaBars /> All
        </div>
        <Link
          href="https://www.amazon.in/deals?ref_=nav_cs_gb"
          className="cursor-pointer hover:text-yellow-500"
        >
          Today Deals
        </Link>
        <Link
          href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help"
          className="cursor-pointer hover:text-yellow-500"
        >
          Customer Service
        </Link>
        <p
          onClick={() => router.push("/BestSeller")}
          className="cursor-pointer hover:text-yellow-500"
        >
          BestSeller
        </p>
        <p className="cursor-pointer hover:text-yellow-500">Gift Cards</p>
        <p className="cursor-pointer hover:text-yellow-500">Sell</p>
      </div>

      {/* HERO IMAGE */}
      <div
        className="h-[180px] sm:h-[300px] md:h-[350px] bg-cover bg-center flex justify-center items-end"
        style={{ backgroundImage: "url('/hero_image.jpg')" }}
      >
        <div className="bg-white text-black text-xs sm:text-sm flex flex-wrap items-center justify-center p-2 sm:p-4 w-[95%] sm:w-[90%] mb-4 rounded-lg text-center">
          You are on amazon.com. You can also shop on Amazon India.
          <a
            href="https://www.amazon.in/"
            className="text-[#007185] ml-1 hover:underline"
          >
            Click here
          </a>
        </div>
      </div>

      {/* SHOP SECTION */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#e2e7e6] p-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white hover:shadow-md shadow-gray-90 p-4 transition duration-300 rounded-lg flex flex-col"
          >
            <h2 className="text-sm text-black sm:text-lg font-semibold">
              {p.title}
            </h2>
            <div
              className="h-28 0 sm:h-40 md:h-56 bg-cover bg-center my-4 rounded"
              style={{ backgroundImage: `url(${p.img})` }}
            ></div>
            <Link
              href="https://www.amazon.in/"
              className="text-[#007185] text-xs sm:text-sm cursor-pointer"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
