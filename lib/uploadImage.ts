import { ID, storage } from "@/appwrite"

const uploadImage = async (file: File) => {
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "6502a5a4b9d874db3668",
        ID.unique(),
        file
    );

    return fileUploaded;
}

export default uploadImage;

