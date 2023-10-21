import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private service: UserService) {}
    @Get(':id')
    getUser(@Param("id") id) {
        return this.service.getUser(id);
    }
}
