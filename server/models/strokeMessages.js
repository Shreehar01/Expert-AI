import mongoose from 'mongoose';

const strokeSchema = mongoose.Schema({
    gender: String,
    age: String,
    hypertension: String,
    heartDisease: String,
    workType: String,
    glucose: String,
    bmi: String,
    name: String,
    prediction : String,
    probability: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// gender, age, hypertension, heartDisease, workType, glucose, bmi, name, prediction, probability, creator, createdAt

const StrokeMessages = mongoose.model('StrokeMessage', strokeSchema);

export default StrokeMessages;