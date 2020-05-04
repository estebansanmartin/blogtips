import React from "react"
import "../estilos.scss"

import Edile from "../images/Constructora.png"
import Assistenza from "../images/assistenza1.png"
import Edilizia from "../images/edilizia1.png"
import Folio from "../images/folio1.png"
import Restaurant from "../images/restaurant1.png"
import Reactivo from "../images/react.png"

import "rbx/index.css";
import { Hero, Title, Container, Content, Image, Button, Column } from "rbx";

import SEO from "../components/seo"

const Portfolio = () => (
  <>
    <SEO title="Portfolio Personale Siti Web" />
    <Hero size="fullheight-with-navbar">
        <Hero.Body>
          <Container fluid textAlign="centered">
            <Title className="title" size={1}>Portfolio</Title>
            <br />

        <Content size="medium">

        <Column.Group>
            <Column size="three-fifths">
            <Image className="image" src={Edile} />
            </Column>
            <Column>
            <Title subtitle className="subtitle" as="p" size={5}>
                        Cliente: Constructora GM
                        </Title>
                        <Content className="text" size="medium">
                    Sito web svilupatto con Wordpress, per una impresa edile. 
                    <br />
                    <p>#wordpress #css</p>
                    </Content>
                        <Button pull="left" className="buttom" outlined style={{ backgroundColor: `#FA7C91`, color: `white` }} target="_blank" as="a" href="https://constructoragreenmartins.cl/">
                        <span>Sito Web</span>
                        </Button>
                 </Column>
            </Column.Group>

            <br />

            <Column.Group>
            <Column>
            <Title subtitle className="subtitle" as="p" size={5}>
                        Cliente: Camila Assistenza
                        </Title>
                        <Content className="text" size="medium">
                    Sito web svilupatto con Wordpress, per una impresa di assistenza anziani. 
                    <br />
                    <p>#wordpress #css</p>
                    </Content>
                        <Button pull="left" className="buttom" outlined style={{ backgroundColor: `#FA7C91`, color: `white` }} target="_blank" as="a" href="https://assistenzatorino.netsons.org/">
                        <span>Sito Web</span>
                        </Button>
                </Column>
            <Column size="three-fifths">
            <Image className="image" src={Assistenza} />
            </Column>
            </Column.Group>

            <br />

            <Column.Group>
            <Column size="three-fifths">
            <Image className="image" src={Restaurant} />
            </Column>
            <Column>
            <Title subtitle className="subtitle" as="p" size={5}>
                        Cliente: Torino Grill
                        </Title>
                        <Content className="text" size="medium">
                    Sito web svilupatto Bootstrap, per un restaurante. 
                    <br />
                    <p>#bootstrap #css #javascript</p>
                    </Content>
                        <Button pull="left" className="buttom" outlined style={{ backgroundColor: `#FA7C91`, color: `white` }} target="_blank" as="a" href="http://estebansanmartin.net/es/restaurant/">
                        <span>Sito Web</span>
                        </Button>
                 </Column>
            </Column.Group>

            <br />

            <Column.Group>
            <Column>
            <Title subtitle className="subtitle" as="p" size={5}>
                        Cliente: Edilizia
                        </Title>
                        <Content className="text" size="medium">
                    Sito web svilupatto con Bootstrap, per una impresa edile. 
                    <br />
                    <p>#bootstrap #css #javascript</p>
                    </Content>
                        <Button pull="left" className="buttom" outlined style={{ backgroundColor: `#FA7C91`, color: `white` }} target="_blank" as="a" href="http://estebansanmartin.net/es/edilizia/">
                        <span>Sito Web</span>
                        </Button>
                </Column>
            <Column size="three-fifths">
            <Image className="image" src={Edilizia} />
            </Column>
            </Column.Group>

            <br />

            <Column.Group>
            <Column size="three-fifths">
            <Image className="image" src={Reactivo} />
            </Column>
            <Column>
            <Title subtitle className="subtitle" as="p" size={5}>
                        Cliente: Portfolio Personale
                        </Title>
                        <Content className="text" size="medium">
                    Sito web svilupatto con ReactJS.
                    <br />
                    <p>#reactjs #css #webcomponents</p>
                    </Content>
                        <Button pull="left" className="buttom" outlined style={{ backgroundColor: `#FA7C91`, color: `white` }} target="_blank" as="a" href="http://estebansanmartin.net">
                        <span>Sito Web</span>
                        </Button>
                 </Column>
            </Column.Group>

            <br />

            <Column.Group>
            <Column>
            <Title subtitle className="subtitle" as="p" size={5}>
                        Cliente: Portfolio Personale
                        </Title>
                        <Content className="text" size="medium">
                    Sito web svilupatto con Foundation. 
                    <br />
                    <p>#foundation #css #javascript</p>
                    </Content>
                        <Button pull="left" className="buttom" outlined style={{ backgroundColor: `#FA7C91`, color: `white` }} target="_blank" as="a" href="http://estebansanmartin.net/es/">
                        <span>Sito Web</span>
                        </Button>
                </Column>
            <Column size="three-fifths">
            <Image className="image" src={Folio} />
            </Column>
            </Column.Group>

            <br />

           
            </Content>

                </Container>

        </Hero.Body>
      </Hero>
  </>
)

export default Portfolio