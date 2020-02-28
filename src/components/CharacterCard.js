// import React from "react";

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


const BackgroundCard = styled.div`
  background-color: lightgray;
`;

const Search = styled.div`
  width: 100%;
  background-color: darkgray;
`;

const SearchBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const MortyCard = styled.div`
  background-color: lightblue;
  padding: 2%;
  border: 1px black solid;
  margin: 2%;
`;

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
    <BackgroundCard>
      <div className="locations">
        <Search>
          <form className="search">
            <SearchBar>
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
            </SearchBar>
          </form>
        </Search>

        <div className="location">
          {data.map(data => {
            return (
              <MortyCard>
                <div className="character-list " key={data._id}>
                  <h2>{data.name}</h2>
                  <h3 className="capital">Status: {data.status}</h3>
                  <h3 className="capital">Species: {data.species}</h3>
                  <h3 className="capital">Type: {data.type}</h3>
                </div>
              </MortyCard>

            );
          })}
        </div>
      </div>
    </BackgroundCard>

  );
}
