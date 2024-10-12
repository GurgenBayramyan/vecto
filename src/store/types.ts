import store from ".";

export interface IMovie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    VideoUrl: string;
    Description: string;
}

export interface IMoviesSliceInitialState {
    movies: IMovie[];
    featured: IMovie;
}

export interface IEffectsSliceInitialState {
    showOpacityBg: boolean;
    isVideoPlaying: boolean;
    isOpenInfoModal: boolean;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
