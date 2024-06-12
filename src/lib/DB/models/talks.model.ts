import mongoose, { Schema, Model, Document, Types } from "mongoose";

interface Talk extends Document {
  clubId: Types.ObjectId;
  talks: {
    userId: Types.ObjectId;
    talk: string;
    time: Date;
    src: string;
  }[];
}

const talkSchema = new Schema<Talk>(
  {
    clubId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    talks: {
      type: [
        {
          userId: { type: Types.ObjectId, ref: "user" },
          talk: { type: String },
          time: { type: Date, default: new Date() },
          src: { type: String, default: "" },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const TalkModel: Model<Talk> = mongoose.models ?
  mongoose.models["talk"] : mongoose.model<Talk>("talk", talkSchema);

export { TalkModel };
