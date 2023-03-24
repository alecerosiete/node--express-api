import { Auth } from "./auth.interface";

export interface User extends Auth{
    name: string;
    active: boolean;
    description: string;
}