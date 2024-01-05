import { RemoveComponent } from "../../helpers/helper.js";
import { AsideHome } from "./asideComponent.js";
import { MainUser } from "./mainComponent.js";

export  class HomeUser  extends HTMLElement{
    constructor(){
        super()
        document.title="Home page";
        RemoveComponent("login-user")
    }
    
    async connectedCallback(){
       this.Template()
       this.style.display="flex"
    }

    Template(){
       document.querySelector("link").href="./assets/css/profil.css" 
       this.appendChild(new AsideHome())
       this.appendChild(new MainUser())
    }
}