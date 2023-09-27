import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

import { FaGithubSquare } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='header__social'>
      <a
        href='https://www.linkedin.com/in/mohammed-ali-maaz-26962828b/'
        target='_blank'
      >
        <AiFillLinkedin />
      </a>
      <a href='https://github.com/mdAliMaaz' target='_blank'>
        <FaGithubSquare />
      </a>
      <a href='https://twitter.com/MdMaaz2907 ' target='_blank'>
        <AiFillTwitterSquare />
      </a>
      <a href='https://maaz-blogs.hashnode.dev/' target='_black'>
        <FaHashnode className='footer__social' />
      </a>
    </div>
  );
};

export default Socials;
