import { API } from "../@libs/axios";
import { IMovie } from '../@libs/types';

const _ENDPOOINT = '/movies';

const getMovies = async (): Promise<IMovie[]> => {
    const { data } = await API.get(_ENDPOOINT)
    return data;
}


const getMoviesById = async (id: string): Promise<IMovie[]> => {
    const { data } = await API.get(`${_ENDPOOINT}/${id}`)
    return data;
}

export const MoviesService = {
    getMovies, 
    getMoviesById
}