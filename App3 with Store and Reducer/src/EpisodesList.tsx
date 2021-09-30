import {Episode} from "./Interfaces";

const EpisodesList = (props: any): Array<JSX.Element> => {
  const {episodes, toggleFavAction, favourites, store} = props;
  const {state, dispatch} = store;
  return episodes.map((episode: Episode) => {
    return (
      <section key={episode.id} className="episode-box" style={{backgroundColor: "lightYellow"}}>
        <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`} />
        <div>{episode.name}</div>
        <section style={{backgroundColor: "whiteSmoke", display: "flex", justifyContent: "space-between"}}>
          <div>
            Season: {episode.season} Number:{episode.number}
            <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
              {favourites.find((fav: Episode) => fav.id === episode.id) ? "Unfavourite" : "Favourite"}
            </button>
          </div>
        </section>
      </section>
    );
  });
};

export default EpisodesList;
