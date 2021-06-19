import mongoose from 'mongoose';
import InsuranceMessages from '../models/insuranceMessages.js';


export const getInsurance = async (req, res) =>{
    try{
        const PAGE_SIZE = 4;
        const page = parseInt(req.query.page || "0");
        const total = await InsuranceMessages.countDocuments({});
        const insuranceMessages = await InsuranceMessages.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);
        console.log("Get Insurance Called")
        res.status(200).json({totalPages: Math.ceil(total / PAGE_SIZE), insuranceMessages});
    } catch (error){
        res.status(404).json({message: error.message})
    }
}   



export const createInsurance = async (req, res) =>{
    const insurance = req.body;
    const newInsurance = new InsuranceMessages({...insurance.data, creator: req.userId, createdAt: new Date().toISOString()});
    console.log(insurance.data)
    try{
        await newInsurance.save();
        res.status(201).json(newInsurance);
    } catch (error){
        res.status(409).json({message: error.message})
    }
}


export const updateInsurance = async (req, res) => {
    const {id} = req.params;
    const {age, sex, bmi, children, smoker, region, name, prediction, value} = req.body;
    const creator = req.userId;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    const updatedInsurance = {age, sex, bmi, children, smoker, region, name, prediction, value, creator, _id: id} 
    console.log(updatedInsurance);
    await InsuranceMessages.findByIdAndUpdate(id, updatedInsurance, {new: true});
    res.json(updatedInsurance);
    
}
    
    
export const deleteInsurance = async (req, res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    await InsuranceMessages.findByIdAndRemove(id);
    const PAGE_SIZE = 4;
    const page = parseInt(req.query.page || "0");
    const total = await InsuranceMessages.countDocuments({});
    res.json({totalPages: Math.ceil(total / PAGE_SIZE), message: 'Post deleted successfully'});
}
