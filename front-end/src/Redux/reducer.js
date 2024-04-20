import * as types from "./actionType";


const reducer=(state={}, action)=>{
    const {type, payload}=action;
    switch(type){
        case types.getRequest :{
            return payload
        }
        case types.postRequest :{
            return {...state, payload}
        }
        
        default :{
            return state;
        }
    }
}

export default reducer