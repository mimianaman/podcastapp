import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiMenu, mdiMagnify } from "@mdi/js";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <Navbar>
      <Nav>
        <Icon
          path={mdiMenu}
          title="User Profile"
          size={1}
          horizontal
          // vertical
          // rotate={45}
          color="white"
          // spin
          className="menuicon"
        />
        <span>Podcast.</span>

        <div className="searchicon">
          <Icon
            path={mdiMagnify}
            title="User Profile"
            size={1}
            horizontal
            // vertical
            // rotate={45}
            color="white"
            // spin
            className="menuicon"
          />
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
