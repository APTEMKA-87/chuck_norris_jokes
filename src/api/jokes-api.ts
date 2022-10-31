import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/random',
})

export const jokesAPI = {
    getJoke() {
        const promise = instance.get<jokeType>('random');
        return promise;
    }
}

type jokeType = {
    categories: [],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
}