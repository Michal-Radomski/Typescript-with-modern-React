import {Action, Episode, State} from "./Interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL = "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (state: State, dispatch: any, episode: Episode | any): Action => {
  const episodeInFav = state.favourites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };
  if (episodeInFav) {
    const favWithoutEpisode = state.favourites.filter((fav: Episode) => fav.id !== episode.id);
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};
