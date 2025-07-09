import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

export const addDetailsAPI = async (reqBody)=>{
    return await commonAPI('POST',`${serverURL}/add`, reqBody)
}

