import { ChangeTodoDto } from './typing/dto/change-todo.dto';
import { CreateTodoDto } from './typing/dto/create-todo.dto';
import { Todo } from './models/todo.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAll();
  }
  @Get(':id')
  async gotOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.getOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  async createTodo(@Body() newTodo: CreateTodoDto): Promise<Todo> {
    return await this.createTodo(newTodo);
  }

  @Patch(':id')
  async changeTodo(
    @Param('id') id: string,
    @Body() updateTodo: ChangeTodoDto,
  ): Promise<Todo> {
    return this.changeTodo(id, updateTodo);
  }

  @Delete(':id')
  async removeTodo(@Param('id') id: string): Promise<void> {
    return this.removeTodo(id);
  }
}
