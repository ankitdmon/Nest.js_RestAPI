import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('getAllBooks')
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post('createBook')
  async createBook(
    @Body()
    book: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.createBook(book);
  }

  @Get('getBookById/:id')
  async getBookById(
    @Param('id')
    id: string,
  ): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Put('updateBookById/:id')
  async updateBookById(
    @Param('id')
    id:string,
    @Body()
    book:UpdateBookDto,
  ) :Promise<Book> {
    return this.bookService.updateBookById(id, book)
  }
}
