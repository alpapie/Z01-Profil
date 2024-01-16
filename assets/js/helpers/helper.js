export function Tojson(formData){
    let  valueq= [...formData]
    const obj = {};
    valueq.forEach(([key, value]) => {
     obj[key]=value
    })
    return obj
}

export function RemoveComponent(name){
    document.querySelectorAll(name).forEach((comp)=>{
        comp.remove()
    })
}


export function FormatAudit(xpaudit){
   if (xpaudit/1000000 <1) {
    return (xpaudit/1000).toFixed(2)+"KB"
   }
    return (xpaudit/1000000).toFixed(2)+"MB"
}

export function GetAllxp(data=[{type: 'xp', amount: 51750, path: '/dakar/div-01/typing-in-progress', object: {name: 'real-time-forum-typing-in-progress'}}]){
    let xps=0
    for (const project of data) {
        xps+=project.amount
    }
    return FormatAudit(xps)
}

export function ParseLvel(level){
    let Rank= [
        {
          "name": "Aspiring developer",
          "level": 0,
          "milestone": "Passed the piscine"
        },
        {
          "name": "Beginner developer",
          "level": 10
        },
        {
          "name": "Apprentice developer",
          "level": 20
        },
        {
          "name": "Assistant developer",
          "level": 30
        },
        {
          "name": "Basic developer",
          "level": 40
        },
        {
          "name": "Junior developer",
          "level": 50
        },
        {
          "name": "Confirmed developer",
          "level": 55
        },
        {
          "name": "Full-Stack developer",
          "level": 60
        }
    ]
    
    for (let i = Rank.length - 1; i >= 0; i--) {
        if (level >= Rank[i].level) {
            return Rank[i].name;
        }
    }
  
    return Rank[0].name;
}