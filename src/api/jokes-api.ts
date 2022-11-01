import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/',
})

// АПИ
export const jokesAPI = {
    getJoke() {
        const promise = instance.get<jokeType>('random');
        return promise;
    }
}

//Тип объекта, приходящий с гет запроса
export type jokeType = {
    categories: [],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
}