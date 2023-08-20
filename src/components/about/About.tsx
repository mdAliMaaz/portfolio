import { BsAward } from "react-icons/bs";
import { PiFolderNotchOpenBold } from "react-icons/pi";

import "./about.scss";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>
        {"<"}About Me{"/>"}
      </h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <motion.img
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              src='/fullstack.svg'
              alt='about'
            />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Fresher</h5>
              {/* <h5>Experince</h5> */}
              {/* <small>1+ Years Working</small> */}
            </article>

            {/* <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article> */}

            <article className='about__card'>
              <PiFolderNotchOpenBold className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I am a passionate, athletic, full stack software developer . My aim
            is to make people's lives better & easier by developing applications
            and websites.
          </p>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href='#contact'
            className='btn btn-primary'
          >
            Say Hi
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
