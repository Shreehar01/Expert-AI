import mongoose from 'mongoose';
import HeartMessages from '../models/heartMessages.js';


export const getHearts = async (req, res) =>{
    try{
        const PAGE_SIZE = 4;
        const page = parseInt(req.query.page || "0");
        const total = await HeartMessages.countDocuments({});
        console.log("Getheart is being called.")
        const heartMessages = await HeartMessages.find().sort({ createdAt: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page);
        res.status(200).json({totalPages: Math.ceil(total / PAGE_SIZE), heartMessages});
    } catch (error){
        res.status(404).json({message: error.message})
    }
}



export const createHeart = async (req, res) =>{
    const heart = req.body;
    const newHeart = new HeartMessages({...heart.data, creator: req.userId, createdAt: new Date().toISOString()});
    console.log(heart.data)
    try{
        await newHeart.save();
        res.status(201).json(newHeart);
    } catch (error){
        res.status(409).json({message: error.message})
    }
}


export const updateHeart = async (req, res) => {
    const {id} = req.params;
    const {age, sex, restingBloodPressure, cholestrol, restingBloodSugar, ecg,name, maxheart, angina, prediction, probability} = req.body;
    const creator = req.userId;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    const updatedHeart = {age, sex, restingBloodPressure, cholestrol, restingBloodSugar, ecg, name,  maxheart, angina, creator, prediction, probability, _id: id} 
    console.log(updatedHeart);
    await HeartMessages.findByIdAndUpdate(id, updatedHeart, {new: true});
    res.json(updatedHeart);
    
}
    
    
export const deleteHeart = async (req, res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send('No post with that id');
    await HeartMessages.findByIdAndRemove(id);
    const PAGE_SIZE = 4;
    const page = parseInt(req.query.page || "0");
    const total = await HeartMessages.countDocuments({});
    res.json({totalPages: Math.ceil(total / PAGE_SIZE), message: 'Post deleted successfully'});
}
