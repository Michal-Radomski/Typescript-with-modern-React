import React from "react";

import {Store} from "./Store";
import {toggleFavAction} from "./Actions";
import {EpisodeProps} from "./Interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

const FavPage = (): JSX.Element => {
  const {state, dispatch} = React.useContext(Store);

  const props: EpisodeProps = {
    episodes: state.favourites,
    store: {state, dispatch},
    toggleFavAction: toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  );
};

export default FavPage;
