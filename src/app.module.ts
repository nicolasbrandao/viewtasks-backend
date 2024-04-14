import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TaskslistsModule } from './taskslists/taskslists.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthMiddleware } from 'middlewares/auth.middleware';

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
    consumer.apply(AuthMiddleware).forRoutes('taskslists');
  }
}
