import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <header id="header" className="shadow p-3">
      <div className="container">
        <div className="header-item d-flex align-items-center justify-content-space-between">
          <ul className="d-flex">
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
          <h3>alishahi</h3>
        </div>
      </div>
    </header>
  );
}

const headeritem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Header;
