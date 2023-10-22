import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaSquareXTwitter,
  FaYoutube,
  FaPhone,
  FaLocationDot,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="container mx-auto mt-10 grid grid-cols-2 gap-5 ">
        {/* Company Information */}
        <div>
          <img src={logo} alt="logo" className="w-16 h-16 mb-5" />
          <h1 className="text-3xl font-bold mb-5">The Coffee Connection</h1>
          <p className="font-semibold mb-5">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex mb-5">
            <Link to="https://www.facebook.com/" className="text-2xl mr-3">
              <FaFacebook />
            </Link>
            <Link to="https://www.twitter.com/" className="text-2xl mr-3">
              <FaSquareXTwitter />
            </Link>
            <Link to="https://www.instagram.com/" className="text-2xl mr-3">
              <FaInstagram />
            </Link>
            <Link to="https://www.youtube.com/" className="text-2xl mr-3">
              <FaYoutube />
            </Link>
          </div>
          <h3 className="text-2xl font-bold mb-5">Get In Touch</h3>
          <p className="flex items-center font-semibold mb-5">
            <FaPhone /> <span className="ml-5">+8801740759249</span>
          </p>
          <p className="flex items-center font-semibold mb-5">
            <FaEnvelope />
            <span className="ml-5">dev.sahariar.reza@gmail.com</span>
          </p>
          <p className="flex items-center font-semibold">
            <FaLocationDot />
            <span className="ml-5">Agrabad, Chittagong, Bangladesh</span>
          </p>
        </div>

        {/* Contact Us Form */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-5">Connect with us</h1>
          <form>
            <input
              type="text"
              className="input input-bordered w-full mb-5"
              placeholder="Name"
              name="name"
            />
            <input
              type="email"
              className="input input-bordered w-full mb-5"
              placeholder="Email"
              name="email"
            />
            <input
              type="text"
              className="input input-bordered w-full mb-5"
              placeholder="Subject"
              name="subject"
            />
            <input
              type="text"
              className="input input-bordered input-lg w-full mb-5"
              placeholder="Message"
              name="message"
            />
            <button className="btn btn-primary">
              Sent <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
      <p className="font-bold text-center">©The Coffee Connection. 2023</p>
      <p className="font-bold text-center">Developed by S. M. Sahariar Reza</p>
    </footer>
  );
};

export default Footer;
