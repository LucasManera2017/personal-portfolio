import Magnet from "./Magnet";
import Typewriter from "./Typewriter";
import homeImg from '/img/homeImg.png'

const HomePage = () => {
  return (
    <section id="home" className="flex items-center justify-center bg-base-100 px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-[1280px] mx-auto mb-20 mt-20 gap-8 md:gap-4">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-mono  leading-tight">
            <Typewriter />
          </h1>
          <p className="text-xl md:text-2xl text-base-content/70 max-w-md mx-auto md:mx-0">
            Full Stack Developer who loves transforming ideas into real-world
            applications through modern technologies, clean code, and continuous
            learning.
          </p>
          <div className="flex justify-center md:justify-start gap-4 pt-4">
            <button className="btn btn-primary"><a href="#projects">View Projects</a></button>
            <button className="btn btn-outline"><a href="#contacts">Contact Me</a></button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 animate-wiggle [animation-iteration-count:1]">
          <Magnet padding={200} magnetStrength={40}>
            <img
              src={homeImg}
              alt="Lucas illustration"
              className="w-md  md:w-96 lg:w-2xl object-contain drop-shadow-2xl drop-shadow-primary/30"
            />
          </Magnet>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
