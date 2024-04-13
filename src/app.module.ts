import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TaskslistsModule } from './taskslists/taskslists.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, TaskslistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
