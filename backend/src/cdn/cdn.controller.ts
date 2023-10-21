import { Controller, Get, HttpException, HttpStatus, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CdnService } from './cdn.service';

@Controller('cdn')
export class CdnController {
    constructor(private service: CdnService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@Req() req: Request & any, @UploadedFile() file: Express.Multer.File) {
        if (file.mimetype !== "image/jpeg") throw new HttpException({ message: "Please, send only JPEG files." }, HttpStatus.BAD_REQUEST);
        return this.service.createFile(req.user.data, file);
    }
    @Get(':fileName')
    async getFile(@Param() {fileName}: {fileName: string}, @Res() res) {
        const result = await this.service.getFile(fileName);
        res.writeHead(200, {"Content-Type": "image/jpeg"});
        res.end(result);
        return result;
    }

}
