import { FectData } from "../../service/fecthService.js"
import { Logout } from "../../service/logout.js"

const Menu=[
    {
        name:"Home",
        icon: "./assets/icon/home.svg"
    },
    {
        name:"Projects",
        icon: "./assets/icon/project.svg"
    },
    {
        name:"Piscine",
        icon: "./assets/icon/piscine.svg"
    },
    {
        name:"Audits",
        icon: "./assets/icon/audit.svg"
    },
    {
        name:"Account",
        icon: "./assets/icon/account.svg"
    },
    {
        name:"Logout",
        icon: "./assets/icon/logout.svg"
    },
]
export  class AsideHome  extends HTMLElement{
    constructor(userInfo){
        super()
        this.userInfo=userInfo
    }
    connectedCallback(){
        
        this.classList.add("aside")
        this.Template(this.userInfo)
        this.querySelector("#user-logout").addEventListener("click",()=>Logout())
    }

    Template(){

        let content=`
      <div class="profil-user">
        <img
          src="./assets/icon/_709c9c20-c5dc-4834-92fc-fd1de757e207.jpeg"
          alt=""
        />
        <div class="user">
          <p class="user-name">alpapie</p>
          <span class="description"> web developeur </span>
        </div>
      </div>
      <div class="user-navigation">
        <ul>
        ${
            this.lilist=[],
            Menu.forEach((elem)=>{
                this.lilist.push(`
                <li id="user-${elem.name.toLowerCase()}">
                   <img src=${elem.icon}> ${elem.name}
                </li>`)
            }),
            this.lilist.join("")
        }
        </ul>
      </div>
        `
        this.innerHTML=content
    }
}