import { Controller, Get, Post, UseGuards, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { z } from "zod";

import { CategoryGuard } from './category.guard';
import { CategoryService } from "./category.service";

@Controller('category')
export class CategoryController {

  constructor(private service: CategoryService) {}
  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.service.getCategory(id);
  }
  @Post()
  @UseGuards(CategoryGuard) // Only for admins
  createCategory(@Body() body) {
    const check = z.object({
      name: z.string()
    }).safeParse(body);

    if(!check.success) throw new HttpException({message: "name field at least"}, HttpStatus.BAD_REQUEST)
    return this.service.createCategory(body);
  }
}
