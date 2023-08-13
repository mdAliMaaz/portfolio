import { motion } from "framer-motion";
import CTA from "./CTA";
import Socials from "./Socials";

import "./header.scss";
import { navVariants, fadeIn } from "../../motion";

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'M</h5>
        <motion.h1 variants={navVariants} initial='hidden' whileInView='show'>
          Mohammed Ali Maaz
        </motion.h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <Socials />
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          initial='hidden'
          whileInView='show'
          className='me'
        >
          <img src='/me.png' alt='profile' />
        </motion.div>

        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
