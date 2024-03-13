import { Md5 } from "ts-md5";

const publickey = process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY!;
const privateKey = process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY!;

export const getApiDetails = () => {
    const timestamps = new Date().getTime();
    const hash = Md5.hashStr(timestamps + privateKey + publickey);
    return { publickey , privateKey, timestamps, hash };
  };