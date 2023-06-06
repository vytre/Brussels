import * as React from "react";
import { Outlet, NavLink } from "react-router-dom";

//HEADER FOR ALL PAGES
function header() {
  return (
    <div className="header">
      <header>
        <nav>
          <h1>ANCEP LOGO</h1>
          <NavLink to={"/"}>Hjem</NavLink>
          <NavLink to={"dilemmaer"}>Dilemmaer</NavLink>
          <NavLink to={"arkivet"}>Arkiv</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default header;
