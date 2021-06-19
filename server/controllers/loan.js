import mongoose from 'mongoose';
import LoanMessages from '../models/loanMessages.js';


export const getLoans = async (req, res) =>{
    try{
        const PAGE_SIZE = 4;
        const page = parseInt(req.query.page || "0");
        const total = await LoanMessages.countDocuments({});
        const loanMessages = await LoanMessages.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);
        console.log("Get Loan Called")
        res.status(200).json({totalPages: Math.ceil(total / PAGE_SIZE), loanMessages});
    } catch (error){
        res.status(404).json({message: error.message})
    }
}



export const createLoan = async (req, res) =>{
    const loan = req.body;
    const newLoan = new LoanMessages({...loan.data, creator: req.userId, createdAt: new Date().toISOString()});
    console.log(loan.data)
    try{
        await newLoan.save();
        res.status(201).json(newLoan);
    } catch (error){
        res.status(409).json({message: error.message})
    }
}


export const updateLoan = async (req, res) => {
    const {id} = req.params;
    const {gender, married, dependents, education, selfEmployed, aIncome, coAIncome, loanAmt, loanAmtTerm, creditHistory, propertyArea, name, prediction, probability} = req.body;
    const creator = req.userId;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    const updatedLoan = {gender, married, dependents, education, selfEmployed, aIncome, coAIncome, loanAmt, loanAmtTerm, creditHistory, propertyArea, name, prediction, probability, creator, _id: id} 
    console.log(updatedLoan);
    await LoanMessages.findByIdAndUpdate(id, updatedLoan, {new: true});
    res.json(updatedLoan);
    
}
    
    
export const deleteLoan = async (req, res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    await LoanMessages.findByIdAndRemove(id);
    const PAGE_SIZE = 4;
    const page = parseInt(req.query.page || "0");
    const total = await LoanMessages.countDocuments({});
    res.json({totalPages: Math.ceil(total / PAGE_SIZE), message: 'Post deleted successfully'});
}
