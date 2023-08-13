import { AiOutlineHome, AiOutlineUser, AiFillProject } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GrStackOverflow } from "react-icons/gr";
import { motion } from "framer-motion";
import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href='#'
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href='#about'
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href='#techStack'
        className={active === "#techstack" ? "active" : ""}
        onClick={() => setActive("#techstack")}
      >
        <GrStackOverflow />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href='#projects'
        className={active === "#projects" ? "active" : ""}
        onClick={() => setActive("#projects")}
      >
        <AiFillProject />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href='#contact'
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <RiContactsBook2Fill />
      </motion.a>
    </nav>
  );
};

export default Navbar;
