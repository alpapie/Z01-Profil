export  class MainUser  extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.classList.add("containner-profile")
        this.Template()
     }
 
     Template(){
         let content=`
         <div class="profil-title">Mamoudou Ndiaye</div>
         <div class="profil-dresciption">Welcome on your profile page 😎</div>
         <div class="fisrt-graph">
           <div class="small-graph">
             Total xp
             <p class="total-xp">688</p>
             <span class="xp-duration"> Last month</span>
           </div>
           <div class="small-graph">
             Total audit
             <p class="total-xp">8</p>
             <span class="xp-duration"> Last month</span>
           </div>
           <div class="small-graph">
             Total completed project
             <p class="total-xp">3</p>
             <span class="xp-duration"> Last month</span>
           </div>
           <div class="small-graph">
             Current project
             <p class="total-xp">3</p>
             <span class="xp-duration"> Last month</span>
           </div>
         </div>
         <div class="profil-graph">
           <div class="xp-graph">
             <div
               id="apexchartsl3um3dcc"
               class="apexcharts-canvas apexchartsl3um3dcc apexcharts-theme-light"
             >
               <svg
                 id="SvgjsSvg1001"
                 width="55vw"
                 height="40vh"
                 xmlns="http://www.w3.org/2000/svg"
                 version="1.1"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 xmlns:svgjs="http://svgjs.dev"
                 class="apexcharts-svg"
                 xmlns:data="ApexChartsNS"
                 transform="translate(0, 0)"
                 style="background: transparent"
               >
                 <foreignObject x="0" y="0" width="737" height="320"
                   ><div
                     class="apexcharts-legend"
                     xmlns="http://www.w3.org/1999/xhtml"
                     style="max-height: 160px"
                   ></div
                 ></foreignObject>
                 <text
                   id="SvgjsText1004"
                   font-family="Helvetica, Arial, sans-serif"
                   x="10"
                   y="15.5"
                   text-anchor="start"
                   dominant-baseline="auto"
                   font-size="13px"
                   font-weight="bold"
                   fill="#8c9097"
                   class="apexcharts-title-text"
                   style="font-family: Helvetica, Arial, sans-serif; opacity: 1"
                 >
                   Product Trends by Month
                 </text>
                 <rect
                   id="SvgjsRect1007"
                   width="0"
                   height="0"
                   x="0"
                   y="0"
                   rx="0"
                   ry="0"
                   opacity="1"
                   stroke-width="0"
                   stroke="none"
                   stroke-dasharray="0"
                   fill="#fefefe"
                 ></rect>
                 <g
                   id="SvgjsG1069"
                   class="apexcharts-yaxis"
                   rel="0"
                   transform="translate(15.359375, 0)"
                 >
                   <g id="SvgjsG1070" class="apexcharts-yaxis-texts-g">
                     <text
                       id="SvgjsText1072"
                       font-family="Helvetica, Arial, sans-serif"
                       x="20"
                       y="51.5"
                       text-anchor="end"
                       dominant-baseline="auto"
                       font-size="11px"
                       font-weight="600"
                       fill="#8c9097"
                       class="apexcharts-text apexcharts-yaxis-label apexcharts-yaxis-label"
                       style="font-family: Helvetica, Arial, sans-serif"
                     >
                       <tspan id="SvgjsTspan1073">150</tspan>
                       <title>150</title>
                     </text>
                     <text
                       id="SvgjsText1075"
                       font-family="Helvetica, Arial, sans-serif"
                       x="20"
                       y="98.6168"
                       text-anchor="end"
                       dominant-baseline="auto"
                       font-size="11px"
                       font-weight="600"
                       fill="#8c9097"
                       class="apexcharts-text apexcharts-yaxis-label apexcharts-yaxis-label"
                       style="font-family: Helvetica, Arial, sans-serif"
                     >
                       <tspan id="SvgjsTspan1076">120</tspan>
                       <title>120</title>
                     </text>
                     <text
                       id="SvgjsText1078"
                       font-family="Helvetica, Arial, sans-serif"
                       x="20"
                       y="145.7336"
                       text-anchor="end"
                       dominant-baseline="auto"
                       font-size="11px"
                       font-weight="600"
                       fill="#8c9097"
                       class="apexcharts-text apexcharts-yaxis-label apexcharts-yaxis-label"
                       style="font-family: Helvetica, Arial, sans-serif"
                     >
                       <tspan id="SvgjsTspan1079">90</tspan>
                       <title>90</title>
                     </text>
                     <text
                       id="SvgjsText1081"
                       font-family="Helvetica, Arial, sans-serif"
                       x="20"
                       y="192.85039999999998"
                       text-anchor="end"
                       dominant-baseline="auto"
                       font-size="11px"
                       font-weight="600"
                       fill="#8c9097"
                       class="apexcharts-text apexcharts-yaxis-label apexcharts-yaxis-label"
                       style="font-family: Helvetica, Arial, sans-serif"
                     >
                       <tspan id="SvgjsTspan1082">60</tspan>
                       <title>60</title>
                     </text>
                     <text
                       id="SvgjsText1084"
                       font-family="Helvetica, Arial, sans-serif"
                       x="20"
                       y="239.9672"
                       text-anchor="end"
                       dominant-baseline="auto"
                       font-size="11px"
                       font-weight="600"
                       fill="#8c9097"
                       class="apexcharts-text apexcharts-yaxis-label apexcharts-yaxis-label"
                       style="font-family: Helvetica, Arial, sans-serif"
                     >
                       <tspan id="SvgjsTspan1085">30</tspan>
                       <title>30</title>
                     </text>
                     <text
                       id="SvgjsText1087"
                       font-family="Helvetica, Arial, sans-serif"
                       x="20"
                       y="287.084"
                       text-anchor="end"
                       dominant-baseline="auto"
                       font-size="11px"
                       font-weight="600"
                       fill="#8c9097"
                       class="apexcharts-text apexcharts-yaxis-label apexcharts-yaxis-label"
                       style="font-family: Helvetica, Arial, sans-serif"
                     >
                       <tspan id="SvgjsTspan1088">0</tspan>
                       <title>0</title>
                     </text>
                   </g>
                 </g>
                 <g
                   id="SvgjsG1003"
                   class="apexcharts-inner apexcharts-graphical"
                   transform="translate(45.359375, 50)"
                 >
                   <defs id="SvgjsDefs1002">
                     <clipPath id="gridRectMaskl3um3dcc">
                       <rect
                         id="SvgjsRect1009"
                         width="688.640625"
                         height="238.584"
                         x="-3.5"
                         y="-1.5"
                         rx="0"
                         ry="0"
                         opacity="1"
                         stroke-width="0"
                         stroke="none"
                         stroke-dasharray="0"
                         fill="#fff"
                       ></rect>
                     </clipPath>
                     <clipPath id="forecastMaskl3um3dcc"></clipPath>
                     <clipPath id="nonForecastMaskl3um3dcc"></clipPath>
                     <clipPath id="gridRectMarkerMaskl3um3dcc">
                       <rect
                         id="SvgjsRect1010"
                         width="685.640625"
                         height="239.584"
                         x="-2"
                         y="-2"
                         rx="0"
                         ry="0"
                         opacity="1"
                         stroke-width="0"
                         stroke="none"
                         stroke-dasharray="0"
                         fill="#fff"
                       ></rect>
                     </clipPath>
                   </defs>
                   <line
                     id="SvgjsLine1008"
                     x1="169.91015625"
                     y1="0"
                     x2="169.91015625"
                     y2="235.584"
                     stroke="#b6b6b6"
                     stroke-dasharray="3"
                     stroke-linecap="butt"
                     class="apexcharts-xcrosshairs"
                     x="169.91015625"
                     y="0"
                     width="1"
                     height="235.584"
                     fill="#b1b9c4"
                     filter="none"
                     fill-opacity="0.9"
                     stroke-width="1"
                   ></line>
                   <line
                     id="SvgjsLine1020"
                     x1="0"
                     y1="236.584"
                     x2="0"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <line
                     id="SvgjsLine1021"
                     x1="85.205078125"
                     y1="236.584"
                     x2="85.205078125"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <line
                     id="SvgjsLine1022"
                     x1="170.41015625"
                     y1="236.584"
                     x2="170.41015625"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <line
                     id="SvgjsLine1023"
                     x1="255.615234375"
                     y1="236.584"
                     x2="255.615234375"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <line
                     id="SvgjsLine1024"
                     x1="340.8203125"
                     y1="236.584"
                     x2="340.8203125"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <line
                     id="SvgjsLine1025"
                     x1="426.025390625"
                     y1="236.584"
                     x2="426.025390625"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <line
                     id="SvgjsLine1026"
                     x1="511.23046875"
                     y1="236.584"
                     x2="511.23046875"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <line
                     id="SvgjsLine1027"
                     x1="596.435546875"
                     y1="236.584"
                     x2="596.435546875"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <line
                     id="SvgjsLine1028"
                     x1="681.640625"
                     y1="236.584"
                     x2="681.640625"
                     y2="242.584"
                     stroke="#e0e0e0"
                     stroke-dasharray="0"
                     stroke-linecap="butt"
                     class="apexcharts-xaxis-tick"
                   ></line>
                   <g id="SvgjsG1016" class="apexcharts-grid">
                     <g id="SvgjsG1017" class="apexcharts-gridlines-horizontal">
                       <line
                         id="SvgjsLine1030"
                         x1="0"
                         y1="47.1168"
                         x2="681.640625"
                         y2="47.1168"
                         stroke="#f2f5f7"
                         stroke-dasharray="0"
                         stroke-linecap="butt"
                         class="apexcharts-gridline"
                       ></line>
                       <line
                         id="SvgjsLine1031"
                         x1="0"
                         y1="94.2336"
                         x2="681.640625"
                         y2="94.2336"
                         stroke="#f2f5f7"
                         stroke-dasharray="0"
                         stroke-linecap="butt"
                         class="apexcharts-gridline"
                       ></line>
                       <line
                       </div>                 id="SvgjsLine1032"
                         x1="0"
                         y1="141.35039999999998"
                         x2="681.640625"
                         y2="141.35039999999998"
                         stroke="#f2f5f7"
                         stroke-dasharray="0"
                         stroke-linecap="butt"
                         class="apexcharts-gridline"
                       ></line>
                       <line
                         id="SvgjsLine1033"
                         x1="0"
                         y1="188.4672"
                         x2="681.640625"
                         y2="188.4672"
                         stroke="#f2f5f7"
                         stroke-dasharray="0"
                         stroke-linecap="butt"
                         class="apexcharts-gridline"
                       ></line>
                     </g>
                     <g id="SvgjsG1018" class="apexcharts-gridlines-vertical"></g>
                     <line
                       id="SvgjsLine1036"
                       x1="0"
                       y1="235.584"
                       x2="681.640625"
                       y2="235.584"
                       stroke="transparent"
                       stroke-dasharray="0"
                       stroke-linecap="butt"
                     ></line>
                     <line
                       id="SvgjsLine1035"
                       x1="0"
                       y1="1"
                       x2="0"
                       y2="235.584"
                       stroke="transparent"
                       stroke-dasharray="0"
                       stroke-linecap="butt"
                     ></line>
                   </g>
                   <g id="SvgjsG1019" class="apexcharts-grid-borders">
                     <line
                       id="SvgjsLine1029"
                       x1="0"
                       y1="0"
                       x2="681.640625"
                       y2="0"
                       stroke="#f2f5f7"
                       stroke-dasharray="0"
                       stroke-linecap="butt"
                       class="apexcharts-gridline"
                     ></line>
                     <line
                       id="SvgjsLine1034"
                       x1="0"
                       y1="235.584"
                       x2="681.640625"
                       y2="235.584"
                       stroke="#f2f5f7"
                       stroke-dasharray="0"
                       stroke-linecap="butt"
                       class="apexcharts-gridline"
                     ></line>
                     <line
                       id="SvgjsLine1068"
                       x1="0"
                       y1="236.584"
                       x2="681.640625"
                       y2="236.584"
                       stroke="#e0e0e0"
                       stroke-dasharray="0"
                       stroke-width="1"
                       stroke-linecap="butt"
                     ></line>
                   </g>
                   <g
                     id="SvgjsG1011"
                     class="apexcharts-line-series apexcharts-plot-series"
                   >
                     <g
                       id="SvgjsG1012"
                       class="apexcharts-series"
                       seriesName="Desktops"
                       data:longestSeries="true"
                       rel="1"
                       data:realIndex="0"
                     >
                       <path
                         id="SvgjsPath1015"
                         d="M0 219.8784L85.205078125 171.19104L170.41015625 180.6144L255.615234375 155.48543999999998L340.8203125 158.62655999999998L426.025390625 138.20928L511.23046875 127.21536L596.435546875 92.66304L681.640625 3.141120000000001C681.640625 3.141120000000001 681.640625 3.141120000000001 681.640625 3.141120000000001 "
                         fill="none"
                         fill-opacity="1"
                         stroke="rgba(98,89,202,0.85)"
                         stroke-opacity="1"
                         stroke-linecap="butt"
                         stroke-width="3"
                         stroke-dasharray="0"
                         class="apexcharts-line"
                         index="0"
                         clip-path="url(#gridRectMaskl3um3dcc)"
                         pathTo="M 0 219.8784 L 85.205078125 171.19104 L 170.41015625 180.6144 L 255.615234375 155.48543999999998 L 340.8203125 158.62655999999998 L 426.025390625 138.20928 L 511.23046875 127.21536 L 596.435546875 92.66304 L 681.640625 3.141120000000001"
                         pathFrom="M -1 235.584 L -1 235.584 L 85.205078125 235.584 L 170.41015625 235.584 L 255.615234375 235.584 L 340.8203125 235.584 L 426.025390625 235.584 L 511.23046875 235.584 L 596.435546875 235.584 L 681.640625 235.584"
                         fill-rule="evenodd"
                       ></path>
                       <g
                         id="SvgjsG1013"
                         class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                         data:realIndex="0"
                       >
                         <g class="apexcharts-series-markers">
                           <circle
                             id="SvgjsCircle1092"
                             r="0"
                             cx="170.41015625"
                             cy="180.6144"
                             class="apexcharts-marker w5eop3v1k no-pointer-events"
                             stroke="#ffffff"
                             fill="#6259ca"
                             fill-opacity="1"
                             stroke-width="2"
                             stroke-opacity="0.9"
                             default-marker-size="0"
                           ></circle>
                         </g>
                       </g>
                     </g>
                     <g
                       id="SvgjsG1014"
                       class="apexcharts-datalabels"
                       data:realIndex="0"
                     ></g>
                   </g>
                   <line
                     id="SvgjsLine1037"
                     x1="0"
                     y1="0"
                     x2="681.640625"
                     y2="0"
                     stroke="#b6b6b6"
                     stroke-dasharray="0"
                     stroke-width="1"
                     stroke-linecap="butt"
                     class="apexcharts-ycrosshairs"
                   ></line>
                   <line
                     id="SvgjsLine1038"
                     x1="0"
                     y1="0"
                     x2="681.640625"
                     y2="0"
                     stroke-dasharray="0"
                     stroke-width="0"
                     stroke-linecap="butt"
                     class="apexcharts-ycrosshairs-hidden"
                   ></line>
                   <g
                     id="SvgjsG1039"
                     class="apexcharts-xaxis"
                     transform="translate(0, 0)"
                   >
                     <g
                       id="SvgjsG1040"
                       class="apexcharts-xaxis-texts-g"
                       transform="translate(0, -4)"
                     >
                       <text
                         id="SvgjsText1042"
                         font-family="Helvetica, Arial, sans-serif"
                         x="0"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                       >
                         <tspan id="SvgjsTspan1043">Jan</tspan>
                         <title>Jan</title>
                       </text>
                       <text
                         id="SvgjsText1045"
                         font-family="Helvetica, Arial, sans-serif"
                         x="85.205078125"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                       >
                         <tspan id="SvgjsTspan1046">Feb</tspan>
                         <title>Feb</title>
                       </text>
                       <text
                         id="SvgjsText1048"
                         font-family="Helvetica, Arial, sans-serif"
                         x="170.41015625"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                       >
                         <tspan id="SvgjsTspan1049">Mar</tspan>
                         <title>Mar</title>
                       </text>
                       <text
                         id="SvgjsText1051"
                         font-family="Helvetica, Arial, sans-serif"
                         x="255.615234375"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                       >
                         <tspan id="SvgjsTspan1052">Apr</tspan>
                         <title>Apr</title>
                       </text>
                       <text
                         id="SvgjsText1054"
                         font-family="Helvetica, Arial, sans-serif"
                         x="340.8203125"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                       >
                         <tspan id="SvgjsTspan1055">May</tspan>
                         <title>May</title>
                       </text>
                       <text
                         id="SvgjsText1057"
                         font-family="Helvetica, Arial, sans-serif"
                         x="426.025390625"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                         </div>               >
                         <tspan id="SvgjsTspan1058">Jun</tspan>
                         <title>Jun</title>
                       </text>
                       <text
                         id="SvgjsText1060"
                         font-family="Helvetica, Arial, sans-serif"
                         x="511.23046875"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                       >
                         <tspan id="SvgjsTspan1061">Jul</tspan>
                         <title>Jul</title>
                       </text>
                       <text
                         id="SvgjsText1063"
                         font-family="Helvetica, Arial, sans-serif"
                         x="596.435546875"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                       >
                         <tspan id="SvgjsTspan1064">Aug</tspan>
                         <title>Aug</title>
                       </text>
                       <text
                         id="SvgjsText1066"
                         font-family="Helvetica, Arial, sans-serif"
                         x="681.640625"
                         y="264.584"
                         text-anchor="middle"
                         dominant-baseline="auto"
                         font-size="11px"
                         font-weight="600"
                         fill="#8c9097"
                         class="apexcharts-text apexcharts-xaxis-label apexcharts-xaxis-label"
                         style="font-family: Helvetica, Arial, sans-serif"
                       >
                         <tspan id="SvgjsTspan1067">Sep</tspan>
                         <title>Sep</title>
                       </text>
                     </g>
                   </g>
                   <g
                     id="SvgjsG1089"
                     class="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                   ></g>
                   <g
                     id="SvgjsG1090"
                     class="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                   ></g>
                   <g
                     id="SvgjsG1091"
                     class="apexcharts-point-annotations apexcharts-hidden-element-shown"
                   ></g>
                 </g>
               </svg>
               <div
                 class="apexcharts-tooltip apexcharts-theme-light"
                 style="left: 226.77px; top: 183.614px"
               >
                 <div
                   class="apexcharts-tooltip-title"
                   style="
                     font-family: Helvetica, Arial, sans-serif;
                     font-size: 12px;
                   "
                 >
                   Mar
                 </div>
                 <div
                   class="apexcharts-tooltip-series-group apexcharts-active"
                   style="order: 1; display: flex"
                 >
                   <span
                     class="apexcharts-tooltip-marker"
                     style="background-color: rgb(98, 89, 202)"
                   ></span>
                   <div
                     class="apexcharts-tooltip-text"
                     style="
                       font-family: Helvetica, Arial, sans-serif;
                       font-size: 12px;
                     "
                   >
                     <div class="apexcharts-tooltip-y-group">
                       <span class="apexcharts-tooltip-text-y-label"
                         >Desktops: </span
                       ><span class="apexcharts-tooltip-text-y-value">35</span>
                     </div>
                     <div class="apexcharts-tooltip-goals-group">
                       <span class="apexcharts-tooltip-text-goals-label"></span
                       ><span class="apexcharts-tooltip-text-goals-value"></span>
                     </div>
                     <div class="apexcharts-tooltip-z-group">
                       <span class="apexcharts-tooltip-text-z-label"></span
                       ><span class="apexcharts-tooltip-text-z-value"></span>
                     </div>
                   </div>
                 </div>
               </div>
               <div
                 class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"
                 </div>         style="left: 193.934px; top: 287.584px"
               >
                 <div
                   class="apexcharts-xaxistooltip-text"
                   style="
                     font-family: Helvetica, Arial, sans-serif;
                     font-size: 12px;
                     min-width: 19.2808px;
                   "
                 >
                   Mar
                 </div>
               </div>
               <div
                 class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"
               >
                 <div class="apexcharts-yaxistooltip-text"></div>
               </div>
               <div class="apexcharts-toolbar" style="top: 0px; right: 3px">
                 <div class="apexcharts-menu-icon" title="Menu">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                   >
                     <path fill="none" d="M0 0h24v24H0V0z"></path>
                     <path
                       d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                     ></path>
                   </svg>
                 </div>
               </div>
             </div>
           </div>
           <div class="project-graph">
             <p class="title">Completed Project</p>
             <svg
               id="SvgjsSvg1537"
               width="303"
               height="293.7"
               xmlns="http://www.w3.org/2000/svg"
               version="1.1"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               xmlns:svgjs="http://svgjs.com/svgjs"
               class="apexcharts-svg"
               xmlns:data="ApexChartsNS"
               transform="translate(0, 0)"
               style="background: transparent"
             >
               <g
                 id="SvgjsG1539"
                 class="apexcharts-inner apexcharts-graphical"
                 transform="translate(7, 0)"
               >
                 <defs id="SvgjsDefs1538">
                   <clipPath id="gridRectMaskjv9wae1n">
                     <rect
                       id="SvgjsRect1541"
                       width="297"
                       height="315"
                       x="-3"
                       y="-1"
                       rx="0"
                       ry="0"
                       opacity="1"
                       stroke-width="0"
                       stroke="none"
                       stroke-dasharray="0"
                       fill="#fff"
                     ></rect>
                   </clipPath>
                   <clipPath id="gridRectMarkerMaskjv9wae1n">
                     <rect
                       id="SvgjsRect1542"
                       width="295"
                       height="317"
                       x="-2"
                       y="-2"
                       rx="0"
                       ry="0"
                       opacity="1"
                       stroke-width="0"
                       stroke="none"
                       stroke-dasharray="0"
                       fill="#fff"
                     ></rect>
                   </clipPath>
                   <filter
                     id="SvgjsFilter1548"
                     filterUnits="userSpaceOnUse"
                     width="200%"
                     height="200%"
                     x="-50%"
                     y="-50%"
                   >
                     <feFlood
                       id="SvgjsFeFlood1549"
                       flood-color="#000000"
                       flood-opacity="0.35"
                       result="SvgjsFeFlood1549Out"
                       in="SourceGraphic"
                     ></feFlood>
                     <feComposite
                       id="SvgjsFeComposite1550"
                       in="SvgjsFeFlood1549Out"
                       in2="SourceAlpha"
                       operator="in"
                       result="SvgjsFeComposite1550Out"
                     ></feComposite>
                     <feOffset
                       id="SvgjsFeOffset1551"
                       dx="0"
                       dy="-3"
                       result="SvgjsFeOffset1551Out"
                       in="SvgjsFeComposite1550Out"
                     ></feOffset>
                     <feGaussianBlur
                       id="SvgjsFeGaussianBlur1552"
                       stdDeviation="4 "
                       result="SvgjsFeGaussianBlur1552Out"
                       in="SvgjsFeOffset1551Out"
                     ></feGaussianBlur>
                     <feMerge
                       id="SvgjsFeMerge1553"
                       result="SvgjsFeMerge1553Out"
                       in="SourceGraphic"
                     >
                       <feMergeNode
                         id="SvgjsFeMergeNode1554"
                         in="SvgjsFeGaussianBlur1552Out"
                       ></feMergeNode>
                       <feMergeNode
                         id="SvgjsFeMergeNode1555"
                         in="[object Arguments]"
                       ></feMergeNode>
                     </feMerge>
                     <feBlend
                       id="SvgjsFeBlend1556"
                       in="SourceGraphic"
                       in2="SvgjsFeMerge1553Out"
                       mode="normal"
                       result="SvgjsFeBlend1556Out"
                     ></feBlend>
                   </filter>
                   <filter
                     id="SvgjsFilter1559"
                     filterUnits="userSpaceOnUse"
                     width="200%"
                     height="200%"
                     x="-50%"
                     y="-50%"
                   >
                     <feFlood
                       id="SvgjsFeFlood1560"
                       flood-color="#000000"
                       flood-opacity="0.24"
                       result="SvgjsFeFlood1560Out"
                       in="SourceGraphic"
                     ></feFlood>
                     <feComposite
                       id="SvgjsFeComposite1561"
                       in="SvgjsFeFlood1560Out"
                       in2="SourceAlpha"
                       operator="in"
                       result="SvgjsFeComposite1561Out"
                     ></feComposite>
                     <feOffset
                       id="SvgjsFeOffset1562"
                       dx="0"
                       dy="3"
                       result="SvgjsFeOffset1562Out"
                       in="SvgjsFeComposite1561Out"
                     ></feOffset>
                     <feGaussianBlur
                       id="SvgjsFeGaussianBlur1563"
                       stdDeviation="4 "
                       result="SvgjsFeGaussianBlur1563Out"
                       in="SvgjsFeOffset1562Out"
                     ></feGaussianBlur>
                     <feMerge
                       id="SvgjsFeMerge1564"
                       result="SvgjsFeMerge1564Out"
                       in="SourceGraphic"
                     >
                       <feMergeNode
                         id="SvgjsFeMergeNode1565"
                         in="SvgjsFeGaussianBlur1563Out"
                       ></feMergeNode>
                       <feMergeNode
                         id="SvgjsFeMergeNode1566"
                         in="[object Arguments]"
                       ></feMergeNode>
                     </feMerge>
                     <feBlend
                       id="SvgjsFeBlend1567"
                       in="SourceGraphic"
                       in2="SvgjsFeMerge1564Out"
                       mode="normal"
                       result="SvgjsFeBlend1567Out"
                     ></feBlend>
                   </filter>
                 </defs>
                 <g id="SvgjsG1543" class="apexcharts-radialbar">
                   <g id="SvgjsG1544">
                     <g id="SvgjsG1545" class="apexcharts-tracks">
                       <g
                         id="SvgjsG1546"
                         class="apexcharts-radialbar-track apexcharts-track"
                         rel="1"
                       >
                         <path
                           id="apexcharts-radialbarTrack-0"
                           d="M 70.99767734856809 220.00232265143188 A 105.36219512195123 105.36219512195123 0 1 1 71.12782183911466 220.13224019498313"
                           fill="none"
                           fill-opacity="1"
                           stroke="rgba(238,238,238,0.85)"
                           stroke-opacity="1"
                           stroke-linecap="round"
                           stroke-width="13.663097560975611"
                           stroke-dasharray="0"
                           class="apexcharts-radialbar-area"
                           filter="url(#SvgjsFilter1548)"
                           data:pathOrig="M 70.99767734856809 220.00232265143188 A 105.36219512195123 105.36219512195123 0 1 1 71.12782183911466 220.13224019498313"
                         ></path>
                       </g>
                     </g>
                     <g id="SvgjsG1557">
                       <g
                         id="SvgjsG1570"
                         class="apexcharts-series apexcharts-radial-series"
                         seriesName="Percent"
                         rel="1"
                         data:realIndex="0"
                       >
                         <path
                           id="SvgjsPath1571"
                           d="M 70.99767734856809 220.00232265143188 A 105.36219512195123 105.36219512195123 0 1 1 220.00232265143188 220.00232265143188"
                           fill="none"
                           fill-opacity="0.85"
                           stroke="rgba(121,40,202,0.85)"
                           stroke-opacity="1"
                           stroke-linecap="round"
                           stroke-width="20.39268292682927"
                           stroke-dasharray="0"
                           class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"
                           data:angle="270"
                           data:value="75"
                           index="0"
                           j="0"
                           data:pathOrig="M 70.99767734856809 220.00232265143188 A 105.36219512195123 105.36219512195123 0 1 1 220.00232265143188 220.00232265143188"
                         ></path>
                       </g>
                       <circle
                         id="SvgjsCircle1558"
                         r="98.53064634146342"
                         cx="145.5"
                         cy="145.5"
                         class="apexcharts-radialbar-hollow"
                         fill="#ffffff"
                         filter="url(#SvgjsFilter1559)"
                       ></circle>
                       <g
                         id="SvgjsG1568"
                         class="apexcharts-datalabels-group"
                         transform="translate(0, 0) scale(1)"
                         style="opacity: 1"
                       >
                         <text
                           id="SvgjsText1569"
                           font-family="Helvetica, Arial, sans-serif"
                           x="145.5"
                           y="161.5"
                           text-anchor="middle"
                           dominant-baseline="auto"
                           font-size="30px"
                           font-weight="400"
                           fill="#000000"
                           class="apexcharts-text apexcharts-datalabel-value"
                           style="font-family: Helvetica, Arial, sans-serif"
                         >
                           75/100
                         </text>
                       </g>
                     </g>
                   </g>
                 </g>
                 <line
                   id="SvgjsLine1572"
                   x1="0"
                   y1="0"
                   x2="291"
                   y2="0"
                   stroke="#b6b6b6"
                   stroke-dasharray="0"
                   stroke-width="1"
                   class="apexcharts-ycrosshairs"
                 ></line>
                 <line
                   id="SvgjsLine1573"
                   x1="0"
                   y1="0"
                   x2="291"
                   y2="0"
                   stroke-dasharray="0"
                   stroke-width="0"
                   class="apexcharts-ycrosshairs-hidden"
                 ></line>
               </g>
               <g id="SvgjsG1540" class="apexcharts-annotations"></g>
            </svg>
           </div>
         </div>

        `
        this.innerHTML=content
     }
}