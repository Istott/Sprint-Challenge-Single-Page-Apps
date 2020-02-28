// import React from "react";

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Characters() {
  // data is grabbing the response from the request and then we map through it
  const [data, setData] = useState([]);

  // is looking at our input value and filtering what we input
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`, {
      
      })
      .then(response => {
        console.log(response);
        const character = response.data.results.filter(char =>
          char.name.toLowerCase().includes(query.toLowerCase())
        );
        // console.log("harry potter characters", response);
        setData(character);
      });
  }, [query]);
  // this is the function watching for what we put in our input
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div className="locations">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <div className="location">
        {data.map(data => {
          return (
            <div className="character-list " key={data._id}>
              <h2>{data.name}</h2>
              <h3 className="capital">Status: {data.status}</h3>
              <h3 className="capital">Species: {data.species}</h3>
              <h3 className="capital">Type: {data.type}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
