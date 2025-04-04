import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const Header = () => {
  const [showMenu, setMenu] = useState(true);

  const onClickMenu = () => {
    setMenu(prevState => !prevState);
  };

  return (
    <div className="nav-main-cont">
      <nav className="nav-cont">
        <div>
          <img
            src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1726017261/vinay572-high-resolution-logo-transparent_1_crigre.png"
            alt="logo"
            className="header-logo"
          />
        </div>
        <div>
          <button onClick={onClickMenu} className="menu-btn">
            {showMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128">
                <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z" />
                <path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z" />
                <path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z" />
                <path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3 3-3h45c1.7,0 3,1.3 3,3S88.2,82,86.5,82z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 255.99345 255.99345">
                <g fill="#000000" fillRule="nonzero">
                  <path d="M0,255.99345v-255.99345h255.99345v255.99345z" />
                </g>
                <g fill="#ffffff" fillRule="nonzero">
                  <g transform="scale(5.12,5.12)">
                    <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z" />
                  </g>
                </g>
              </svg>
            )}
          </button>
          <div className="lg-items">
            {["home", "about", "skills", "projects", "certificate", "contactus"].map(item => (
              <div key={item}>
                <hr className="br-line" />
                <a className="item" href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
              </div>
            ))}
            <hr className="br-line" />
          </div>
        </div>
      </nav>
      <div className={showMenu ? "items-list-cont2" : "items-list-cont"}>
        {["home", "about", "skills", "projects", "certificate", "contactus"].map(item => (
          <div key={item}>
            <hr className="br-line" />
            <a className="item" href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </div>
        ))}
        <hr className="br-line" />
      </div>
    </div>
  );
};

export default Header;
