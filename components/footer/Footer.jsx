"use client";

import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0e0e0e] text-white py-16 mt-32 border-t border-zinc-800 lg:rounded-t-[80px] rounded-t-[30px]">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-12">
        {/* 🟦 Left: Brand */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">
            <span className="italic text-[#0066ff]">Peoplet</span>
          </h2>
          <p className="text-gray-400 max-w-sm leading-relaxed mb-4">
            A creative technology studio connecting people, data, and design —
            crafting human-centered digital experiences.
          </p>

          <div className="flex gap-4 text-sm text-gray-400 mb-4">
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* 🇪🇺 EU Flag */}
          <Link
            href="https://peoplet.io/eu-project/"
            target="_blank"
            className="inline-block mt-2 hover:opacity-90 transition"
            aria-label="EU co-funded project"
          >
            <Image
              src="/assets/webp/en-eu.webp"
              alt="European Union Flag"
              width={250}
              height={80}
              className=""
              priority
            />
          </Link>
        </div>

        {/* 🟨 Middle: Services */}
        <div>
          <h3 className="text-lg font-medium mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/services" className="hover:text-white transition">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Brand & Graphic Design
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Network Consulting
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Data Automation
              </Link>
            </li>
          </ul>
        </div>

        {/* 🟩 Right: Products */}
        <div>
          <h3 className="text-lg font-medium mb-4">Products</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                href="https://www.peoplet.io"
                className="hover:text-white transition"
              >
                Peoplet App
              </Link>
            </li>
          </ul>
        </div>

        {/* 🟥 Connect */}
        <div>
          <h3 className="text-lg font-medium mb-4">Connect</h3>
          <div className="flex items-center gap-5 text-gray-400">
            <Link
              href="mailto:info@peoplet.io"
              className="hover:text-white transition"
              title="Email"
            >
              <FiMail size={22} />
            </Link>
            <Link
              href="https://linkedin.com/company/peoplet"
              target="_blank"
              className="hover:text-white transition"
              title="LinkedIn"
            >
              <FiLinkedin size={22} />
            </Link>
            <Link
              href="https://instagram.com/peoplet.io"
              target="_blank"
              className="hover:text-white transition"
              title="Instagram"
            >
              <FiInstagram size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* 🧾 Bottom */}
      <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Peoplet. All rights reserved.{" "}
      </div>
    </footer>
  );
}
