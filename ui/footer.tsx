import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      {/* FOOTER */}
      <footer>
        <div className="bg-[#37475a] h-10 sm:h-12 text-white flex items-center justify-center text-xs sm:text-sm cursor-pointer">
          Back to Top
        </div>

        <div className="bg-[#222f3d] text-white grid grid-cols-2  sm:grid-cols-4 gap-6 px-4 py-6 text-xs sm:text-sm">
          {[
            {
              title: "Get to Know Us",
              links: [
                "Careers",
                "Amazon Newsletter",
                "About Amazon",
                "Accessibility",
              ],
            },
            {
              title: "Make Money with Us",
              links: [
                "Sell on Amazon",
                "Affiliate Program",
                "Advertise Your Products",
              ],
            },
            {
              title: "Amazon Payment Products",
              links: ["Business Card", "Shop with Points", "Reload Balance"],
            },
            {
              title: "Let Us Help You",
              links: ["Your Account", "Your Orders", "Shipping Rates", "Help"],
            },
          ].map((sec, idx) => (
            <ul key={idx}>
              <li className="font-semibold mb-2">{sec.title}</li>
              {sec.links.map((l, i) => (
                <li
                  key={i}
                  className="text-[#ddd] hover:underline cursor-pointer mb-1"
                >
                  {l}
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="border-t border-gray-500 bg-[#232F3E] flex justify-center items-center h-14">
          <div className="relative h-8 w-16 sm:h-10 sm:w-20">
            <Image
              src="/amazon_logo.png"
              alt="Amazon Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-[#131A22] text-white flex flex-col items-center justify-center h-auto p-4 text-[10px] sm:text-xs px-2 text-center">
          <div className="flex flex-wrap gap-2 justify-center mt-4 mb-1">
            <a href="#" className="hover:underline  mt-4">
              Conditions of Use
            </a>
            <a href="#" className="hover:underline mt-4 mb-2">
              Privacy Notice
            </a>
            <a href="#" className="hover:underline mt-4 mb-2">
              Your Ads Privacy Choices
            </a>
          </div>
          <div>© 1996-2023, Amazon.com, Inc. or its affiliates</div>
        </div>
      </footer>
    </div>
  );
}
