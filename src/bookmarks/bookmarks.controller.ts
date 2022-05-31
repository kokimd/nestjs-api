import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { GetUser } from 'src/users/decorator/get-user.decorator';
import { JwtAuthGuard } from 'src/users/guards/jwt-auth.guard';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createBookmarkDto: CreateBookmarkDto, @GetUser() user: User) {
    return this.bookmarksService.create(createBookmarkDto, user);
  }

  @Get()
  findAll() {
    return this.bookmarksService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.bookmarksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookmarkDto: UpdateBookmarkDto) {
  //   return this.bookmarksService.update(+id, updateBookmarkDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bookmarksService.remove(+id);
  // }
}
