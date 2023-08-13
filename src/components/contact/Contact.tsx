import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

import "./contact.scss";
import { slideInV2, zoomIn } from "../../motion";

const Contact = () => {
  const form = useRef();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0e1y29m",
        "template_8wzs9vm",
        form.current!,
        "Fth0EzPIs0iVJBV5j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          {/* EMAIL */}
          <motion.article
            variants={slideInV2("down", "spring", 0.2, 1)}
            initial='hidden'
            whileInView='show'
            className='contact__option'
          >
            <AiOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>alimmazali6@gmail.com</h5>
            <a target='_blank' href='mailto:alimmazali6@gmail.com'>
              Send a Message
            </a>
          </motion.article>
          {/* WHATS APP */}
          <motion.article
            variants={slideInV2("down", "spring", 0.4, 1)}
            initial='hidden'
            whileInView='show'
            className='contact__option'
          >
            <MdOutlineWhatsapp className='contact__icon' />
            <h4>WhatsApp</h4>
            <h5>91+8217683972</h5>
            <a
              target='_blank'
              href='https://api.whatsapp.com/send?phone=8217682972'
            >
              Send a Message
            </a>
          </motion.article>
          {/* PHONE */}
          <motion.article
            variants={slideInV2("down", "spring", 0.6, 1)}
            initial='hidden'
            whileInView='show'
            className='contact__option'
          >
            <BsTelephone className='contact__icon' />
            <h4>Phone</h4>
            <a target='_blank' href='tel:8217683972'>
              Call Me On
            </a>
          </motion.article>
        </div>
        <motion.form
          variants={zoomIn(0.5, 1.25)}
          initial='hidden'
          whileInView='show'
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type='text'
            name='name'
            placeholder='Your full Name'
            required
          />
          <input type='email' name='email' placeholder='Your email ' required />
          <textarea
            name='message'
            rows={7}
            placeholder='Your Message'
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type='submit'
            className='btn btn-primary'
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
// "build": "tsc && vite build",
