import "./footer.scss";

import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

import { FaGithubSquare } from "react-icons/fa";

import { motion } from "framer-motion";
import { footerVariants } from "../../motion";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
    >
      <a href='#' className='footer__logo'>
        {"<"}MAAZ{"/>"}
      </a>

      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#techStack'>Technologys</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer__details'>
        <a
          href='https://www.linkedin.com/in/md-maaz-ba0935272/'
          target='_black'
        >
          <AiFillLinkedin className='footer__social' />
        </a>
        <a
          href='https://twitter.com/MMaaz27731?t=ll3Ksdp1RiUiVpldr8RlJg&s=08'
          target='_black'
        >
          <AiFillTwitterSquare className='footer__social' />
        </a>
        <a href='https://github.com/mdAliMaaz' target='_black'>
          <FaGithubSquare className='footer__social' />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;
