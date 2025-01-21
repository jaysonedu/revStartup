import React, { useState } from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Search } from './images/search.svg';
import { ReactComponent as Settings } from './images/settings.svg';
import { ReactComponent as Notis } from './images/notis.svg';
import { ReactComponent as Action } from './images/action.svg';
import { ReactComponent as Pfp } from './images/pfp.svg';
import { ReactComponent as Frame1 } from './images/Frame.svg';
import { ReactComponent as Frame2 } from './images/Frame (1).svg';
import { ReactComponent as Frame3 } from './images/Frame (2).svg';
import { ReactComponent as Frame4 } from './images/Frame (3).svg';
import { ReactComponent as Frame5 } from './images/Frame (4).svg';
import { ReactComponent as Frame6 } from './images/Frame (5).svg';
import { ReactComponent as Positive } from './images/Positive.svg';
import { ReactComponent as Negative } from './images/Negative.svg';
import time from './images/time.svg';
import bus from './images/bus.svg';
import map from './images/map.svg';
import safety from './images/med.svg';
import plus from './images/plus.svg';
import minus from './images/minus.svg';
import fullscreen from './images/fullscreen.svg';
import line1 from './images/Line 1.svg';
import line2 from './images/Line 2.svg';
import stripedline from "./images/stripedlines.png";
import {
  ComposedChart,
  BarChart,
  LineChart,
  Line,
  Bar,
  AreaChart,
  Area,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import './App.css';



export function Selection() {
  const [tabPressed, setTabPressed] = useState(Array(3).fill(0)); 
  const [tabClass, setTabClass] = useState(["tab1 active", "tab2", "tab3"]);

  const handleTabClick = (i) => {
    const newTabPressed = [...tabPressed];
    newTabPressed[i - 1] = 1;

    setTabPressed(newTabPressed);

    const newTabClass = [];
    for (let j = 0; j < 3; j++) {
      if (i - 1 === j) {
        newTabClass.push(newTabPressed[j] === 1 ? 'tab' + (j + 1) + ' active' : 'tab' + (j + 1));
      } else {
        newTabClass.push('tab' + (j + 1));
      }
    }
    setTabClass(newTabClass);
  };

  return (
    <>
      <div className={tabClass[0]} onClick={() => handleTabClick(1)}>Dashboard</div>
      <div className={tabClass[1]} onClick={() => handleTabClick(2)}>District Dashboard</div>
      <div className={tabClass[2]} onClick={() => handleTabClick(3)}>Performance</div>
    </>
  );
}

export function SelectionOpt(){
  const [tabPressed, setTabPressed] = useState(Array(6).fill(0)); 
  const [tabClass, setTabClass] = useState(["frame1 active", "frame2", "frame3", "frame4", "frame5", "frame6"]);
  const handleTabClick2 = (i) => {
    const newTabPressed = [...tabPressed];
    newTabPressed[i - 1] = 1;

    setTabPressed(newTabPressed);

    const newTabClass = [];
    for (let j = 0; j < 6; j++) {
      if (i - 1 === j) {
        newTabClass.push(newTabPressed[j] === 1 ? 'frame' + (j + 1) + ' active' : 'frame' + (j + 1));
      } else {
        newTabClass.push('frame' + (j + 1));
      }
    }
    setTabClass(newTabClass);
  };
  return (
    <>
      <Frame6 className={tabClass[0]} onClick={() => handleTabClick2(1)} />
      <Frame5 className={tabClass[1]} onClick={() => handleTabClick2(2)}/>
      <Frame4 className={tabClass[2]} onClick={() => handleTabClick2(3)}/>
      <Frame3 className={tabClass[3]} onClick={() => handleTabClick2(4)}/>
      <Frame2 className={tabClass[4]} onClick={() => handleTabClick2(5)} />
      <Frame1 className={tabClass[5]} onClick={() => handleTabClick2(6)} />
    </>
  );

}



export function Mainheader() {
  return (
    <>
      <div className="header">
        <div className="leftheader">
          <div className="searchbar">
            <Search className="search" />
            <input className="searchinput" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="middleheader">
          <Selection />
        </div>
        <div className="rightheader">
          <Action className="action" />
          <Notis className="notis" />
          <Settings className="settings" />
        </div>
      </div>
    </>
  );
}

export function Subheader() {
  return (
    <>
      <div className="subheader">
        <Logo className="logo" />
        <div className="options">
          <SelectionOpt/>
        </div>
        <Pfp className="pfp" />
      </div>
    </>
  );
}
export function Row1({i, title, imgsrc, statnum, percent}){
    if (percent > 0){
      percent = "+" + percent + "%";
      return(
        <>
      <div className = {"box" + i}>
        <div className = "infotitle">
          <h2>{title}</h2>
          <img src = {imgsrc}/>
        </div>
        <div className = "stats">
          <h2>{statnum}</h2>
          <div className = "graphicperc">
            <h3>{percent}</h3>
            <Positive/>
            <select className="selections">
              <option value="Hourly">Hourly</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </div>
        </div>
      </div>
      </>
      );
    }else{
      percent = percent + "%";
      return(
        <>
      <div className = {"box" + i}>
        <div className = "infotitle">
          <h2>{title}</h2>
          <img src = {imgsrc}/>
        </div>
        <div className = "stats">
          <h2>{statnum}</h2>
          <div className = "graphicperc">
            <h3>{percent}</h3>
            <Negative/>
            <select className="selections">
              <option value="Hourly">Hourly</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </div>
        </div>
      </div>
      </>
      );
    }
    
}

export function Map(){

  return(
  <div class="legend">
    <div className = "desc1">
      <div class="legend-item">
        <div class="legend-icon legend-delayed"></div>
        <span>Delayed</span>
      </div>
      <div class="legend-item">
        <div class="legend-icon legend-active"></div>
        <span>Active</span>
      </div>
      <div class="legend-item">
        <div class="legend-icon legend-offline"></div>
        <span>Offline</span>
      </div>
      <div class="legend-item">
        <div class="legend-icon legend-standby"></div>
        <span>Stand by</span>
      </div>
    </div>
    <div className='desc2'>
        <div className = "descbox1">
          <img src = {plus}/>
          <img src = {line1}/>
          <img src = {minus}/>
        </div>
        <div className='descbox2'>
          <img src = {fullscreen}/>
        </div>
    </div>
  </div>


  );
  
}


function TransportationBudget({name, Value1, Value2, color1, color2}){
  
  
  const data = [
    {
      name: "Abington Ave School",
      Value1: 47,
      Value2: 53,
      total: 100,
    },
    {
      name: "Chancellor Ave School",
      Value1: 98,
      Value2: 128,
      total: 226,
    },
    {
      name: "Arts HS",
      Value1: 52,
      Value2: 78,
      total: 130,
    },
  ];
  
  return(
    <>
        <div className = "bars">
         <img src = {line2}/>
          <div className = "bar1">
              <h2><span className = "dollarsign">$</span>{Value1 + "k"}</h2>
              <div className = {"bar" + " " + color1} style={{ width: `${Value1 * 2}px` }}></div>
          </div>
            <img src = {line2}/>
            <div className = "bar2">
              <h2><span className = "dollarsign">$</span>{Value2 + "k"}</h2>
              <div className = { "bar" + " " + color2} style={{ width: `${Value2 * 2}px` }}></div>
            </div>
        </div>
        <div className = "NameBar"><h5>{name}</h5></div>
     
      

    
  </>
  );
}

function PerformanceGraph(){
  const data = [
    { time: '10:00 AM', totalMiles: 120, waitTime: 10 },
    { time: '11:00 AM', totalMiles: 150, waitTime: 15 },
    { time: '12:00 PM', totalMiles: 130, waitTime: 12 },
    { time: '01:00 PM', totalMiles: 170, waitTime: 9 },
    { time: '02:00 PM', totalMiles: 160, waitTime: 13 },
  ];

  return( 
    <>
      <div className = "areacharts">
        <div className = "titlesarea">
          <h2>Today’s Performance</h2>
          <div className = "items">
            <div className = "item1">
              <div class="legend-icon legend-offline"></div>
              <span className = "yellowcol">Total Miles Driven Today</span>
            </div>
            <div className = "item2">
              <div className ="legend-icon legend-standby"></div>
              <span className = "redcol">Average Wait Time</span>
            </div>
            <select className="selections">
              <option value="Hourly">Hourly</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </div>
        </div>
        <div className = "areachartgraph">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="totalMiles" stroke="#FFB91E" fill="#FFB91E" strokeDasharray="5 5"  />
              <Area type="monotone" dataKey="waitTime" stroke="#FE6A3A" fill="#FE6A3A" strokeDasharray="5 5"   />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

function ThreeGraphs(){
  const data = [
    { name: 'Week 1', early: 1},
    { name: 'Week 2', early: -1},
    { name: 'Week 3', early: -1},
    { name: 'Week 4', early: 1},
  ];

  const data2 = [
  { name: "Jan", fuel: 10, distance: 15 },
  { name: "Feb", fuel: 12, distance: 20 },
  { name: "Mar", fuel: 15, distance: 25 },
  { name: "Apr", fuel: 18, distance: 30 },
  { name: "May", fuel: 22, distance: 35 },
  { name: "Jun", fuel: 32, distance: 148 }, // Special data point
  { name: "Jul", fuel: 25, distance: 40 },
  { name: "Aug", fuel: 28, distance: 45 },
  { name: "Sep", fuel: 20, distance: 50 },
  { name: "Oct", fuel: 18, distance: 38 },
  { name: "Nov", fuel: 15, distance: 28 },
  { name: "Dec", fuel: 12, distance: 22 },
];


  //code first box manually
  return( <>
  <div className = "whiteboxes">
         

  </div>
  <div className = "whiteboxes">
    <div className = "titlesarea">
      <h2>Average Route Duration</h2>
      <div className = "items">
        <div className = "item1">
          <div class="legend-icon legend-green"></div>
          <span>Fuel</span>
        </div>
        <div className = "item2">
          <div className ="legend-icon legend-gray"></div>
          <span >Distance</span>
        </div>
        <select className="selections">
          <option value="Hourly">Hourly</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Annually">Annually</option>
        </select>
      </div>
    </div>
    <ResponsiveContainer width="100%" height={280}>
      <ComposedChart width="100%" height={300} data={data2}>
      <defs>
        <pattern
          id="linedPattern"
          patternUnits="userSpaceOnUse"
          width={8} 
          height={8} 
          patternTransform="rotate(45)" 
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="20"
            stroke="#f0ecec" // Line color
            strokeWidth="2" // Line thickness
          />
        </pattern>
      </defs>
        <XAxis dataKey = "name" fontSize={11} color='rgba(140, 140, 140, 1)'/>
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="distance" barSize={30} fill="url(#linedPattern)" stroke="#f0ecec" strokeWidth={2}/>
        <Line type="monotone" dataKey="fuel" stroke="#3A9010" />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
    <div className = "whiteboxes">
    
    </div>
    </>
  );
}

function TwoGraphs(){
  const punctualityData = [
    { month: "Jan", early: 10, onTime: 70, late: 20 },
    { month: "Feb", early: 12, onTime: 75, late: 13 },
    { month: "Mar", early: 8, onTime: 80, late: 12 },
    { month: "Apr", early: 15, onTime: 70, late: 15 },
    { month: "May", early: 14, onTime: 74, late: 12 },
    { month: "Jun", early: 18, onTime: 72, late: 10 },
    { month: "Jul", early: 20, onTime: 65, late: 15 },
    { month: "Aug", early: 22, onTime: 60, late: 18 },
    { month: "Sep", early: 10, onTime: 80, late: 10 },
    { month: "Oct", early: 13, onTime: 77, late: 10 },
    { month: "Nov", early: 16, onTime: 72, late: 12 },
    { month: "Dec", early: 19, onTime: 70, late: 11 },
  ];
  return(
    <>
    <div className = "box1graph notisx">
      <div className = "titlesarea">
        <div className = "titlepart">
          <h2>Punctuality</h2>
          <h3>Y-axis</h3><span> Minutes</span>
          <h3>X-axis</h3><span> Month</span>
        </div>

        <div className = "items">
          <select className="selections">
            <option value="Hourly">Hourly</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Annually">Annually</option>
          </select>
        </div>
      </div>
      <LineChart width={730} height={250} data={punctualityData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="early" stroke="rgba(58, 144, 16, 1)" />
        <Line type="monotone" dataKey="onTime" stroke="rgba(218, 252, 8, 1)" />
        <Line type="monotone" dataKey="late" stroke="rgba(254, 106, 58, 1)" />
      </LineChart>
    </div>
    <div className = "box2graph notisx">

    </div>
    </>

  );
}
function App() {
  React.useEffect(() => {
    // Set the CSS variable for the image path
    document.documentElement.style.setProperty("--striped-line", `url(${stripedline})`);
  }, []);
  return (
    <div className="App">
      <Subheader />
      <div className = "appright">
        <div className = "appheader">
          <Mainheader />
        </div>
        <div className = "boxes">
          <div className = "row1">
            <Row1 i = {0}  title = {"On-Time Rate"} imgsrc = {time} statnum = {34} percent = {6.08}/>
            <Row1 i = {1}  title = {"Students Transported"} imgsrc = {bus} statnum = {2552} percent = {6.08}/>
            <Row1 i = {2}  title = {"Active Routes"} imgsrc = {map} statnum = {56} percent = {-0.03}/>
            <Row1 i = {2}  title = {"Safety Alerts"} imgsrc = {safety} statnum = {150} percent = {15.03}/>
          </div>
          <div className = "row2">
            <Map/>
            <div class="legend2">
              <div className = "legend2-title">
                <h2>Transportation Budget Usage</h2>
                <select className="selections">
                        <option value="Hourly">Hourly</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Annually">Annually</option>
                </select>
              </div>
              <div className = "barcharts">
                <div className = "barchart1">
                  <TransportationBudget name = {"Abington Ave School"} Value1 = {47} Value2 = {53} color1 = {"green"} color2 = {"dash"}/>
                </div>
                <div className = "barchart2">
                  <TransportationBudget name = {"Chancellor Ave School"} Value1 = {98} Value2 = {128} color1 = {"red"} color2 = {"dash"}/>
                </div>
                <div className = "barchart3">
                  <TransportationBudget name = {"Arts HS"} Value1 = {52} Value2 = {78} color1 = {"yellow"} color2 = {"dash"} />
                </div>
              </div>
            </div>
          </div>
          <div className = "row3">
            <PerformanceGraph/>
          </div>
          <div className = "row4">
            <ThreeGraphs/>
          </div>
          <div className = "row5">
            <TwoGraphs/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
