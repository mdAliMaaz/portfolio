import CTA from "./CTA";
import Socials from "./Socials";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'M</h5>
        <h1>Mohammed Ali Maaz</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <Socials />
        <div className='me'>
          <img src='/me.png' alt='profile' />
        </div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
