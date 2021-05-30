import {CREATEHEART, FETCH_ALLHEART, UPDATEHEART, DELETEHEART} from '../constants/actionTypes';
export default (heartposts = [], action) =>{
    switch (action.type){
        case FETCH_ALLHEART:
            return action.payload;
        case CREATEHEART:
            return [... heartposts, action.payload];  
        case UPDATEHEART:
            return heartposts.map((heartpost) => heartpost._id === action.payload._id ? action.payload : heartpost);
        case DELETEHEART:
            return heartposts.filter((heartpost) => heartpost._id !== action.payload);
        default:
            return heartposts;      
    }
}