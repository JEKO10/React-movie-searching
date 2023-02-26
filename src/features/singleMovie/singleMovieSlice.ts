import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type MovieCollection = {
  id: number;
  backdrop_path: string;
  name: string;
  poster_path: string;
};

type MovieGenres = {
  id: number;
  name: string;
};

type MovieCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type MovieInfoType = {
  title: string;
  tagline: string;
  backdrop_path: string;
  belongs_to_collection: MovieCollection;
  genres: MovieGenres[];
  budget: number;
  homepage: string;
  imdb_id: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: MovieCompanies[];
  production_countries: [{ name: string }];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [{ english_name: string }];
  status: string;
  vote_average: number;
  vote_count: number;
};

type MovieCast = {
  id: number;
  cast_id: number;
  adult: boolean;
  character: string;
  credit_id: string;
  gender: number;
  known_for_department: string;
  name: string;
  order: number;
  profile_path: string;
};

type MovieCreditsType = {
  id: number;
  cast: MovieCast[];
  crew: [];
};

type InitialStateType = {
  isLoading: boolean;
  movieInfo: MovieInfoType;
  movieCredits: MovieCreditsType;
};

const initialState: InitialStateType = {
  isLoading: true,
  movieInfo: <MovieInfoType>{},
  movieCredits: <MovieCreditsType>{},
};

export const getMovie = createAsyncThunk(
  "singleMovie/getMovie",
  async (id: string | undefined, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
      );
      return resp.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

export const getCredits = createAsyncThunk(
  "singleMovie/getCredits",
  async (id: string | undefined, thunkAPI) => {
    try {
      const resp = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&adult=false`
      );
      return resp.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovie.pending && getCredits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getMovie.fulfilled,
        (state, action: PayloadAction<MovieInfoType>) => {
          state.isLoading = false;
          state.movieInfo = action.payload;
        }
      )
      .addCase(getMovie.rejected && getCredits.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(
        getCredits.fulfilled,
        (state, action: PayloadAction<MovieCreditsType>) => {
          state.isLoading = false;
          state.movieCredits = action.payload;
        }
      );
  },
});

export const { reducer } = singleMovieSlice;
