import "./techstack.scss";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { frontend, backend } from "../../data";

const TechStack = () => {
  return (
    <section id='techStack'>
      <h5>What Skills I Have</h5>
      <h2>My Tech Stack</h2>

      <div className='container tech__container'>
        <div className='front-end'>
          <h3>Frontend Development</h3>
          <div className='content'>
            {frontend.map((item) => (
              <article className='details' key={item.skill}>
                <BsFillPatchCheckFill className='tech__icon' />
                <div>
                  <h4>{item.skill}</h4>
                  <small className='text-light'>{item.exp}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className='back-end'>
          <h3>Backend Development</h3>
          <div className='content'>
            {backend.map((item) => (
              <article className='details' key={item.skill}>
                <BsFillPatchCheckFill className='tech__icon' />
                <div>
                  <h4>{item.skill}</h4>
                  <small className='text-light'>{item.exp}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
