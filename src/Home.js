// Home.js
import React from "react";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="bg-light p-5">
      <Container>
        <h1>Bienvenue sur le site de l'association XYZ</h1>
        <p>
          Nous sommes une association qui a pour but de promouvoir la culture,
          la solidarité, et l'éducation dans le monde. Nous organisons des
          camps, des formations, des réunions, et des activités spécifiques pour
          nos membres et nos partenaires. Nous sommes toujours à la recherche de
          nouveaux bénévoles, de nouveaux donateurs, et de nouveaux projets.
        </p>
        <p>
          <Button variant="primary" href="/contact">
            Rejoignez-nous
          </Button>
          <Button variant="success" href="/shop">
            Faites un don
          </Button>
        </p>
      </Container>
    </div>
  );
}
export default Home;
