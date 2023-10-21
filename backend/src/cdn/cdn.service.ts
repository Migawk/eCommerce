import { Injectable } from '@nestjs/common';
import { access, mkdir, readFile, readFileSync, writeFile } from 'fs';
import { join } from 'path';
import { IAuthor } from 'types/user';

@Injectable()
export class CdnService {
    async createFile(author: IAuthor, file: Express.Multer.File) {
        if(!author.id) return;
        access(join(__dirname, "..", "..", "..", "client"), (e) => {
            if (e) {
                mkdir(join(__dirname, "..", "..", "..", "client"), { recursive: true }, console.log);
            }
        });
        const name = author.name + file.originalname;
        let res;
        writeFile(join(__dirname, "..", "..", "..", "client", name), file.buffer, (err) => {
            if (err) return console.error(err);
        });
        return {message: "success", fileName: name};
    }
    async getFile(fileName: string) {
        const res = await readFileSync(join(__dirname, "..", "..", "..", "client", fileName));
        return res;
    }
}
