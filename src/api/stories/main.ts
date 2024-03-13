import { getApiDetails } from "@/utils/utils";
import axios from "axios";
import { MyResponseSchema } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getStories = async (limit: number = 6) => {
  try {
    const { hash, timestamps, publickey } = getApiDetails();
    const url = `${BASE_URL}/stories?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`;
    const { data } = await axios.get(url);
    const { data: res } = MyResponseSchema.parse(data);
    return res.results;
  } catch (err) {
    return err;
  }
};

export const getStoryById = async (id: number, limit: number = 10) => {
  try {
    const { hash, timestamps, publickey } = getApiDetails();
    const url = `${BASE_URL}/stories/${id}?ts=${timestamps}&apikey=${publickey}&hash=${hash}&limit=${limit}`;
    const { data } = await axios.get(url);
    const { data: res } = MyResponseSchema.parse(data);
    return res.results[0];
  } catch (err) {
    return err;
  }
};
