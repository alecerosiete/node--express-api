import { Request } from "express";
import multer, { diskStorage } from "multer";
import fs from 'fs'

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
    destination(req: Request, file: Express.Multer.File, cb: any) {
        fs.mkdirSync(PATH_STORAGE, { recursive: true })
        cb(null, PATH_STORAGE);
    },
    filename(req: Request, file: Express.Multer.File, cb: any) {
        const ext = file.originalname.split(".").pop();
        const fileNameRandom = `image-${Date.now()}.${ext}`;
        cb(null, fileNameRandom);
    },
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;