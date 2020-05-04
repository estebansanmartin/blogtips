import React from "react"
import "../estilos.scss"
import Torino from "../images/torino.jpg"

import "rbx/index.css";
import { Hero, Title, Container, Column, Image } from "rbx";

import SEO from "../components/seo"

const Contact = () => (
  <>
    <SEO title="Web Designer e Web Digital a Torino" />
    <Hero size="fullheight-with-navbar">
        <Hero.Body>
          <Container textAlign="centered">
          <Title className="title" size={1}>Contattaci</Title>
            <Column size="three-fifths"offset="one-fifth">
            <Image className="image" src={Torino} />
            </Column>
            <Title className="subtitle" as="h2" size={5} subtitle>Si volete richiere qualche informazione, ci invito a lasciarme un messaggio sul mio email
            </Title>
            <Title textAlign="centered" className="link" as="h2" size={4} subtitle>elcelibus@gmail.com
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
  </>
)

export default Contact