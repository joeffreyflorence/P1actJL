import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/gineeeng">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/regine44">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/gi.neeeng/">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;