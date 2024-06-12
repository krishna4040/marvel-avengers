import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase.config";
import { v4 as uuidv4 } from "uuid";

interface FileWithMetadata extends Blob {
  name: string;
}

export const uploadUserImagesToFirebaseStorage = async (
  userId: string,
  dirname: string,
  image: FileWithMetadata
): Promise<[boolean, string | undefined]> => {
  if (!userId) throw new Error("No user ID has been provided.");
  if (!dirname) throw new Error("No directory has been provided.");

  if (!image || !image?.name)
    throw new Error("A valid image has not been provided.");

  const filePath = `users/${userId}/${dirname.toLowerCase()}/image-${
    image?.name + uuidv4() + userId
  }`;
  const newImageRef = ref(storage, filePath);

  try {
    await uploadBytesResumable(newImageRef, image);
    const url = await getDownloadURL(newImageRef);
    return [true, url];
  } catch (err: any) {
    return [false, String(new Error(err.message))];
  }
};
