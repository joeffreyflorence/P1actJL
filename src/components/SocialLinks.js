import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3">
      <Nav.Link href="https://github.com/joeffreyflorence">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/zedfaker1123/">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/jep.sss/">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;