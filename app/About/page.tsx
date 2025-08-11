"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-[#131921] p-4 flex items-center justify-center">
        <Link href="/">
          <Image
            src="/amazon_logo.png" // In /public
            alt="Amazon Logo"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>
      </header>

      {/* Hero Banner */}
      <section className="relative w-full h-64 sm:h-96">
        <Image
          src="/hero_image.jpg" // Add an Amazon-style banner image in /public
          alt="Amazon Global Presence"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold">
            About Amazon
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#131921]">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed">
              Our mission is to be Earth’s most customer-centric company, where
              people can find and discover anything they might want to buy
              online, and endeavor to offer customers the lowest possible
              prices.
            </p>
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/box5_image.jpg" // Add image to /public
              alt="Amazon Mission"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-[#131921]">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#f3f3f3] p-4 rounded-md text-center">
              <Image
                src="/amazon2.jpg"
                alt="E-commerce"
                width={300}
                height={200}
                className="mx-auto rounded-md mb-4"
              />
              <h3 className="font-semibold mb-2">E-commerce</h3>
              <p className="text-sm">
                Millions of products across dozens of categories with fast
                delivery options.
              </p>
            </div>
            <div className="bg-[#f3f3f3] p-4 rounded-md text-center">
              <Image
                src="/amazon2.jpg"
                alt="Amazon Web Services"
                width={300}
                height={200}
                className="mx-auto rounded-md mb-4"
              />
              <h3 className="font-semibold mb-2">AWS</h3>
              <p className="text-sm">
                Industry-leading cloud computing solutions trusted worldwide.
              </p>
            </div>
            <div className="bg-[#f3f3f3] p-4 rounded-md text-center">
              <Image
                src="/amazon2.jpg"
                alt="Amazon Devices"
                width={300}
                height={200}
                className="mx-auto rounded-md mb-4"
              />
              <h3 className="font-semibold mb-2">Devices</h3>
              <p className="text-sm">
                Innovative products like Kindle, Echo, and Fire TV.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-64">
            <Image
              src="/aws.jpg"
              alt="Amazon Values"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#131921]">
              Our Values
            </h2>
            <p className="text-lg leading-relaxed">
              Customer obsession, passion for invention, operational excellence,
              and long-term thinking guide everything we do. We strive to
              delight our customers every day.
            </p>
          </div>
        </div>

        {/* Learn More */}
        <div className="bg-[#f3f3f3] p-6 rounded-md mt-16">
          <h3 className="text-xl font-semibold mb-4 text-[#131921]">
            Learn More
          </h3>
          <p className="mb-4 text-lg">
            Visit our{" "}
            <a
              href="https://www.aboutamazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff9900] hover:underline"
            >
              About Amazon
            </a>{" "}
            page to explore our latest innovations, corporate responsibility
            efforts, and career opportunities.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#131921] text-white text-center py-6 mt-12">
        <p className="text-sm">
          © {new Date().getFullYear()} Amazon.com, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
}
