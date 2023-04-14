export const GET_MUSIC = "GET_MUSIC";
export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";
export const GET_HIPHOP = "GET_HIPHOP";
export const GET_ALBUM = "GET_ALBUM";
export const GET_ARTIST = "GET_ARTIST";
const baseEndpoint =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

//////////////////////////////////

// export const addFavs = (paylo) => {
//   return {
//     type: ADD_FAVOURITES,
//     payload: paylo,
//   };
// };

let headers = new Headers({
  // sets the headers
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
});

// SEARCH THUNK
export const searchThunk = (query) => {
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query, {
        method: "GET",
        headers,
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data, getState);
        dispatch({
          type: GET_MUSIC,
          payload: data.data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//HOMEPAGE THUNKS
export const rockThunk = (artistName) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + artistName, {
        method: "GET",
        headers,
      });
      if (response.ok) {
        const data = await response.json();
        const songInfo = data.data;
        dispatch({
          type: GET_ROCK,
          payload: songInfo,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const popThunk = (artistName) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + artistName, {
        method: "GET",
        headers,
      });
      if (response.ok) {
        const data = await response.json();
        const songInfo = data.data;
        dispatch({
          type: GET_POP,
          payload: songInfo,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const hiphopThunk = (artistName) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + artistName, {
        method: "GET",
        headers,
      });
      if (response.ok) {
        const data = await response.json();
        const songInfo = data.data;
        dispatch({
          type: GET_HIPHOP,
          payload: songInfo,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//ALBUM THUNK
export const albumThunk = (albumId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_ALBUM,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//ARTIST THUNK
export const artistThunk = (artistId) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + artistId, {
        method: "GET",
        headers,
      });
      if (response.ok) {
        const artist = await response.json();

        dispatch({
          type: GET_ARTIST,
          payload: artist,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
