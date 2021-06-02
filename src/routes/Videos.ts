import {Schema, model} from 'mongoose';

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Video', VideoSchema);