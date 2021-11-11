import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    tittle: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model('Task', taskSchema);  