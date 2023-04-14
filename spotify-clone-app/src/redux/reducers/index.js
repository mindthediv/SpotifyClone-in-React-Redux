import { combineReducers } from "@reduxjs/toolkit";
import {
  GET_ROCK,
  GET_POP,
  GET_HIPHOP,
  GET_MUSIC,
  GET_ALBUM,
  GET_ARTIST,
} from "../actions";

const HomeState = {
  //Slices
  selections: {
    rockArtists: [
      "queen",
      "u2",
      "thepolice",
      "eagles",
      "thedoors",
      "oasis",
      "thewho",
      "bonjovi",
    ],
    popArtists: [
      "maroon5",
      "coldplay",
      "onerepublic",
      "jamesblunt",
      "katyperry",
      "arianagrande",
    ],
    hiphopArtists: ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"],
  },
  selectionsData: {
    rockData: [],
    popData: [],
    hiphopData: [],
  },
  searchData: {
    data: [],
  },
};

const HomeReducer = (state = HomeState, action) => {
  switch (action.type) {
    case GET_MUSIC:
      return {
        ...HomeState,
        searchData: {
          data: action.payload,
        },
      };
    case GET_ROCK:
      return {
        ...HomeState,
        selectionsData: {
          ...state.selectionsData,
          rockData: [...state.selectionsData.rockData, action.payload],
        },
      };
    case GET_POP:
      return {
        ...HomeState,
        selectionsData: {
          ...state.selectionsData,
          popData: [...state.selectionsData.popData, action.payload],
        },
      };
    case GET_HIPHOP:
      return {
        ...HomeState,
        selectionsData: {
          ...state.selectionsData,
          hiphopData: [...state.selectionsData.hiphopData, action.payload],
        },
      };

    default:
      return state;
  }
};

const AlbumState = {
  album: {
    data: {},
  },
};

const AlbumReducer = (state = AlbumState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return {
        ...AlbumState,
        album: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

const ArtistState = {
  artist: {
    data: {},
  },
};

const ArtistReducer = (state = ArtistState, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...ArtistState,
        artist: {
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  home: HomeReducer,
  album: AlbumReducer,
  artist: ArtistReducer,
});

export default mainReducer;
