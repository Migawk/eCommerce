import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CdnService } from './cdn.service';
import { CdnController } from './cdn.controller';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';

@Module({
  providers: [CdnService],
  controllers: [CdnController]
})
export class CdnModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({path: "cdn/upload", method: RequestMethod.POST});
  }
}
