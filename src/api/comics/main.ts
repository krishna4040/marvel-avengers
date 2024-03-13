import { getApiDetails } from "@/utils/utils"
import axios from "axios";
import { comicSchema, comicsSchema } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getComics = async (limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/comics?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`
    const { data } = await axios.get(url)
    const comics = comicsSchema.safeParse(data)
    return comics
}

export const getComicById = async (id: number, limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/comics?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}&id=${id}`
    const { data } = await axios.get(url)
    const comic = comicSchema.safeParse(data)
    return comic
}