import mongoose from 'mongoose';

const heartSchema = mongoose.Schema({
    age: String,
    angina: String,
    cholestrol: String,
    ecg: String,
    maxheart: String,
    name: String,
    prediction : String,
    probability: String,
    restingBloodPressure: String,
    restingBloodSugar: String,
    sex: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const HeartMessages = mongoose.model('HeartMessage', heartSchema);

export default HeartMessages;