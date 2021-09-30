// All the Interfaces

export type Dispatch = React.Dispatch<Action>;

export interface State {
  episodes: Array<Episode>;
  favourites: Array<Episode>;
}

export interface Action {
  type: string;
  payload: Array<Episode> | any;
}

export interface Episode {
  id: number;
  image: {medium: string};
  name: string;
  number: number;
  season: number;
}

export interface EpisodeProps {
  episodes: Array<Episode>;
  store: {state: State; dispatch: Dispatch};
  toggleFavAction: (state: State, episode: Episode, dispatch: Dispatch) => Action;
  favourites: Array<Episode>;
}
