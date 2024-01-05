import { FectData } from "./fecthService.js";

export async  function Isauth(){
    let gqlBody = {
    query: `{
    user{
        id
        login
        }
    }`
    }
    let config={
        method:"POST",
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("user_token")}`
        },
        body: JSON.stringify(gqlBody),
    }
    return  FectData("/api/graphql-engine/v1/graphql",config).then((response)=>{
        if (response?.response?.data) {
            return true
        }
        return false
    }).catch((err)=>{
        return false
    })

}