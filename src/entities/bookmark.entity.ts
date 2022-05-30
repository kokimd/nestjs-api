import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { User } from './user.entity';

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  title: number;

  @Column()
  isRead: boolean;

  @Column()
  comprehension: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.bookmarks)
  user: User;

  @Column()
  userId: string;

  @ManyToMany(() => Category, (category) => category.bookmarks, {
    onDelete: 'CASCADE',
  })
  @JoinTable()
  categories: Category[];
}
