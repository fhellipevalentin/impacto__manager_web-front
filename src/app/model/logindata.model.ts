import { User } from "./user.model";

export interface LoginData extends Partial<User> {
    email?: string | null;
    password?: string | null;
}