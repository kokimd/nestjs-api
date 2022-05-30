import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Bookmark } from './bookmark.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ default: 5 })
  canStock: number;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks: Bookmark[];
}
