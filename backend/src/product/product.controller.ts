import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Query, Post, Put, Req, Res } from '@nestjs/common';
import { IProduct, ProductService } from './product.service';
import { Request, Response } from 'express';

@Controller('product')
export class ProductController {
    constructor(private service: ProductService) { }
    @Post()
    async createProduct(@Body() body: IProduct | IProduct[], @Req() req: Request & any) {
        if (Array.isArray(body)) {
            const res = await this.service.createManyProduct(req.user.data, body);
            if ("message" in res) throw new HttpException({ message: "Wrong Data", data: res }, HttpStatus.BAD_REQUEST);
            return res;
        } else {
            const res: IProduct | { message: string } = await this.service.createProduct(req.user.data, body);
            if ("message" in res) throw new HttpException({ message: "Wrong Data", data: res }, HttpStatus.BAD_REQUEST);
            return res;
        }
    }
    @Get(':id')
    async getProduct(@Param() { id }: { id: string }) {
        const res: any | { message: string } = await this.service.getProduct(id);
        if (res.message) throw new HttpException({ message: "Not Found" }, HttpStatus.NOT_FOUND);
        return res;
    }
    @Get(':id/reviews')
    async getReviews(@Param('id') id, @Query() query) {
        const offset = query.offset || 0;
        if(!id) throw new HttpException("There isn't id in param", HttpStatus.BAD_REQUEST);
        if(isNaN(Number(offset))) throw new HttpException("Offset datatype should be 'Integer'.", HttpStatus.BAD_REQUEST);
        return this.service.getReviews(id, Number(offset));
    }
    @Put(':id')
    async updateProduct(@Param() { id }: { id: string }, @Body() product, @Req() req: Request & any) {
        const res = await this.service.updateProduct(req.user.data, id, product);
        return res;
    }
    @Delete(':id')
    async deleteProduct(@Param() { id }: { id: string }, @Req() req: Request & any, @Res() res: Response) {
        const result: any | { message: string } = await this.service.deleteProduct(req.user.data, id);
        if (result.message) {
            switch (result.message) {
                case "There ain't user!":
                    throw new HttpException({ message: "You must be logged in!" }, HttpStatus.FORBIDDEN);
                case "It's not your!":
                    throw new HttpException({ message: result.message }, HttpStatus.FORBIDDEN);
                case "We couldn't find product!":
                    throw new HttpException({ message: result.message }, HttpStatus.NOT_FOUND);
                default:
                    throw new HttpException({ message: "Something with server" }, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        };
        return res.status(204).end();
    }
}
