import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { BookmarkRepository } from './bookmark.repository';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(private readonly bookmarkRepository: BookmarkRepository) {}
  create(createBookmarkDto: CreateBookmarkDto, user: User) {
    return this.bookmarkRepository.createBookmark(createBookmarkDto, user);
  }

  findAll() {
    return this.bookmarkRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} bookmark`;
  // }

  // update(id: number, updateBookmarkDto: UpdateBookmarkDto) {
  //   return `This action updates a #${id} bookmark`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} bookmark`;
  // }
}
