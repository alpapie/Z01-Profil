export default function BarreSvg(data=[{type: 'skill_unix', amount: 15}]){
    let bar=[]
    let svgWidth=(data.length*1020)/16
    let x=10
    
    let content=`
	<h1>.</h1>
<svg width="${svgWidth}" height="500" id="barre-graph">
	<g transform="translate(40,20)">
	<g class="x axis" transform="translate(0,450)">
		<path class="domain" d="M0,6V0H900V6"></path>
	</g>
		<g class="y axis">
			<g class="tick" transform="translate(0,450)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">0%</text>
		</g>
			<g class="tick" transform="translate(0,414.57250826641473)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">10%</text>
		</g>
			<g class="tick" transform="translate(0,379.14501653282946)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">20%</text>
		</g>
			<g class="tick" transform="translate(0,343.71752479924425)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">30%</text>
		</g>
			<g class="tick" transform="translate(0,308.290033065659)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">40%</text>
		</g>
			<g class="tick" transform="translate(0,272.86254133207365)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">50%</text>
		</g>
			<g class="tick" transform="translate(0,237.43504959848843)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">60%</text>
		</g>
			<g class="tick" transform="translate(0,202.0075578649031)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">70%</text>
		</g>
			<g class="tick" transform="translate(0,166.5800661313179)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">80%</text>
		</g>
			<g class="tick" transform="translate(0,131.15257439773262)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">90%</text>
		</g>
			<g class="tick" transform="translate(0,95.72508266414734)" style="opacity: 1;"><line x2="-6" y2="0"></line>
			<text dy=".32em" x="-9" y="0" style="text-anchor: end;">100%</text>
		</g>
		<path class="domain" d="M-6,0H0V450H-6"></path>
		<text transform="rotate(-90)" y="6" dy=".71em" style="text-anchor: end;">Skills</text>
		<text y="60" x="600" id="current-elem" dy=".71em" style=""></text>
	</g>
    ${
        data.forEach((elem)=>{
            let height=(elem.amount*355)/100
            let line=`<rect class="bar" id="bar-diagram" data-id="${elem.type.split("_")[1]}" x="${x}" width="51" y="${450-height}" height="${height}"></rect>`
            x+=60
            bar.push(line)
        }),
        bar.join("")
    }
		
	</g>
</svg>
    `
    return content
}