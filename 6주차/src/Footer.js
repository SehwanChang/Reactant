import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterDiv, FooterBig, FooterSmall } from "./styledComponents";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterDiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>for react study</FooterBig>
      <FooterSmall>2023 by Sehwan</FooterSmall>
    </FooterDiv>
  );
};

export default Footer;
