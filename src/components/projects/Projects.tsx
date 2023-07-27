import "./projects.scss";

import { projects } from "../../data";

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Projects</h5>
      <h2>Projects</h2>
      <div className='container projects__container'>
        {projects.map((item) => (
          <article key={item.title} className='project__item'>
            <div className='img__container'>
              <img src={item.image} alt='project_img' />
            </div>
            <h3>{item.title}</h3>
            <a href={item.href} target='_blank' className='btn'>
              Github
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
