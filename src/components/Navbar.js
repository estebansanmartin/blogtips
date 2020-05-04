import React from "react";
import Logo from "../../icon.png";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "rbx/index.css";
import { Navbar, Button, Field, Control, Icon} from "rbx";


function AppNavbar() {
  return (
    <Navbar style={{backgroundColor:`#EFF0EB`}}>
      
  <Navbar.Brand>
    <Navbar.Item href="/">
      <img
        src={Logo}
        alt="Esteban San Martin, Realizzazione di Siti Web Responsive a Torino"
      />
    </Navbar.Item>
    <Navbar.Burger />
  </Navbar.Brand>
  <Navbar.Menu>
    <Navbar.Segment align="start">
    <Navbar.Item><AniLink className="text-menu" paintDrip to="/" duration={2} hex="#D0D1CD">Home</AniLink></Navbar.Item>
    <Navbar.Item><AniLink className="text-menu" paintDrip to="/about" duration={2} hex="#D0D1CD">Chi Sono</AniLink></Navbar.Item>
    <Navbar.Item><AniLink className="text-menu" paintDrip to="/portfolio" duration={2} hex="#D0D1CD">Portfolio</AniLink></Navbar.Item>
    <Navbar.Item><AniLink className="text-menu" paintDrip to="/contact" duration={2} hex="#D0D1CD">Contatti</AniLink></Navbar.Item>
    </Navbar.Segment>
    <Navbar.Segment align="end">
      <Navbar.Item as="div">
        <Field kind="group">
          <Control>
            <Button target="_blank" as="a" color="info" href="https://twitter.com/resourcesantips">
               <span className="buttom">Twitter</span>
            </Button>
          </Control>
          <Control>
            <Button target="_blank" as="a" color="link" href="http://estebansanmartin.net/blog/">
              <span className="buttom">Blog</span>
            </Button>
          </Control>
        </Field>
      </Navbar.Item>
    </Navbar.Segment> 
  </Navbar.Menu>
</Navbar>
  );
}


export default AppNavbar;