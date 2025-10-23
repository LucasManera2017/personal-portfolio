import { useState, useEffect } from "react";
import { FaJs, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";

const techLogos = [
  { node: <FaJs />, title: "Java Script" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMysql />, title: "MySql", href: "https://www.mysql.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <FaNodeJs />, title: "NodeJs", href: "https://nodejs.org/pt" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <FaFigma />, title: "Figma", href: "https://www.figma.com" },
];

const Skills = () => {
  const [logoHeight, setLogoHeight] = useState(100);
  const [gap, setGap] = useState(40);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLogoHeight(60);
        setGap(20);
      } else {
        setLogoHeight(100);
        setGap(40);
      }
    };

    handleResize(); // define os valores iniciais
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="skills" className="md:mt-20 md:mb-20">
      <h2 className="text-primary font-mono text-5xl md:text-7xl text-center mb-8">Skills</h2>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <LogoLoop
          logos={techLogos}
          speed={70}
          direction="left"
          logoHeight={logoHeight}
          gap={gap}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};

export default Skills;
