import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

import { FaGithubSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='header__social'>
      <a
        href='https://www.linkedin.com/in/mohammad-ali-maaz-79b637289/'
        target='_blank'
      >
        <AiFillLinkedin />
      </a>
      <a href='https://github.com/mdAliMaaz' target='_blank'>
        <FaGithubSquare />
      </a>
      <a
        href='https://twitter.com/MMaaz27731?t=ll3Ksdp1RiUiVpldr8RlJg&s=08 '
        target='_blank'
      >
        <AiFillTwitterSquare />
      </a>
    </div>
  );
};

export default Socials;
