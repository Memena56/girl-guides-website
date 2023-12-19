// Shop.js
import React, { useState, useEffect } from "react";
import { Card, CardGroup, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch the products from the database
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container>
      <h2>Shop</h2>
      <p>
        Achetez nos produits et soutenez nos activités. Tous les bénéfices sont
        reversés à l'association.
      </p>
      <CardGroup>
        {products.map((product) => (
          <Card key={product.id}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.price} ariary</Card.Text>
              <Button variant="primary" href={`/buy/${product.id}`}>
                Acheter
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Container>
  );
}
export default Shop;
