import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

import { FaGithubSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='header__social'>
      <a href='' target='_blank'>
        <AiFillLinkedin />
      </a>
      <a href='' target='_blank'>
        <FaGithubSquare />
      </a>
      <a href='' target='_blank'>
        <AiFillTwitterSquare />
      </a>
    </div>
  );
};

export default Socials;
