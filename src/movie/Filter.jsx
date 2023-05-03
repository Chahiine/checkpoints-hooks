import React, { useState } from "react";
import ReactStars from "react-stars";
import { Navbar, Container, Button, Modal } from "react-bootstrap";
import "./Filter.css";
import { v4 as uuidv4 } from "uuid";


const Filter = ({ setFilterTitle, setFilterRating, setMovies, movies }) => {
  const ratingChanged = (newRating) => {
    setFilterRating(newRating);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    poster: "",
    description: "",
    rating: 1,
  });
  console.log(newMovie);
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setMovies([...movies, newMovie]);
    handleClose();
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="container">
          <Navbar.Brand href="#home" className="mv"></Navbar.Brand>
          <input
            className="Search"
            type="text"
            placeholder="search"
            onChange={(e) => {
              setFilterTitle(e.target.value);
            }}
          />
          <ReactStars
            count={10}
            size={24}
            color2={"#ffd700"}
            half={false}
            onChange={ratingChanged}
            value={ratingChanged}
          />
          <Button variant="outline-warning" onClick={handleShow}>
            Add
          </Button>{" "}
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="h1">Add new Movie ...!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="forms" onChange={(e) => handleChange(e)}>
          <label htmlFor="Title" className="la">
            Title:
          </label>
          <input type="text" placeholder=" Title" name="Title" />
          <br />
          <label htmlFor=" Poster" className="la">
            {" "}
            Photo:
          </label>
          <input type="text" placeholder=" Photo" name="Photo" />
          <br />
          <label htmlFor="Description" className="la">
            Description:
          </label>
          <input type="text" placeholder=" Description" name="Description" />
          <br />
          <label htmlFor="Rating" className="la">
            Rating:
          </label>
          <input
            type="number"
            min={0}
            max={10}
            placeholder="Rating"
            name="rating"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Filter;
