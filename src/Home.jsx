import React from "react";
import person from "./assets/person.jpeg";
import personal from "./assets/personel.png";

import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  RadialBarChart,
  RadialBar,
} from "recharts";

function Home() {
  const data = [
    {
      name: "18-24",
      uv: 31.47,
      pv: 2400,
      fill: "rgb(235, 216, 127)",
    },
    {
      name: "25-29",
      uv: 26.69,
      pv: 4567,
      fill: "rgb(225, 189, 80)",
    },
    {
      name: "30-34",
      uv: 15.69,
      pv: 1398,
      fill: "rgb(220, 160, 44)",
    },
    {
      name: "35-39",
      uv: 8.22,
      pv: 9800,
      fill: "rgb(223, 142, 37)",
    },
    {
      name: "40-49",
      uv: 8.63,
      pv: 3908,
      fill: "rgb(223, 142, 37)",
    },
    {
      name: "50+",
      uv: 2.63,
      pv: 4800,
      fill: "rgb(220, 160, 44)",
    },
    {
      name: "unknow",
      uv: 6.67,
      pv: 4800,
      fill: "rgb(235, 216, 127)",
    },
  ];

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  const data1 = [
    {
    name: "App Development",
    uv: 31.47,
    pv: 2400,
    fill: "rgb(235, 216, 127)"
  },
  {
    name: "Kajarla Tiles Ad.",
    uv: 26.69,
    pv: 4567,
    fill: "rgb(225, 189, 80)"
  },
  {
    name: "Vistara Agreement",
    uv: 15.69,
    pv: 1398,
    fill: "rgb(220, 160, 44)"
  },
  {
    name: "April Month Sales",
    uv: 8.22,
    pv: 9800,
    fill: "rgb(223, 142, 37)"
  },
  // {
  //   name: "40-49",
  //   uv: 8.63,
  //   pv: 3908,
  //   fill: "#a4de6c"
  // },
  // {
  //   name: "50+",
  //   uv: 2.63,
  //   pv: 4800,
  //   fill: "#d0ed57"
  // },
  // {
  //   name: "unknow",
  //   uv: 6.67,
  //   pv: 4800,
  //   fill: "#ffc658"
  // }
  ];
  const style1 = {
    top: "50%",
    right: 400,
    transform: "translate(0, -50%)",
    lineHeight: "40px",
  };
  return (
    <main className="main-container">
      <div className="main-title">
        <h1 style={{ color: "black" }}>Dashboard</h1>
      </div>

      {/* <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>MESSAGES</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div> */}

      <div className="charts">
      
        <ResponsiveContainer width="100%" height="100%">
        
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="rgb(220, 160, 44)" />
            <Bar dataKey="uv" fill="rgb(223, 142, 37)" />
          </BarChart>
        </ResponsiveContainer>
        {/* 
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer> */}

        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="80%"
            cy="50%"
            innerRadius="30%"
            outerRadius="90%"
            barSize={15}
            data={data1}
          >
           <Legend
              iconSize={20}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style1}
            />
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="uv"
            />
           
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="down" >
        <img src={personal} alt="" />
      </div>
       
      </div>

     
    </main>
  );
}

export default Home;
