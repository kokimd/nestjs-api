import { Bookmark } from 'src/entities/bookmark.entity';
import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@EntityRepository(Bookmark)
export class BookmarkRepository extends Repository<Bookmark> {
  async createBookmark(
    createBookmarkDto: CreateBookmarkDto,
    user: User,
  ): Promise<Bookmark> {
    const { url, title, comprehension, isRead, categories, memo } =
      createBookmarkDto;

    const bookmark = this.create({
      url,
      title,
      isRead,
      comprehension,
      memo,
      categories: categories,
      user,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.save(bookmark);

    return bookmark;
  }
}
