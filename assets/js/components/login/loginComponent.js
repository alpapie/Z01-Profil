import { Tojson } from "../../helpers/helper.js"
import { FectData } from "../../service/fecthService.js"

let Loading=`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>
`

export class LoginUser extends HTMLElement{
    constructor(){
        super()
        document.title="Login form"
    }
    
    connectedCallback(){
        this.Template()
        let pwdinput=document.querySelector("#password-input")
        pwdinput .addEventListener("click",()=>{
           let pwdd=document.querySelector("#mypasword")
            if (pwdd.type === "password") {
                pwdd.type = "text";
              } else {
                pwdd.type = "password";
              }
        })

        let LoginForm=document.querySelector("#login-form")
        LoginForm.addEventListener("submit",async (e)=>{
            e.preventDefault()
            let form= new FormData(LoginForm)
            let user=Tojson(form)
            let btnlogin=document.querySelector("#login-btn")

            btnlogin.innerHTML=Loading
            btnlogin.disabled = true
            let config = {
                method: "POST",
                headers: {
                    "Authorization": `Basic ${window.btoa(`${user.username}:${user.password}`)}`
                }
            }
            try {
                let response=await FectData("/api/auth/signin",config)
                if (response?.status) {
                    localStorage.setItem("user_token",response.response)
                    document.body.innerHTML= "<home-user></home-user>"
                    return 
                }
            } catch (error) {
                console.log(error);
            }
            
            document.querySelector("#error-message").innerHTML="User does not exist or password incorrect"
            btnlogin.innerHTML="Sign In"
            btnlogin.disabled = false
        })
    }
    Template(){
        let content=`
            <div class="l-form">
                <form id="login-form" class="form">
                    <h1 class="form__title">Sign In</h1>
                    <p id="error-message" ></p>
                    <div class="form__div">
                        <input type="text" class="form__input" name="username" placeholder="">
                        <label for="" class="form__label">Email or Username</label>
                    </div>

                    <div class="form__div">
                        <input type="password" id="mypasword" name="password" class="form__input" placeholder="">
                        <label for="" class="form__label">Password</label>
                        </div>
                        <input  id="password-input" type="checkbox" >Show Password
                    <button  id="login-btn" type="submit" class="form__button" >Sign In</button>
                </form>
            </div>
        `
        document.querySelector("link").href="./assets/css/styles.css"
        this.innerHTML=content
    }
}
