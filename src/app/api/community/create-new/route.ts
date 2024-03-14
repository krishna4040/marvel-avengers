import { NextResponse, NextRequest } from "next/server";
import { getServerSession } from "next-auth/next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectToDB } from "@/lib/DB/connect";
import { UserModel } from "@/lib/DB/models/user.model";
import { ClubModel, Club } from "@/lib/DB/models/club.model";

interface JsonRequest {
  name: string;
  image: string | undefined;
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
    const { name, image }: JsonRequest = await req.json();
    if (!name || !image) throw new Error(`All fields are required`);

    // checking if the club already exists
    const exists: Club | null = await ClubModel.findOne({ name });
    if (exists) throw new Error(`Club already exists`);

    // create a new club
    const newClub = new ClubModel({
      name,
      image,
      users: [user?._id],
    });
    await newClub.save();

    return NextResponse.json({
      success: true,
      message: "Created new Club successfully",
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
};
