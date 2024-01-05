import { LoadingPage } from "./components/loadingComponent.js";
import { LoginUser } from "./components/login/loginComponent.js";
import { AsideHome } from "./components/user/asideComponent.js";
import { HomeUser } from "./components/user/homeComponent.js";
import { MainUser } from "./components/user/mainComponent.js";
import { Isauth } from "./service/IsauthService.js";

customElements.define('login-user', LoginUser)
customElements.define('home-user', HomeUser)
customElements.define("aside-user", AsideHome)
customElements.define("main-user", MainUser)
customElements.define('loading-page',LoadingPage)

document.querySelector("body").innerHTML= "<loading-page></loading-page>"

const auth=await Isauth()
document.querySelector("body").innerHTML= ""
if ( !auth) {
    document.querySelector("body").innerHTML= "<login-user><login-user/>"
}else{
    document.querySelector("body").append(new HomeUser())
}