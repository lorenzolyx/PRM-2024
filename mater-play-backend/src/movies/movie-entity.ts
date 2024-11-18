import { Category } from 'src/categories/category-entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('movie')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ name: 'age-rating', length: 2, nullable: false })
  ageRating: string;

  @Column({ nullable: false })
  poster: string;

  @ManyToMany(() => Category, { eager: true })
  @JoinTable({
    name: 'movie_category',
  })
  categories: Category[];
}