import mongoose from 'mongoose';

const diabetesSchema = mongoose.Schema({
    polyuria: String,
    polydipsia: String,
    age: String,
    gender: String,
    weightloss: String,
    irritability: String,
    healing: String,
    alopecia: String,
    itching: String,
    name: String,
    prediction : String,
    probability: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// polyuria, polydipsia, age, gender, paresis, weightloss, irritability, healing, alopecia, itching, name, prediction, probability

const DiabetesMessages = mongoose.model('DiabetesMessage', diabetesSchema);

export default DiabetesMessages;