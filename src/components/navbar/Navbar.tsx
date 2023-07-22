import { AiOutlineHome, AiOutlineUser, AiFillProject } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GrStackOverflow } from "react-icons/gr";

import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>

      <a
        href='#techStack'
        className={active === "#techstack" ? "active" : ""}
        onClick={() => setActive("#techstack")}
      >
        <GrStackOverflow />
      </a>
      <a
        href='#projects'
        className={active === "#projects" ? "active" : ""}
        onClick={() => setActive("#projects")}
      >
        <AiFillProject />
      </a>
      <a
        href='#contact'
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <RiContactsBook2Fill />
      </a>
    </nav>
  );
};

export default Navbar;
