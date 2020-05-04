import React from "react";
import "../estilos.scss";
import Logo from "../images/giphy.webp";
import Layout from "../components/layout"

import "rbx/index.css";
import { Hero, Title, Container, Image} from "rbx";


import SEO from "../components/seo"

function IndexPage() {
return (
    <>
    <SEO title="Web Designer e Web Digital a Torino" />
    <Layout />
    <Hero size="fullheight-with-navbar">
        <Hero.Body>
          <Container textAlign="centered">
            <Image className="svg" src={Logo}></Image>
            <Title textWeight="bold" className="title-home" size={1}>Web Digital</Title>
            <Title className="title-home" size={1}>FrontEnd</Title>
          </Container>
        </Hero.Body>
      </Hero>
      </>
)
}

export default IndexPage