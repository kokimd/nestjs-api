import { Module } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { BookmarksController } from './bookmarks.controller';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkRepository } from './bookmark.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([BookmarkRepository]),
    AuthModule,
  ],
  controllers: [BookmarksController],
  providers: [BookmarksService],
})
export class BookmarksModule {}
