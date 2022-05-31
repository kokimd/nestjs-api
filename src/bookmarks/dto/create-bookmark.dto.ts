import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { Category } from 'src/entities/category.entity';

export class CreateBookmarkDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  title: string;

  @IsNotEmpty()
  @IsBoolean()
  isRead: boolean;

  @IsNotEmpty()
  categories: Category[];

  @IsNumber()
  comprehension: number;

  @IsString()
  memo: string;
}
