import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Category } from '../entities/category.entity';
import { categories } from '../bookmarks/categories';

export default class CreateCategory implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Category)
      .values([...categories])
      .execute();
  }
}
