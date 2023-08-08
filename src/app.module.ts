import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BookModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // MongooseModule.forRoot(process.env.DB_URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
