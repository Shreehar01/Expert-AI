import mongoose from 'mongoose';

const insuranceSchema = mongoose.Schema({
    age: String,
    sex: String,
    bmi: String,
    children: String,
    smoker: String,
    region: String,
    name: String,
    prediction : String,
    value: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// age, sex, bmi, childre, smoker, region, name, prediction, probability, creator

const InsuranceMessages = mongoose.model('InsuranceMessage', insuranceSchema);

export default InsuranceMessages;