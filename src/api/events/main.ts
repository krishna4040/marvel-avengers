import { getApiDetails } from "@/utils/utils"
import axios from "axios";
import { MyResponseSchema } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getEvents = async (limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/events?limit=${limit}&ts=${timestamps}&apikey=${publickey}&hash=${hash}`
    const { data } = await axios.get(url)
    const {data: res} = MyResponseSchema.parse(data)
    return res.results
}

export const getEventById = async (id: number, limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/events/${id}?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`
    const { data } = await axios.get(url)
    const {data: res} = MyResponseSchema.parse(data)
    return res.results[0]
}