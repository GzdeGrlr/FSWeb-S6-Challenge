import React from "react";

function KarakterFilms(props) {
  const { filmComponent } = props;

  return (
    <div>
      <ul className="list-unstyled">
        {filmComponent.films.map((film, index) => (
          <li key={film}>
            <strong>{index + 1}. Film:</strong> {film}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KarakterFilms;
