export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  spotify: null,
  top_artists: null,
  //   token:
  //     "BQCT5n0qaL_KGJHFsT_vyAX_ynqspozIgYyeeTzj-7isM8dXM39sOOL-7PtR_hWp94paxvr0xkPk1z13gQGIDKXRtI7eDEghXQS2J-VYf0ncBb0xFWkLssWOXbAYeb2amvmlxrIZBXM17k_UJttql2aihbz5h70vPj93PBEA-w",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};

export default reducer;
