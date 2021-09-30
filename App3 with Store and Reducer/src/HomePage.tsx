import React from "react";

import {Store} from "./Store";
import {EpisodeProps} from "./Interfaces";
import {fetchDataAction, toggleFavAction} from "./Actions";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

const HomePage = (): JSX.Element => {
  const {state, dispatch} = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch); // - równe: if (state.episodes.length===0) {fetchDataAction()}
  });

  const props: EpisodeProps = {
    episodes: state.episodes,
    store: {state, dispatch},
    toggleFavAction: toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
};

export default HomePage;
