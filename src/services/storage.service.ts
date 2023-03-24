import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
    const responseUpload = await StorageModel.create({ fileName, idUser, path });
    return responseUpload;
}
export { registerUpload };