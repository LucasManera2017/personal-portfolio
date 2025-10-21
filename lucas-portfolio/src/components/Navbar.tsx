import ThemeController from "./ThemeController";

const Navbar = () => {
  const scrollToSection = (id: string, offset = 100) => {
    const element = document.getElementById(id);
    if (!element) return;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 fixed w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a
                onClick={() => scrollToSection("home")}
                className="font-semibold letter tracking-wider text-[1.03rem] cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("skills")}
                className="font-semibold letter tracking-wider text-[1.03rem] cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("projects")}
                className="font-semibold letter tracking-wider text-[1.03rem] cursor-pointer"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl font-mono tracking-widest hover:bg-white/0 hover:scale-103 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Lucas Manera
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              onClick={() => scrollToSection("home")}
              className="font-semibold letter tracking-wider text-[1.03rem] cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("skills")}
              className="font-semibold letter tracking-wider text-[1.03rem] cursor-pointer"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("projects")}
              className="font-semibold letter tracking-wider text-[1.03rem] cursor-pointer"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;
