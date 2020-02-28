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

const LocationTitle = styled.div`
  background-color: lightgray;
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
  const [locations, setLocations] = useState([]);
  const [query, setQuery] = useState("");
  console.log(locations);
  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/`, {

      })
      .then(response => {
        const data = response.data.results;
        console.log(response);
        const result = data.filter(local =>
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
        
        <LocationTitle>
          <h2>Locations</h2>
        </LocationTitle>
       
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
