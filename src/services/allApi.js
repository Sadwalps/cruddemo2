import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

export const addDetailsAPI = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/add`, reqBody)
}

//get details api
export const getDetailsAPI = async () => {
    return await commonAPI('GET', `${serverURL}/getdetails`)
}

//delete details api
export const deletedetailsAPI = async (id)=>{
    return await commonAPI('DELETE', `${serverURL}/deletedetails/${id}`)
}

