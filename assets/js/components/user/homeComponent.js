import { RemoveComponent } from "../../helpers/helper.js";
import { Requestdata } from "../../service/requestService.js";
import { ErrorPage } from "../errorpage.js";
import { AsideHome } from "./asideComponent.js";
import { MainUser } from "./mainComponent.js";

export  class HomeUser  extends HTMLElement{
    constructor(){
        super()
        document.title="Home page";
        RemoveComponent("login-user")
    }
    
    async connectedCallback(){
        let req=`
            {
                user {
                    id
                    login
                    email
                    campus
                    lastName
                    firstName
                    auditRatio
                    totalUp
                    totalDown
                    skill:transactions (
                    order_by: [{ type: desc }, { amount: desc }]
                    distinct_on: [type]
                    where: { 
                      type: { _like: "skill_%" }
                    },
                  ) 
                  { 
                    type
                    amount
                  }
                  audited:audits(
                    where:{
                      grade:{_is_null:false},
                    }
                    ){
                    grade
                  }
                }
                allxp: transaction (
                order_by: [{ createdAt: desc }, { amount: desc }]
                where: { 
                  event: { object: { type: { _eq:"module" } } } 
                  type: { _eq: "xp" }
                }) 
                { 
                  type
                  amount
                  path
                  createdAt
                  object{
                    name
                  }
                }
                level: transaction(
                  order_by:{amount:desc}
                    limit:1
                    where: {
                      type: { _eq: "level" },
                      _or:{event:{object:{name:{_eq:"Div 01"}}}}
                    }
                    ) {
                    amount 
                }
            }
        `
        let userData=await Requestdata(req)
        console.log(userData);
        if (userData.status) {
            this.Template(userData.response)
            this.style.display="flex"
            return
        }
        document.querySelector("body").innerHTML=""
        document.querySelector("body").append(new ErrorPage(500))
    }

    Template(res){
       document.querySelector("link").href="./assets/css/profil.css" 
       this.appendChild(new AsideHome(res.user[0]))
       this.appendChild(new MainUser(res))
    }
}