import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from 'src/categories/category-controller';
import { Movie } from "./movie-entity";
import { Category } from "src/categories/category-entity";
import { CategoryService } from "src/categories/category-service";
@Module({
    imports: [TypeOrmModule.forFeature([Category, Movie])],
    providers: [CategoryService],
    controllers: [CategoryController],
})

export class MovieModule {}