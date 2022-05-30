import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookmark } from './bookmark.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Bookmark, (bookmark) => bookmark.categories, {
    onDelete: 'CASCADE',
  })
  bookmarks: Bookmark[];
}