import { getApiDetails } from "@/utils/utils"
import axios from "axios";
import { ComicSchema, ComicsSchema } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!

export const getComics = async (limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/comics?limit=${limit}&ts=${timestamps}&apikey=${publickey}&hash=${hash}`
    console.log(url)
    const { data } = await axios.get(url)
    const comics = ComicsSchema.safeParse(data.data)
    return comics
}

export const getComicById = async (id: number, limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/comics/${id}?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`
    const { data } = await axios.get(url)
    const comic = ComicSchema.safeParse(data.data)
    return comic
}