import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel : mongoose.Model<Book>,
    ){}

    async findAll(): Promise<Book[]>{
        return this.bookModel.find();
    }

    async createBook(book: Book) : Promise<Book> {
        const result = await this.bookModel.create(book);
        return result;
    }

    async getBookById(id:string) : Promise<Book> {
        const result= await this.bookModel.findById(id);
        if(!result){
            throw new NotFoundException('No Book Found!!')
        }
        return result;
    }
}
