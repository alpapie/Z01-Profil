export default function PieChart(data=[{grade: 1}]){
    let TotalAudit=data.length
    let faill=data.filter((elem)=>{
        return elem.grade<1
    })
    let pass=data.filter((elem)=>{
        return elem.grade>=1
    })
  
    var per1 =pass.length /TotalAudit*100;
    var per2 = faill.length/TotalAudit*100;
    var offset = 25;
    
    let strokeDasharrayPass = per1+" "+(100-per1);
    let strokeDashoffsetPass = offset;
    
    let strokeDasharrayFail = per2+" "+(100-per2);
    let strokeDashoffsetFail = 100-per1+offset;

    let content=`
    <div class="piesvg-audit" style="text-align:center;display:none;" id="pie-graph">
        <svg class="donut" width="400" height="100%" viewBox="0 0 42 42">
            <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>

            <circle cx="21" cy="21" id="faillAudit" r="15.91549430918954" fill="transparent" stroke="#B50002" stroke-width="3" stroke-dasharray="${strokeDasharrayFail}" stroke-dashoffset="${strokeDashoffsetFail}" ></circle>
            <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#02b500" stroke-width="3" stroke-dasharray="${strokeDasharrayPass}" stroke-dashoffset="${strokeDashoffsetPass}" ></circle>
            <g class="chart-text">
                    <text x="50%" y="50%" class="chart-number" id="totalValue">${TotalAudit}</text>
                    <text x="50%" y="50%" class="chart-label">
                    Total audit
                    </text>
                    </g>
        </svg>
        <svg class="detaille-diagrame">
            <circle class="" cx="20" cy="10" r="10" fill="#61C0BF"  />
            <circle class="" cx="20" cy="40" r="10" fill="#DB4547" />
            
            <text class="" x="40" y="14" fill="#000">Pass</text>
            <text class="" x="40" y="46" fill="#000">Fail</text>
        </svg >
    </div>
    `
    return content
}