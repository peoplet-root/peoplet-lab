import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0e0e0e] text-white py-16 mt-32 border-t border-zinc-800">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-3">
            <span className="italic text-[#0066ff]">Peoplet</span> Lab
          </h2>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            A creative technology studio connecting people, data, and design — crafting
            human-centered digital experiences.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition">Web Development</li>
            <li className="hover:text-white transition">Graphic Design</li>
            <li className="hover:text-white transition">Network Consulting</li>
            <li className="hover:text-white transition">Data Automation</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-medium mb-4">Connect</h3>
          <div className="flex items-center gap-5 text-gray-400">
            <a href="mailto:hello@peoplet.io" className="hover:text-white transition">
              <FiMail size={22} />
            </a>
            <a
              href="https://github.com/peoplet"
              target="_blank"
              className="hover:text-white transition"
            >
              <FiGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/company/peoplet"
              target="_blank"
              className="hover:text-white transition"
            >
              <FiLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Peoplet Lab. All rights reserved.
      </div>
    </footer>
  );
}
