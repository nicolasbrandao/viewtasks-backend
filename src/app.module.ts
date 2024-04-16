import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TaskslistsModule } from './tasks-lists/tasks-lists.module';
import { TasksModule } from './tasks/tasks.module';
import { LoggerMiddleware } from 'middlewares/logger.middleware';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    TaskslistsModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
