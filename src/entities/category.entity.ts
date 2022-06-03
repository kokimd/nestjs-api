import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookmark } from './bookmark.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @ManyToMany(() => Bookmark, (bookmark) => bookmark.categories)
  bookmarks: Bookmark[];
}
