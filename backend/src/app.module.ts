import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CdnModule } from './cdn/cdn.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  imports: [AuthModule, ProductModule, CdnModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, "..", "..", "client")
  })],
  controllers: [AppController, UserController, AuthController, ProductController, CategoryController],
  providers: [AppService, PrismaService, UserService, AuthService, ProductService, CategoryService],
})
export class AppModule {}
