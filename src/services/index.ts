import { IMovie } from "../store/types";

export const fetchMoviesData = async () => {
    try {
        const response = await fetch("./data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching movies data:", error);
        throw error;
    }
};

export const getFeaturedMovie = (data: any, movieId: string) => {
    if (movieId) {
        return data.TendingNow.find((movie: IMovie) => movieId === movie.Id);
    }
    return data.Featured;
};
