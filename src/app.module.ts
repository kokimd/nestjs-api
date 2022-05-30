import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, BookmarksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
