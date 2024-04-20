import * as types from "./actionType";

export const handleGetRequestFromAction=(payload)=>{
    return {type:types.getRequest, payload}
}

export const handlePostRequestFromAction=(payload)=>{
    return {type:types.postRequest, payload}
}

export const handlePutRequestFromAction=(payload)=>{
    return {type:types.putRequest, payload}
}

export const handleDeleteRequestFromAction=()=>{
    return {type:types.deleteRequest}
}
