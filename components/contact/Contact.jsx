import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactCall() {
  return (
    <div className="bg-black w-full" id="contact">
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="text-6xl max-[768px]:text-4xl text-white text-center">Contact</h1>
        <p className="text-white mt-5 text-xl text-center">Send me an email if you want to work with me!</p>
        <p className="text-white mt-5 text-xl text-center">Or contact me through <span className="underline"><a href="https://www.linkedin.com/in/robertino-puhanic/" target="_blank">LinkedIn.</a></span></p>
        <Link href="mailto:robertinopuhanic2809@gmail.com">
          <Button className="flex items-center rounded-full bg-neutral-300 text-neutral-800 hover:bg-neutral-500 mt-5">robertinopuhanic2809@gmail.com</Button>
        </Link>
      </div>
    </div>
  )
}