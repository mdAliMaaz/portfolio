import "./projects.scss";

import { projects } from "../../data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Projects</h5>
      <h2>
        {"<"}Projects{"/>"}
      </h2>
      <div className='container projects__container'>
        {projects.map((item) => (
          <article key={item.id} className='project__item'>
            <div className='img__container'>
              <img src={item.image} alt='project_img' />
            </div>
            <h3>{item.title}</h3>
            <div className='btn__container'>
              <motion.a
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                href={item.github}
                target='_blank'
                className='btn'
              >
                Github
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                href={item.golive}
                target='_blank'
                className='btn btn-primary'
              >
                Go Live
              </motion.a>
            </div>
            <div className='hashtags'>
              {item.tech.map((item2, i) => (
                <div
                  className={`hashtag${i}`}
                  key={item + "_" + i}
                >{`#${item2}`}</div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
