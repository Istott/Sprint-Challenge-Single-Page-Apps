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

const EpisodeTitle = styled.div`
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

export default function Episode() {
  // NOTE: The value given to setState() must be of the same type as your value is expected to be
  const [episodes, setEpisodes] = useState([]);
  const [query, setQuery] = useState("");
  console.log(episodes);
  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/`, {
      })
      .then(response => {
        const data = response.data.results;
        console.log(response);
        const result = data.filter(local =>
          // spell is the name of the data I am trying to display from the given endpoint
          // try taking the .toLowerCase out for each part and see what happens when you search. You can search but doesn't find the spells as accurately.
          local.name.toLowerCase().includes(query.toLowerCase())
        );
        setEpisodes(result);
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

        <EpisodeTitle>
          <h2>Episodes</h2>
        </EpisodeTitle>
       
        <div className="location">
          {episodes.map(location => {
            return (
              <RickCard>
                <div className="location-list " key={location._id}>
                  <h2>{location.location}</h2>
                  <h3>Name: {location.name}</h3>
                  <h3 className="capital">Air Date: {location.air_date}</h3>
                  <h3 className="capital">Episode: {location.episode}</h3>
                </div>
              </RickCard>
              
            );
          })}
        </div>
      </div>
    </BackgroundCard>

  );
}
