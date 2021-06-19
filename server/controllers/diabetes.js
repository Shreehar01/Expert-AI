import mongoose from 'mongoose';
import DiabetesMessages from '../models/diabetesMessages.js';


export const getDiabetes = async (req, res) =>{
    try{
        const PAGE_SIZE = 4;
        const page = parseInt(req.query.page || "0");
        const total = await DiabetesMessages.countDocuments({});
        const diabetesMessages = await DiabetesMessages.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);
        console.log("Get Diabetes Called")
        res.status(200).json({totalPages: Math.ceil(total / PAGE_SIZE), diabetesMessages});
    } catch (error){
        res.status(404).json({message: error.message})
    }
}



export const createDiabetes = async (req, res) =>{
    const diabetes = req.body;
    const newDiabetes = new DiabetesMessages({...diabetes.data, creator: req.userId, createdAt: new Date().toISOString()});
    console.log(diabetes.data)
    try{
        await newDiabetes.save();
        res.status(201).json(newDiabetes);
    } catch (error){
        res.status(409).json({message: error.message})
    }
}


export const updateDiabetes = async (req, res) => {
    const {id} = req.params;
    const {polyuria, polydipsia, age, gender, weightloss, irritability, healing, alopecia, itching, name, prediction, probability} = req.body;
    const creator = req.userId;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    const updatedDiabetes = {polyuria, polydipsia, age, gender, paresis, weightloss, irritability, healing, alopecia, itching, name, prediction, probability, creator, _id: id} 
    console.log(updatedDiabetes);
    await DiabetesMessages.findByIdAndUpdate(id, updatedDiabetes, {new: true});
    res.json(updatedDiabetes);
}
    
    
export const deleteDiabetes = async (req, res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    await DiabetesMessages.findByIdAndRemove(id);
    const PAGE_SIZE = 4;
    const page = parseInt(req.query.page || "0");
    const total = await DiabetesMessages.countDocuments({});
    res.json({totalPages: Math.ceil(total / PAGE_SIZE), message: 'Post deleted successfully'});
}
