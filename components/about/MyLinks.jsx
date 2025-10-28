import Link from "next/link"
import { SiCodepen, SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function MyLinks() {
  <div className="flex items-center text-lg gap-4">
    <Link
      className="bg-red-500"
      href="https://www.linkedin.com/in/robertino-puhanic/"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://github.com/Robertino2809"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.codepen.io"
      target="_blank"
      rel="nofollow"
    >
      <SiCodepen />
    </Link>
  </div>
}