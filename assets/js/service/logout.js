import { LoginUser } from "../components/login/loginComponent.js"

export function Logout(){
    localStorage.removeItem("user_token")
    let bodyy=document.querySelector("body")
    bodyy.innerHTML=""
    bodyy.append(new LoginUser())
}