import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import "./Header.css";

function Header() {
  const [showicon, setShowicon] = useState(false);
  const togglemenu = () =>{
    setShowicon(!showicon);
  }
  return (
    <header id="header" className="shadow p-3">
      <div className="container">
        <Headeritem>
        <div className="menu-icon" onClick={togglemenu}>
            {showicon ? (
              <RiCloseLine cursor={"pointer"} size={35} color="#000" />
            ) : (
              <AiOutlineBars size={35} color="#000" cursor={"pointer"} />
            )}
          </div>
          <div className="header-right">
            <ul id={showicon ? "show-links-mobile" : "show-links-mobile-hide"}>
              <li>
                <a href="">تماس بامن</a>
              </li>
              <li>
                <a href="">درباره من</a>
              </li>
              <li>
                <a href="">خدمات</a>
              </li>
              <li>
                <a href="">نمونه کارها</a>
              </li>
            </ul>
          </div>
          <div className="header-left">
            <h3>alishahi</h3>
          </div>
        </Headeritem>
      </div>
    </header>
  );
}

const Headeritem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;

    li {
      margin-right: 10px;
      a {
        text-decoration: none;
        color: #000;
        font-weight: 500;
        font-size: 16px;
        transition: all 0.5s ease;
      }
      a:hover {
        color: crimson;
      }
    }
  }
  h3 {
    color: crimson;
  }
`;

export default Header;
