import { Chip } from "@/components/util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>JavaScript</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>TailwindCSS</Chip>
            <Chip>SQL</Chip>
            <Chip>Postgres</Chip>
            <Chip>MongoDB</Chip>
            <Chip>GitHub</Chip>
            <Chip>AWS</Chip>
            <Chip>API</Chip>
            <Chip>Figma</Chip>
            <Chip>Adobe Photoshop</Chip>
            <Chip>Adobe Illustrator</Chip>
            <Chip>Adobe Premiere</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
