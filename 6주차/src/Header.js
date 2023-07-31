import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderDiv, SubHeaderDiv } from "./styledComponents";
import HeaderTitle from "./HeaderTitle.js";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Header = ({ darkMode, setDarkMode }) => {
  const toggledarkMode = () => {
    setDarkMode(!darkMode);
  };
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderDiv>
        <HeaderTitle goHome={goHome} />
        <SubHeaderDiv>
          {darkMode === true ? (
            <FontAwesomeIcon icon={faSun} onClick={toggledarkMode} />
          ) : (
            <FontAwesomeIcon icon={faMoon} onClick={toggledarkMode} />
          )}
        </SubHeaderDiv>
      </HeaderDiv>
    </>
  );
};

export default Header;
