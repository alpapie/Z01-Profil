import { FectData } from "./fecthService.js";

export async function Requestdata(req){
    let gqlBody = {
        query: req
    }
    let config={
        method:"POST",
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("user_token")}`
        },
        body: JSON.stringify(gqlBody),
    }
    return  FectData("/api/graphql-engine/v1/graphql",config).then(async (response)=>{
        if (response?.response?.data) {
            return  {response:response?.response?.data,status:true};
        }
        return  {response:null,status:false};
    }).catch((err)=>{
        console.log(err);
        return  {response:null,status:false};
    })
}