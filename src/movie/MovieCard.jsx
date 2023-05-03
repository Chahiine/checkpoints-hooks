
import { Card, Image } from "semantic-ui-react";
import React from 'react'
import ReactStars from "react-stars";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function MovieCard(props , i ) {
  return (
    <div>
      <Card className="card">
        <Image
          src={props.movieData.Photo}
          wrapped
          ui={false}
          style={{ height: "30rem" }}
        />
        <Card.Content>
          <Card.Header>{props.movieData.Title}</Card.Header>
          <Card.Meta>
            <ReactStars
              count={props.movieData.rating}
              // value={props.movieData.rating}
              size={24}
              color1={"#ffd700"}
              half={false}
              edit={false}
            />
          </Card.Meta>
          <Card.Description>{props.movieData.Description}</Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
        <Link to={`/movie/${props.movieData.id}`}>
          <Button variant="warning" style={{ marginLeft: "40%" }}>
            Details
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default MovieCard
