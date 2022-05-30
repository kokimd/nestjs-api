import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';

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
  categories: number[];

  @IsNumber()
  comprehension: number;

  @IsString()
  memo: string;
}
