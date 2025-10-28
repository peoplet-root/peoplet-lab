import { Reveal } from "./Reveal";

export const SectionHeader = ({ title }) => {
  return (
    <div
      className="flex items-center gap-8 mb-12"
    >
      <h2>
        <Reveal>
          <span className="text-3xl md:text-5xl">
            {title}
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
