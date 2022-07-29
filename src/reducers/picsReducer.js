import _ from 'lodash';
import {
   FETCH_PICS
} from '../actions/types'



export default (state=[], action)=>{
    switch(action.type){

        case FETCH_PICS:
            return {...state, [action.payload.term]: action.payload}
    
     
     default:
         return state
    }
}