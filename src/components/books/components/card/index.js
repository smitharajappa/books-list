import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CardWrapper = ({ bookList }) => {
  return (
    <Row>
      {bookList && bookList.length ? (
        bookList.map((book) => (
          <Col
            key={book.id}
            xs={12}
            md={6}
            className="card_container"
            tabIndex={0}>
            <Card className="card">
              <Card.Title className="card_title">
                {book.volumeInfo["title"]}
              </Card.Title>
              <Card.Text className="card_text">
                Authors: {book.volumeInfo.authors[0]}
              </Card.Text>
              <Card.Text className="card_text">
                Publisher: {book.volumeInfo.publisher}
              </Card.Text>{" "}
              <Card.Text className="card_text">
                Published Date: {book.volumeInfo.publishedDate}
              </Card.Text>
            </Card>
          </Col>
        ))
      ) : (
        <p>No books found</p>
      )}
    </Row>
  );
};

export default CardWrapper;
