import mongoose from 'mongoose';

const loanSchema = mongoose.Schema({
    gender: String,
    married: String,
    dependents: String,
    education: String,
    selfEmployed: String,
    aIncome: String,
    coAIncome: String,
    loanAmt: String,
    loanAmtTerm: String,
    creditHistory: String,
    propertyArea: String,
    name: String,
    prediction : String,
    probability: String,
    creator: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// gender, married, dependents, education, selfEmployed, aIncome, coAIncome, loanAmt, loanAmtTerm, creditHistory, propertyArea, name, prediction, probability

const LoanMessages = mongoose.model('LoanMessage', loanSchema);

export default LoanMessages;