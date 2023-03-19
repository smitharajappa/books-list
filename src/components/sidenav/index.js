import { NavLink } from "react-router-dom";
import { navData } from "./config";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";
import { StyledSideNav } from "./styled-component";
import clsx from "clsx";
import atomLogo from "../../assets/atom.png";

export default function Sidenav({ open, toggleOpen }) {
  return (
    <StyledSideNav>
      <div className="sidenav">
        <div className={clsx(open ? "sidenav_open" : "sidenav_closed")}>
          <button className="menu_button text-left" onClick={toggleOpen}>
            {open ? (
              <>
                <MenuIcon />
                <span className="menu_text">Menu</span>
              </>
            ) : (
              <MenuIcon />
            )}
          </button>
          {navData.map((item) => (
            <NavLink key={item.id} className="side_item" to={item.link}>
              {open ? (
                <>
                  {item.icon}
                  <span className="link_text">{item.text}</span>
                </>
              ) : (
                <>{item.icon}</>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="title" tabIndex={0}>
        <img src={atomLogo} width={150} height={50} alt="logo" />
      </div>
    </StyledSideNav>
  );
}
