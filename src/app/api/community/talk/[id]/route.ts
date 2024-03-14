import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectToDB } from "@/lib/DB/connect";
import { UserModel } from "@/lib/DB/models/user.model";
import { ClubModel, Club } from "@/lib/DB/models/club.model";
import { TalkModel, Talk } from "@/lib/DB/models/talks.model";

interface JsonRequest {
  clubId: string;
  message: string;
  content?: string;
}

interface Session {
  user: {
    name: string;
    email: string;
  };
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    // getting the session details
    const token = await getToken({ req });
    const session = await getServerSession(authOptions);
    if (!token || !session) throw new Error(`Not authenticated`);

    // connect to db
    await connectToDB();

    // finding the user in db
    const user = await UserModel.findOne({
      name: (session as Session).user.name,
      email: (session as Session).user.email,
    });
    if (!user) throw new Error(`User not found`);

    // destructuring request body with type checking
    const { clubId, message, content }: JsonRequest = await req.json();

    // validating request parameters
    if (!clubId || !message) throw new Error(`All fields are required`);

    // checking if the club exists
    const clubExists: Club | null = await ClubModel.findOne({ _id: clubId });
    if (!clubExists) throw new Error(`No club found`);

    // checking if in the club
    if (!clubExists.users.includes(user._id))
      throw new Error(`Not joined the club`);

    // saving the talk
    const talkExists: Talk | null = await TalkModel.findOne({ clubId });
    if (talkExists) {
      await TalkModel.updateOne(
        { _id: talkExists._id },
        { $push: { talks: { userId: user._id, talk: message, src: content } } }
      );
    } else {
      const newTalk = new TalkModel({
        userId: user._id,
        talk: message,
        src: content,
      });
      await newTalk.save();
    }

    return NextResponse.json({
      success: true,
      message: "Talk added to the database successfully",
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
};
