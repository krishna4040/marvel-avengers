import { getApiDetails } from "@/utils/utils"
import axios from "axios";
import { EventSchema, EventsSchema } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const getEvents = async (limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/events?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`
    const { data } = await axios.get(url)
    const events = EventsSchema.safeParse(data.data)
    return events
}

export const getEventById = async (id: number, limit: number = 10) => {
    const { hash, timestamps, publickey } = getApiDetails()
    const url = `${BASE_URL}/events/${id}?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`
    const { data } = await axios.get(url)
    const event = EventSchema.safeParse(data.data)
    return event
}