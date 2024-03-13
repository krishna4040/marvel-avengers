import { getApiDetails } from "@/utils/utils";
import axios from "axios"
import { MarvelApiResponseSchema } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getCharacters = async (limit: number = 10) => {
    const { timestamps, hash, publickey } = getApiDetails();
    const url = `${BASE_URL}/characters?ts=${timestamps}&limit=${limit}&apikey=${publickey}&hash=${hash}`
    const { data } = await axios.get(url);
    const { data: res } = MarvelApiResponseSchema.parse(data)
    return res.results;
}

export const getCharacterByName = async (name: string, limit: number = 10) => {
    const { timestamps, hash, publickey } = getApiDetails();
    const url = `${BASE_URL}/characters?nameStartsWith=${name}&limit=${limit}&ts=${timestamps}&apikey=${publickey}&hash=${hash};`
    const response = await axios.get(url);
    const { data } = response;
    const { data: res } = MarvelApiResponseSchema.parse(data)
    return res.results;

}

export const getCharacterById = async (id: number, limit: number = 10) => {
    const { timestamps, hash, publickey } = getApiDetails();
    const url = `${BASE_URL}/characters/${id}?ts=${timestamps}&limit=${limit}&apikey=${publickey}&hash=${hash}`
    const response = await axios.get(url);
    const { data } = response;
    const { data: res } = MarvelApiResponseSchema.parse(data)
    return res.results[0];
}