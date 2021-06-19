import mongoose from 'mongoose';
import CreditMessages from '../models/creditMessages.js';


export const getCredits = async (req, res) =>{
    try{
        const PAGE_SIZE = 4;
        const page = parseInt(req.query.page || "0");
        const total = await CreditMessages.countDocuments({});
        const creditMessages = await CreditMessages.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);
        console.log("Get Credit Called")
        res.status(200).json({totalPages: Math.ceil(total / PAGE_SIZE), creditMessages});
    } catch (error){
        res.status(404).json({message: error.message})
    }
}



export const createCredit = async (req, res) =>{
    const credit = req.body;
    const newCredit = new CreditMessages({...credit.data, creator: req.userId, createdAt: new Date().toISOString()});
    console.log(credit.data)
    try{
        await newCredit.save();
        res.status(201).json(newCredit);
    } catch (error){
        res.status(409).json({message: error.message})
    }
}


export const updateCredit = async (req, res) => {
    const {id} = req.params;
    const {gender, car, realty, children, income, incomeType, educationType, housingType, employed, familyNumber, name, prediction, probability} = req.body;
    const creator = req.userId;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    const updatedCredit = {gender, car, realty, children, income, incomeType, educationType, familyStatus, housingType, employed, familyNumber, name, prediction, probability, creator, _id: id} 
    console.log(updatedCredit);
    await CreditMessages.findByIdAndUpdate(id, updatedCredit, {new: true});
    res.json(updatedCredit);
    
}
    
    
export const deleteCredit = async (req, res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    await CreditMessages.findByIdAndRemove(id);
    const PAGE_SIZE = 4;
    const page = parseInt(req.query.page || "0");
    const total = await CreditMessages.countDocuments({});
    res.json({totalPages: Math.ceil(total / PAGE_SIZE), message: 'Post deleted successfully'});
}
