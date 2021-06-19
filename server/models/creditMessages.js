import mongoose from 'mongoose';

const creditSchema = mongoose.Schema({
    gender: String,
    car: String,
    realty: String,
    children: String,
    income: String,
    incomeType: String,
    educationType: String,
    housingType: String,
    employed: String,
    familyNumber: String,
    name: String,
    prediction : String,
    probability: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// gender, car, realty, children, income, incomeType, educationType, familyStatus, housingType, employed, familyNumber, name, prediction, probability, 

const CreditMessages = mongoose.model('CreditMessage', creditSchema);

export default CreditMessages;