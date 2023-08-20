import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { zoomIn } from "../../motion";
import { toast, ToastContainer } from "react-toastify";

import "./contact.scss";
import "react-toastify/dist/ReactToastify.css";
import "./toast.scss";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      emailjs
        .sendForm(
          "service_0e1y29m",
          "template_8wzs9vm",
          form.current!,
          "Fth0EzPIs0iVJBV5j"
        )
        .then(
          (result) => success(),
          (err) => error()
        );
    } catch (error) {
      console.log(error);
    }
  };
  const success = () => {
    setLoading(false);
    toast.success("message sent successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      className: "custom-toast", // Apply your custom toast style
    });
  };
  const error = () => {
    setLoading(false);
    toast.error("Somthing went Wrong try again ", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      className: "custom-toast", // Apply your custom toast style
    });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>{loading ? " <Loading.../>" : `<Contact/>`}</h2>

      <div className='container contact__container'>
        <motion.div
          variants={zoomIn(0.5, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='contact__options'
        >
          {/* EMAIL */}
          <a
            href='mailto:alimmazali6@gmail.com'
            target='_blank'
            className='contact__option'
          >
            <AiOutlineMail className='contact__icon' />
            <h4>Email</h4>
            <h5>alimaazali6@gmail.com</h5>
            <a target='_blank' href='mailto:alimmazali6@gmail.com'>
              Send a Message
            </a>
          </a>
          {/* WHATS APP */}
          <a
            href='https://api.whatsapp.com/send?phone=8217682972'
            target='_blank'
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
          </a>
          {/* PHONE */}
          <a href='tel:8217683972' target='_blank' className='contact__option'>
            <BsTelephone className='contact__icon' />
            <h4>Phone</h4>
            <h5>91+8217683972</h5>
            <a target='_blank' href='tel:8217683972'>
              Call Me On
            </a>
          </a>
        </motion.div>
        <motion.form
          variants={zoomIn(0.5, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
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
            {loading ? "<Loading/>" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
      <ToastContainer className='custom-toast-container' />
    </section>
  );
};

export default Contact;
// "build": "tsc && vite build",
