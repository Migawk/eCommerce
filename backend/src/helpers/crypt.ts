import {hashSync} from "bcrypt";
import { env } from "process";

export async function toHash(password: string) {
    return hashSync(password, env.SALT);
}