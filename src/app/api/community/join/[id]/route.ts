import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectToDB } from "@/lib/DB/connect";
import { UserModel } from "@/lib/DB/models/user.model.js";
import { ClubModel, Club } from "@/lib/DB/models/club.model.js";

interface JsonRequest {
  clubId: string;
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

    // get the new club data
    const { clubId }: JsonRequest = await req.json();
    if (!clubId) throw new Error(`All fields are required`);

    // checking if the club already exists
    const exists: Club | null = await ClubModel.findById({ _id: clubId });
    if (!exists) throw new Error(`Club do not exists`);

    // checking if already exists in the club
    if (exists?.users.includes(user._id))
      throw new Error(`Already exists in the club`);

    // joining the club
    await ClubModel.updateOne({ _id: clubId }, { $push: { users: user._id } });

    return NextResponse.json({
      success: true,
      message: "Joined successfully",
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
};
