import { IsNotEmpty, IsBoolean } from 'class-validator';

export class ChangeTodoDto {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly done: boolean;
}
