import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './schemas/book.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { async } from 'rxjs';

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

        const isValidId = mongoose.isValidObjectId(id);
        if(!isValidId){
            throw new BadRequestException('Please enter correct Id!!');
        }

        const result= await this.bookModel.findById(id);
        if(!result){
            throw new NotFoundException('No Book Found!!')
        }
        return result;
    }

    async updateBookById(id: string, updatedBook: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, updatedBook, {
          new: true,
          runValidators: true,
        });
      }  
      
      async deleteBookById(id:string):Promise<Book>{
        return await this.bookModel.findByIdAndDelete(id);
      }
}
