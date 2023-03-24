import { hash, compare } from "bcryptjs"


const encrypt = async (passwordTextPlane:string) => {
    const passwordHash = await hash(passwordTextPlane, 8);
    return passwordHash;
}

const verified = async (passwordTextPlane:string, passwordHash:string) => {
    const isCorrect = await compare(passwordTextPlane, passwordHash);
    return isCorrect;
}

export { encrypt, verified }