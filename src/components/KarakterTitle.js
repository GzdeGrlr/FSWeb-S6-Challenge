import React from "react";
import styled from "styled-components";

const Baslik = styled.h1`
  font-style: italic;
`;

function KarakterTitle() {
  return <Baslik>Star Wars Characters</Baslik>;
}

export default KarakterTitle;
