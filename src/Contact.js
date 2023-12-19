// Contact.js
import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message to the database
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setError(true);
        }
      });
  };
  return (
    <Container>
      <h2>Contact</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
      {success && (
        <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
          Votre message a été envoyé avec succès.
        </Alert>
      )}
      {error && (
        <Alert variant="danger" onClose={() => setError(false)} dismissible>
          Une erreur s'est produite lors de l'envoi de votre message.
        </Alert>
      )}
      <p>
        Vous pouvez aussi nous contacter par téléphone au 0340881655, ou par
        courrier à l'adresse suivante:
      </p>
      <p>
        Andohalo
        <br />
        101 Antananarivo
        <br />
        Madagasikara
      </p>
    </Container>
  );
}
export default Contact;
