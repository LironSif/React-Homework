/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Header.css";
import { siteLinks } from "../../constants/siteLinks";
import { fixText } from "../../utils/formatting";

const Header = ({handleChangePage}) => {
  
  return (
    <header className="Header">
      <div className="link-container">
        {siteLinks.map((pageName, index) => {
          return <span onClick={()=>handleChangePage(pageName)} key={index}>{fixText(pageName)}</span>;
        })}
      </div>
    </header>
  );
};

export default Header;
