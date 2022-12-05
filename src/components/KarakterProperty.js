import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Accordion, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import KarakterFilms from "./KarakterFilms";

function KarakterProperty(props) {
  const { krktr } = props;
  const [showFilms, setShowFilms] = useState(false);

  const handleClick = () => {
    setShowFilms(!showFilms);
  };

  return (
    <div>
      <Accordion.Header>{krktr.name}</Accordion.Header>
      <Accordion.Body>
        <p>
          <strong>Birth Year:</strong> {krktr.birth_year}
        </p>
        <p>
          <strong>Eye Color:</strong>{" "}
          {krktr.eye_color.charAt(0).toUpperCase() +
            krktr.eye_color.substring(1)}
        </p>
        <p>
          <strong>Gender:</strong>{" "}
          {krktr.gender.charAt(0).toUpperCase() + krktr.gender.substring(1)}
        </p>
        <Button onClick={handleClick}>
          {showFilms ? "Hide Films" : "Show Films"}
        </Button>
        {showFilms && <KarakterFilms filmComponent={krktr} />}
      </Accordion.Body>
    </div>
  );
}

export default KarakterProperty;
