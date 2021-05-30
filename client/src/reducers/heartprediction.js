import {HEARTPREDICTION} from '../constants/actionTypes';
export default (heartprediction = [], action) =>{
    switch (action.type){
        case HEARTPREDICTION:
            return [action.payload]
        default:
            return heartprediction;      
    }
}