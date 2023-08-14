import { BsAward } from "react-icons/bs";
// import { FaUsers } from "react-icons/fa";
import { PiFolderNotchOpenBold } from "react-icons/pi";

import "./about.scss";

import { motion } from "framer-motion";
import { fadeIn, textVariant2 } from "../../motion";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>
        {"<"}About Me{"/>"}
      </h2>

      <div className='container about__container'>
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 1)}
          initial='hidden'
          whileInView='show'
          className='about__me'
        >
          <motion.div
            className='about__me-image'
            variants={textVariant2}
            initial='hidden'
            whileInView='show'
          >
            <img src='/about.png' alt='about' />
          </motion.div>
        </motion.div>
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
            Let's Talk
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
