import { FormatAudit, GetAllxp, ParseLvel } from "../../helpers/helper.js";
import LevelFunc from "../../svg/levelEvolution.js";
import PieChart from "./graph/piechart.js";
import BarreSvg from "./graph/bargraph.js";

export class MainUser extends HTMLElement {
  constructor(data) {
    super();
    this.user = data.user[0];
    this.data = data.allxp;

    this.skills = this.user.skill;
    this.level = data.level[0];
    this.TenLastProject = this.data.slice(0, 10);
  }
  connectedCallback() {
    this.classList.add("containner-profile");
    this.Template();
    let bard= document.querySelectorAll("#bar-diagram")
      bard.forEach(elm=>{
        let curentbare=document.querySelector("#current-elem")
        elm.addEventListener("mouseover",(e)=>{
          curentbare.innerHTML=elm.dataset.id
          curentbare.setAttribute("x" ,+elm.getAttribute("x"))
          curentbare.setAttribute("y",(+elm.getAttribute("y"))-20)

        })
        elm.addEventListener("mouseout",(e)=>{
          curentbare.innerHTML=""
        })
      })
    let piegraph=document.querySelector("#pie-graph")
    let baregraph=document.querySelector("#barre-graph")

    let classidpie=document.querySelector("#audit-diagramme")
    let classidbar=document.querySelector("#list-skills")
    classidpie.addEventListener("click",(e)=>{
      if (!classidpie.classList.contains("active-diagram")) {
        classidpie.classList.add("active-diagram")
        classidbar.classList.remove("active-diagram")
        piegraph.style.display="flex"
        baregraph.style.display="none"
      }
    })
    classidbar.addEventListener("click",(e)=>{
      if (!classidbar.classList.contains("active-diagram")) {
        classidbar.classList.add("active-diagram")
        classidpie.classList.remove("active-diagram")
        baregraph.style.display="block"
        piegraph.style.display="none"
      }
    })
  }

  Template() {
    let content = `
         <div class="profil-title">Hello ${this.user.firstName} ${
      this.user.lastName
    }</div>
         <div class="profil-dresciption">Welcome on your profile page 😎</div>
         <div class="fisrt-graph">
           <div class="small-graph">
             Total xp
             <p class="total-xp">${GetAllxp(this.data)}</p>
           </div>
           <div class="small-graph">
              Audit ratio
             <p class="total-xp">${Number.parseFloat(
               Math.floor(1000 * this.user.auditRatio) / 1000
             ).toFixed(1)}</p>
             <span class="audit-up-dow up"> ${FormatAudit(
               this.user.totalUp
             )}<svg fill="#0033cc" width="16px" heigth="10px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#0033cc"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.293,1.293a1,1,0,0,1,1.414,0l5,5a1,1,0,0,1-1.414,1.414L13,4.414V22a1,1,0,0,1-2,0V4.414L7.707,7.707A1,1,0,0,1,6.293,6.293Z"></path></g></svg></span>
             <span class="audit-up-dow down">${FormatAudit(
               this.user.totalDown
             )}<svg  width="16px" heigth="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#db0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.9297 2V22" stroke="#b80000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19 16L14 21.1599C13.7437 21.4336 13.434 21.6519 13.0899 21.801C12.7459 21.9502 12.375 22.0271 12 22.0271C11.625 22.0271 11.2541 21.9502 10.9101 21.801C10.566 21.6519 10.2563 21.4336 10 21.1599L5 16" stroke="#b80000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </span>
           </div>
           <div class="small-graph">
             Current Level
             <p class="total-xp">level ${
               this.level.amount
             } <span class="rank">${ParseLvel(this.level.amount)}</span></p>
             <div class="progressContainer">
             ${LevelFunc(this.level.amount)}
    </div>
           </div>
         </div>
         <div class="profil-graph">
           <div class="xp-graph"> 
           <p style="cursor:pointer"><span class="active-diagram" id="list-skills">List of Skills</span> | <span class="" id="audit-diagramme">Audit diagramme</span> </p>
            <div class="diagramme-section">
               ${BarreSvg(this.skills) }
              ${PieChart(this.user.audited)}
              
            </div>
           </div>
           <div class="project-graph">
              <p> Last project</p>
                <div class="list-project">
                ${
                  ((this.listPoroject = []),
                  this.TenLastProject.forEach((element) => {
                    this.listPoroject.push(`
                    <div class="bar">
                      <div class="info">
                        <span>${
                          element.object.name.length > 19
                            ? element.object.name.slice(0, 25) + "..."
                            : element.object.name
                        } </span>
                      </div>
                      <div class="progress-line html">
                        <span style="width:${
                          element.amount / 1000 / 10
                        }%">${FormatAudit(element.amount)}</span>
                      </div>
                    </div>
                   `);
                  }),
                  this.listPoroject.join("\n"))
                }
                </div>
           </div>
         </div>

        `;
    this.innerHTML = content;
  }
}
