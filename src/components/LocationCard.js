// import React from "react";

// export default function LocationCard({ name, type, dimension, residents }) {
//   return <span>todo: location</span>;
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


const BackgroundCard = styled.div`
  background-color: lightblue;
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

const RickCard = styled.div`
  background-color: lightgray;
  padding: 2%;
  border: 1px black solid;
  margin: 2%;
`;

export default function Location() {
  // NOTE: The value given to setState() must be of the same type as your value is expected to be
  const [locations, setLocations] = useState([]);
  const [query, setQuery] = useState("");
  console.log(locations);
  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/`, {
        // params: {
        //   key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
        // }
      })
      .then(response => {
        const data = response.data.results;
        console.log(response);
        const result = data.filter(local =>
          // spell is the name of the data I am trying to display from the given endpoint
          // try taking the .toLowerCase out for each part and see what happens when you search. You can search but doesn't find the spells as accurately.
          local.name.toLowerCase().includes(query.toLowerCase())
        );
        setLocations(result);
      });
  }, [query]);
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
          {locations.map(location => {
            return (
              <RickCard>
                <div className="location-list " key={location._id}>
                  <h2>{location.location}</h2>
                  <h3>Name: {location.name}</h3>
                  <h3 className="capital">Type: {location.type}</h3>
                  <h3 className="capital">Dimension: {location.dimension}</h3>
                </div>
              </RickCard>
              
            );
          })}
        </div>
      </div>
    </BackgroundCard>

  );
}
