// Resources.js
import React from "react";
import { ListGroup, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Resources() {
  return (
    <Container>
      <h2>Ressources</h2>
      <p>
        Voici une liste de ressources que nous vous recommandons de consulter
        pour en savoir plus sur notre association, nos activités, et nos
        domaines d'intérêt.
      </p>
      <ListGroup>
        <ListGroup.Item>
          <a href="https://www.example.com/document.pdf">
            Document PDF sur la culture XYZ
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.youtube.com/watch?v=abcdefg">
            Vidéo sur la solidarité XYZ
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.example.com/site-web">
            Site web sur l'éducation XYZ
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
export default Resources;
