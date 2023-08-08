import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
    ADVENTURE= 'Adventure',
    CLASSICS= 'Classics',
    CRIME= 'Crime',
    FANTACY= 'Fantacy'
}

@Schema({
    timestamps: true,
    versionKey: false,
})

export class Book {
    @Prop()
    title: string;

    @Prop()
    description: string

    @Prop()
    price: Number

    @Prop()
    author: string

    @Prop()
    category: Category
}

export const BookSchema = SchemaFactory.createForClass(Book);