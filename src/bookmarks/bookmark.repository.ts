import { Bookmark } from 'src/entities/bookmark.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';

@EntityRepository(Bookmark)
export class BookmarkRepository extends Repository<Bookmark> {
  async createUser(createBookmarkDto: CreateBookmarkDto) {
    // const bookmark = this.create({
    //   ...createBookmarkDto,
    //   //   userId: 'aaaa',
    //   createdAt: new Date().toISOString,
    //   updatedAt: new Date().toISOString,
    // });

    // await this.save(bookmark);

    return 'bookmark';
  }
}
