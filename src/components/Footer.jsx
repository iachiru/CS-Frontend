import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer d-flex flex-column align-items-center mt-auto">
      <h6 className="mt-3">CONTACT ME:</h6>
      <div className="d-flex mb-1">
        <a href="https://github.com/iachiru">
          <div className="m-1 mx-3">
            <AiFillGithub size={40} className="footer-icon" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/biancastancu/">
          <div className="m-1 mx-3">
            <BsLinkedin size={40} className="footer-icon" />
          </div>
        </a>
      </div>
      <p className="mb-0">bianca.dev92@gmail.com</p>
      <div className="d-flex align-items-center mt-2">
        <AiOutlineCopyrightCircle />
        <span className="mx-2">2023</span>
        <p className="mb-0">Bianca Stancu</p>
      </div>
    </div>
  );
};

export default Footer;
