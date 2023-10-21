import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private service: AuthService) { }
    @Post('register')
    async createUser(@Body() { name, password }: { name: string, password: string }) {
        const res = await this.service.createUser(name, password);
        if(res.error) {
            if(res.data) throw new HttpException('Wrong Password', HttpStatus.FORBIDDEN);
            throw new HttpException('Name is already taken', HttpStatus.CONFLICT);
        } else {
            return res;
        }
    }
    @Post('login')
    async logIn(@Body() {name, password}: { name: string, password: string }) {
        const res = await this.service.logIn(name, password);
        if(res.error) {
            if(res.error === "Wrong password") throw new HttpException('Wrong Password', HttpStatus.FORBIDDEN);
            throw new HttpException({message: 'Problem in data', data: res.data}, HttpStatus.FORBIDDEN);
        } else {
            return res;
        }
    }
}
