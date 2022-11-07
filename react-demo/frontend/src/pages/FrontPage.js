import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  makeVisFlexible,
  RadialChart,
  RadarChart,
  CircularGridLines,
} from "react-vis";
import Grid from "@mui/material/Unstable_Grid2";
import "react-vis/dist/style.css";

const FlexibleRadialChart = makeVisFlexible(RadialChart);

export default function FrontPage() {
  const [dashboard, setDashboard] = useState({
    donutGraph: [
      { angle: 1, innerRadius: 0.8 },
      { angle: 5, innerRadius: 0.8 },
      { angle: 2, innerRadius: 0.8 },
    ],
  });

  const fetchData = () => {
    fetch("http://localhost:4000/dashboard")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDashboard(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DATA = [
    {
      explosions: 7,
      wow: 10,
      dog: 8,
      sickMoves: 9,
      nice: 7,
    },
  ];

  const DOMAIN = [
    { name: "nice", domain: [0, 100], tickFormat: (t) => t },
    { name: "explosions", domain: [6.9, 7.1] },
    { name: "wow", domain: [0, 11] },
    { name: "dog", domain: [0, 16] },
    { name: "sickMoves", domain: [0, 20] },
  ];

  return (
    <div>
      <Typography variant="h4" component="h1">
        Front page
      </Typography>
      Hello front page! {dashboard.dailyCalorieCount}
      <Grid container spacing={2}>
        <Grid xs={6}>
          <FlexibleRadialChart data={dashboard.donutGraph} height={300} />
        </Grid>
        <Grid xs={6}>
          <Typography variant="h4">Calories today 1260</Typography>
          <Typography variant="h5">Fat today 300</Typography>
          <Typography variant="h5">Protein today 540</Typography>
        </Grid>
        <Grid xs={6}>
          <RadarChart
            animation
            data={DATA}
            domains={DOMAIN}
            style={{
              polygons: {
                fillOpacity: 0,
                strokeWidth: 3,
              },
              axes: {
                text: {
                  opacity: 1,
                },
              },
              labels: {
                textAnchor: "middle",
              },
            }}
            margin={{
              left: 30,
              top: 30,
              bottom: 40,
              right: 50,
            }}
            tickFormat={(t) => ""}
            width={300}
            height={300}
          >
            <CircularGridLines
              tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
            />
          </RadarChart>
        </Grid>
      </Grid>
    </div>
  );
}
