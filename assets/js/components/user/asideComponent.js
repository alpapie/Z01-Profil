import { Logout } from "../../service/logout.js"

const Menu=[
    {
        name:"Home",
        icon: "./assets/icon/home.svg"
    },
    {
        name:"Piscine",
        icon: "./assets/icon/piscine.svg"
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
        console.log(userInfo);
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
          <p class="user-name">${this.userInfo.login} </p>
          <span class="description"> ${this.userInfo.campus}</span> Campus
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