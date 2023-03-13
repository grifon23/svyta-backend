import { ChangeTodoDto } from './typing/dto/change-todo.dto';
import { CreateTodoDto } from './typing/dto/create-todo.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './models/todo.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todoModel: typeof Todo) {}

  async getAll(): Promise<Todo[]> {
    return await this.todoModel.findAll();
  }

  async getOne(id: string): Promise<Todo> {
    return await this.todoModel.findOne({
      where: { id },
    });
  }

  async createTodo(createTodo: CreateTodoDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createTodo.title;
    todo.done = createTodo.done;
    return todo.save();
  }

  async apdateTodo(
    id: string,
    updateTodo: ChangeTodoDto,
  ): Promise<[affectedCount: number, affectedRows: Todo[]]> {
    return await this.todoModel.update(
      { ...updateTodo },

      { where: { id }, returning: true },
    );
  }

  async remove(id: string): Promise<void> {
    const todo = await this.getOne(id);
    return await todo.destroy();
  }
}
