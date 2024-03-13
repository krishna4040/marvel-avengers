import mongoose, { Schema, Model, Document, Types } from "mongoose";

export interface Club extends Document {
  users: Types.ObjectId[];
  name: string;
  image: string;
}

const clubSchema = new Schema<Club>(
  {
    users: {
      type: [
        {
          type: mongoose.Types.ObjectId,
          ref: "user",
        },
      ],
      default: [],
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ClubModel: Model<Club> =
  mongoose.models["club"] || mongoose.model<Club>("club", clubSchema);

export { ClubModel };
