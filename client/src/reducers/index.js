import {combineReducers} from 'redux';
import auth from './auth';
import heartposts from './heartposts'
import heartprediction from './heartprediction';
import totalPages from './totalpages';

export default combineReducers({ auth, heartposts, heartprediction, totalPages});