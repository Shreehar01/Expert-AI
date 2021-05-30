import { createStore } from 'redux';
import * as api from '../api';
import * as api2 from '../api/index2.js'
import {CREATEHEART, FETCH_ALLHEART, UPDATEHEART, DELETEHEART, HEARTPREDICTION, GET_TOTALPAGES} from '../constants/actionTypes';


// Action Creators
export const getHeartPosts = (pageNumber) => async(dispatch) => {
    try{
        const {data} = await api.fetchHeartPosts(pageNumber);
        dispatch(getTotalPages(data.totalPages))
        dispatch({type: FETCH_ALLHEART, payload: data.heartMessages });
    } catch (error){
        console.log(error.message);
    }
}


export const createHeartPost = (heartpost) => async(dispatch) => {
    try{
        const {data} = await api.createHeartPost(heartpost);
        dispatch({type: CREATEHEART, payload: data});
    } catch (error){
        console.log(error.message);
    }
}


export const updateHeartPost = (id, heartpost) => async(dispatch) => {
    try{
        const {data} = await api.updateHeartPost(id, heartpost);
        dispatch({type: UPDATEHEART, payload: data});      
        //console.log("UpdateHeart", id)
        console.log("UpdateHeart",heartpost )
    } catch (error){
        console.log(error.message);
    }
}


export const deleteHeartPost = (id) => async(dispatch) => {
    try{
        const data = await api.deleteHeartPost(id);
        dispatch(getTotalPages(data.data.totalPages));
        dispatch({type: DELETEHEART, payload: id});
    } catch(error){
        console.log(error.message);
    }
}


export const makeHeartPrediction = (heartPost)  => async(dispatch) =>{
    try{
        const {data} = await api2.heartPrediction(heartPost);
        if ('_id' in data){
            const id = data._id
            delete data._id
            dispatch(updateHeartPost(id, data))    
        }
        else{
            dispatch(createHeartPost({data}))
        }
        dispatch({type :  HEARTPREDICTION, payload : data});
                
    } catch(error){
        console.log(error.message);
    }
}


export const getTotalPages = (totalPages) => async(dispatch) => {
    try{
        dispatch({type: GET_TOTALPAGES, payload: totalPages });
    } catch (error){
        console.log(error.message);
    }
}