import { getApiDetails } from "@/utils/utils"
import axios from "axios";
import { MyResponseSchema } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getStories = async (limit: number = 6) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/story?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`
    const { data } = await axios.get(url)
    const { data: res } = MyResponseSchema.parse(data)
    return res.results
}

export const getStoryById = async (id: number, limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/story/${id}?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`
    const { data } = await axios.get(url)
    const { data: res } = MyResponseSchema.parse(data)
    return res.results[0]
}