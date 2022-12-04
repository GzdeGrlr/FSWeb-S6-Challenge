// Karakter bileşeniniz buraya gelecek
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Accordion, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Container = styled.div`
  width: 100vw;
  margin-top: 5%;
  text-align: center;
`;

const AccordionDiv = styled.div`
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
`;

const Baslik = styled.h1`
  font-style: italic;
`;
function Karakter() {
  const [characters, setCharacters] = useState(null);
  const [showFilms, setShowFilms] = useState(false);

  useEffect(() => {
    axios("https://swapi.dev/api/people/").then((response) => {
      console.log(response.data);
      setCharacters(response.data);
    });
  }, []);

  const handleClick = () => {
    setShowFilms(!showFilms);
  };

  return (
    <Container>
      <Baslik>Star Wars Characters</Baslik>

      {characters === null ? (
        <div>Loading...</div>
      ) : (
        <AccordionDiv className="mt-4">
          <Accordion defaultActiveKey="0">
            {characters.map((character, index) => (
              <Accordion.Item eventKey={index}>
                <Accordion.Header>{character.name}</Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Birth Year:</strong> {character.birth_year}
                  </p>
                  <p>
                    <strong>Eye Color:</strong>{" "}
                    {character.eye_color.charAt(0).toUpperCase() +
                      character.eye_color.substring(1)}
                  </p>
                  <p>
                    <strong>Gender:</strong>{" "}
                    {character.gender.charAt(0).toUpperCase() +
                      character.gender.substring(1)}
                  </p>
                  <Button onClick={handleClick}>
                    {showFilms ? "Hide Films" : "Show Films"}
                  </Button>
                  {showFilms && (
                    <ul className="list-unstyled">
                      {character.films.map((film) => (
                        <li key={film}>{film}</li>
                      ))}
                    </ul>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </AccordionDiv>
      )}
    </Container>
  );
}

export default Karakter;
