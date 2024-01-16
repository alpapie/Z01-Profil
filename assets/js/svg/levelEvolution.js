export default function LevelFunc(level){
    let strokeLvel= (360*level)/60
    let pc= Math.round(level/0.6)
    let content=`
    <svg class="progress" viewBox="0 0 400 100">
        <path class="drop" style="fill:none;stroke:#d0d0d0;stroke-width:8;stroke-linecap:round;" d="m 20,80 c 0,0 60,-0.001 90,-0.001 30,0 60,0.001 90,0.001 30,0 60,-0.001 90,-0.001 30,0 90,0.001 90,0.001"></path>
        <path class="range" style="fill: none; stroke: rgb(60, 193, 36); stroke-width: 8; stroke-linecap: round; stroke-dasharray: ${strokeLvel}, 396;" d="m 20,80 c 0,0 60,-0.001 90,-0.001 30,0 60,0.001 90,0.001 30,0 60,-0.001 90,-0.001 30,0 90,0.001 90,0.001"></path>
    </svg> ${pc}%
    `
    return content
}