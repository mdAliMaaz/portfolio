import { motion } from "framer-motion";
import { textVariant2 } from "../../motion";

const CTA = () => {
  return (
    <div className='cta'>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={textVariant2}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
        href='/resume.pdf'
        download
        className='btn'
      >
        Download CV
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        variants={textVariant2}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false }}
        href='#contact'
        className='btn btn-primary'
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
