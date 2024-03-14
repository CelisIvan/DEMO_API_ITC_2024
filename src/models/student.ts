import {Schema, model} from 'mongoose';

interface Student {
    id? : String,
    name: String,
    last_name: String,
    favorite_color: String,
    birth_date: Date
}

const StudentSchema = new Schema<Student>({
    id: String,
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    favorite_color: {type: String, required: true},
    birth_date: {type: Date, required: true},
})

const Student = model<Student>('Student', StudentSchema);

export default Student