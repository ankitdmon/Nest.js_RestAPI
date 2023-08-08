import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

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
    book,
  ): Promise<Book> {
    return this.bookService.createBook(book);
  }
}
