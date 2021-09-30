// All the Interfaces

export interface State {
  episodes: Array<Episode>;
  favourites: Array<any>;
}

export interface Action {
  type: string;
  payload: any;
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
  toggleFavAction: (episode: Episode) => Action;
  favourites: Array<Episode>;
}
