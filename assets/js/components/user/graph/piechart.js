class Pieshart extends HTMLElement{
    constructor(data){
        this.section=document.querySelector("#section-graph")
        this.section.style.display="none"
        this.data=data
    }
    connectedCallback(){
        let shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild()
    }
}