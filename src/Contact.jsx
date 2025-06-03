import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-main-white text-center">
      <h2 className="text-4xl font-normal text-light-pink mb-12">Contact</h2>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-4xl">
        <a
          href="https://github.com/aderolaowaduge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-pink transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/aderola-owaduge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-light-pink transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:owadugea@umich.edu"
          className="hover:text-light-pink transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;
