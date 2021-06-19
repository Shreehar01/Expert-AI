import mongoose from 'mongoose';
import StrokeMessages from '../models/strokeMessages.js';


export const getStrokes = async (req, res) =>{
    try{
        const PAGE_SIZE = 4;
        const page = parseInt(req.query.page || "0");
        const total = await StrokeMessages.countDocuments({});
        const strokeMessages = await StrokeMessages.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);
        console.log("Get Stroke Called")
        console.log(strokeMessages)
        res.status(200).json({totalPages: Math.ceil(total / PAGE_SIZE), strokeMessages});
    } catch (error){
        res.status(404).json({message: error.message})
    }
}


export const createStroke = async (req, res) =>{
    const stroke = req.body;
    const newStroke = new StrokeMessages({...stroke.data, creator: req.userId, createdAt: new Date().toISOString()});
    console.log(stroke.data)
    try{
        await newStroke.save();
        res.status(201).json(newStroke);
    } catch (error){
        res.status(409).json({message: error.message})
    }
}


export const updateStroke = async (req, res) => {
    const {id} = req.params;
    const {gender, age, hypertension, heartDisease, workType, glucose, bmi, name, prediction, probability} = req.body;
    const creator = req.userId;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    const updatedStroke = {gender, age, hypertension, heartDisease, workType, glucose, bmi, name, creator, prediction, probability, _id: id} 
    console.log(updatedStroke);
    await StrokeMessages.findByIdAndUpdate(id, updatedStroke, {new: true});
    res.json(updatedStroke);
    
}
    
    
export const deleteStroke = async (req, res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    await StrokeMessages.findByIdAndRemove(id);
    const PAGE_SIZE = 4;
    const page = parseInt(req.query.page || "0");
    const total = await StrokeMessages.countDocuments({});
    res.json({totalPages: Math.ceil(total / PAGE_SIZE), message: 'Post deleted successfully'});
}
