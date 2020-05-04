import React from "react";
import "../estilos.scss";

import Mapuche from "../images/mapuche.png"

import "rbx/index.css";
import { Hero, Title, Container, Column, Image } from "rbx";


import SEO from "../components/seo"

function About() {

return (
    <>
    <SEO title="Web Designer e Web Digital a Torino" />
    <Hero size="fullheight-with-navbar">
        <Hero.Body>
          <Container textAlign="centered">
            <Title className="title" size={1}>sono</Title>
            <Column size="three-fifths" offset="one-fifth">
            <Image className="image" src={Mapuche} />
            </Column>
            <Title textWeight="bold" className="subtitle" as="h2" size={6} subtitle>Mi Chiamo Esteban San Martin, sono citadino Cileno con residenza a Torino, sono una appassionato per il design e le nuove tecnologie.
            </Title>
            <Title subtitle className="subtitle" as="p" size={4}>Il mio percorso proffesionale
            </Title>
            <Title className="subtitle" as="h2" size={6} subtitle>Sono laureato come <strong>Grafico Pubblicitario</strong>, e mi sono specializzato come <strong>Front-end</strong> con CMS.
              Ma era solo l'inizio, fino ad ora non ho finito di imparare. Ho iniziato imparando HTML, dopo CSS, alcuni frameworks per eseguire più velocemente il lavoro, 
              Bootstrap e Materialize. Dopo è arrivato il momento di fare un paso avanti, e ho cominciato a imparare JQuery e Javascript, adesso mi trovo imparando 
              <strong> ReactJS</strong>, e <strong>GatsbyJS</strong>, che mi ha facilitato molto il lavoro con ReactJS.
            </Title>
            <Title className="subtitle" as="h2" size={6} subtitle>Ho collaborato con diverse agenzie di comunicazione del Cile, e grazie a vari collaborazioni, riesco a coprire al 100% il settore Web e Grafico.
            </Title>
            <Title centered className="subtitle" as="h2" size={6} subtitle>In grafica ho padronanza con la suite Adobe, sopra tutto con Photoshop e Illustrator; e come front-end domino HTML, CSS, Javascript, CMS(Joomla e Wordpress), Github, e un po di ReactJS e GatsbyJS.
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
      </>
)
}

export default About