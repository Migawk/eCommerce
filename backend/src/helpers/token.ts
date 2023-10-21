import { sign, verify } from "jsonwebtoken";
import { env } from "process";
import z from "zod";

interface ITokens {
    id: string;
    name: string;
    password: string;
}

function parse(body: ITokens) {
    return z
        .object({
            name: z.string().min(3, "name is wrong"),
            password: z.string()
        })
        .safeParse(body);
}

export function generateToken(body: ITokens) {
    const isOk = parse(body);
    if(!isOk.success) return isOk;
    
    const exp = Date.now() + Math.round(1000 * 60 * 60 * 24 * 3); // 3 days

    return sign({data: body, exp}, env.JWT_HASH);

}
export function verifyToken(token: string) {
    return verify(token, env.JWT_HASH)
}