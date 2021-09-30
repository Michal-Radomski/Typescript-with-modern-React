import React from "react";
import {Store} from "./Store";

interface Episode {
  id: number;
  image: {medium: string};
  name: string;
  number: number;
  season: number;
}

const App = (): JSX.Element => {
  const {state, dispatch} = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(); // - równe: if (state.episodes.length===0) {fetchDataAction()}
  });

  const fetchDataAction = async () => {
    const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };
  // console.log(state);
  return (
    <React.Fragment>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episode</p>
      </header>

      <section style={{borderColor: "red"}} className="episode-layout">
        {state.episodes.map((episode: Episode) => {
          return (
            <section style={{borderColor: "blue"}} key={episode.id} className="episode-box">
              <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
              <div>{episode.name}</div>
              <section style={{borderColor: "green"}}>
                Season: {episode.season} Number:{episode.number}
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default App;
