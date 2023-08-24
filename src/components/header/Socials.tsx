import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

import { FaGithubSquare } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='header__social'>
      <a
        href='https://www.linkedin.com/in/mohammed-ali-maaz-705b61289/'
        target='_blank'
      >
        <AiFillLinkedin />
      </a>
      <a href='https://github.com/mdAliMaaz' target='_blank'>
        <FaGithubSquare />
      </a>
      <a href='https://twitter.com/Maaz2907 ' target='_blank'>
        <AiFillTwitterSquare />
      </a>
    </div>
  );
};

export default Socials;
