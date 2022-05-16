import axios, {AxiosResponse} from "axios";

const key = '81db0e02';

const axiosInstance = axios.create({

    baseURL: 'http://www.omdbapi.com/',
    params: {
        apikey: key
    }
});

export const getCinemaAPI = {
    searchFilmsByTitle: (title: string, page: number) => {
        return axiosInstance.get<RequestForCinemaType, AxiosResponse<DataType>>(``, {params: {s: title, page: page}})
    }
};

type DataType = {
    Search: CinemaDataType []
    totalResults: string
    Response: string
    Error: string
}

export type CinemaDataType = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

type RequestForCinemaType = {
    title: string
    page: number
}
