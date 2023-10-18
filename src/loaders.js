import {baseUrl} from './base_url';

export const movieLoader = async () => {
    // make a call to backend index route
    const response = await fetch(`${baseUrl}/movie`)
    // convert the response in a js object
    const movie = await response.json()
    // return the people
    return movie
}

export const moviesLoader = async ({params}) => {
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/movie/${id}`)
    // convert the response into a js object
    const movies = await response.json()
    // return the person
    return movies
}