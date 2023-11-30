import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';

@Module({})
export class ProductModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes({path: 'product', method: RequestMethod.POST})
        consumer
            .apply(AuthMiddleware)
            .forRoutes({path: 'product/*', method: RequestMethod.PUT})
        consumer
            .apply(AuthMiddleware)
            .forRoutes({path: 'product/*', method: RequestMethod.DELETE})
        consumer
            .apply(AuthMiddleware)
            .forRoutes({path: 'product/*/*', method: RequestMethod.POST})
    }
}
