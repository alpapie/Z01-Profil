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