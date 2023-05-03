import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./MovieDetails.css";
import { data } from "../data";
const MovieDetails = ({ movies }) => {
  const navigate = useNavigate();

  let { id } = useParams();
  const [details, setDetails] = useState(data);
  useEffect(() => {
    setDetails(movies.filter((movie) => movie.id === id)[0]);

    return () => {};
  }, [id]);
  const home = () => {
    navigate("/");
  };

  return (
    <div className="amos">
      <iframe
        width="100%"
        height="500"
        src={details.Trailer}
        title={details.Title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h1 className="dt">{details.Title}</h1>
      <h2 className="desc">{details.Description}</h2>
      <div className="but">
        <Button className="but" variant="warning" onClick={home}>
          GO BACK
        </Button>
      </div>
    </div>
  );
};

export default MovieDetails;
