import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.model';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) 
        private repository: Repository<Todo>
    ) { }

    async findAll() {
        return this.repository.find()
    }
}
