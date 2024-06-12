import { Types, Document } from "mongoose";

export interface Club extends Document {
    users: Types.ObjectId[];
    name: string;
    image: string;
}

export interface Talk extends Document {
    clubId: Types.ObjectId;
    talks: {
        userId: Types.ObjectId;
        talk: string;
        time: Date;
        src: string;
    }[];
}

export interface User extends Document {
    email: string;
    password: string;
    name: string;
    image: string;
    method: "google" | "github";
}