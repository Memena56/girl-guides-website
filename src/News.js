// News.js
import React, { useState, useEffect } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function News() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    // Fetch the events from the database
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <Container>
      <h2>Actualité et évènement</h2>
      <CardGroup>
        {events.map((event) => (
          <Card key={event.id}>
            <Card.Img variant="top" src={event.image} />
            <Card.Body>
              <Card.Title>{event.titre}</Card.Title>
              <Card.Text>
                {event.date} - {event.heure_debut} - {event.heure_fin}
              </Card.Text>
              <Card.Text>{event.categorie}</Card.Text>
              <Card.Text>Organisé par {event.organisateur}</Card.Text>
              <Card.Text>Inscription: {event.inscription}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
}
export default News;
