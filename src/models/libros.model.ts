import mongoose, { Schema, Document } from 'mongoose';

export interface ILibrary extends Document {
    libro: string;
    autor: string;
}


const LibrarySchema: Schema = new Schema({
    libro:  {type: String},
    autor: {type: String}
});


export default mongoose.model<ILibrary>('Libro', LibrarySchema);