import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo } from './todo/todo.model'
import { TodoService } from './todo/todo.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'todo',
      username: 'postgres',
      password: '123456',
      entities: [Todo],
      synchronize: true,
    }),
    TodoModule
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
