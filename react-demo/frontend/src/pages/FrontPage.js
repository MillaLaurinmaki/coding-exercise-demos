import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { makeVisFlexible, RadialChart } from "react-vis";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "react-vis/dist/style.css";
import SimpleAccordion from "../components/SimpleAccordion";

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

  return (
    <div>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Typography variant="h4" component="h1">
          Front page
        </Typography>
      Hello front page! {dashboard.dailyCalorieCount}
      </Box>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <FlexibleRadialChart data={dashboard.donutGraph} height={300} />
        </Grid>
        <Grid xs={12}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={10}
          >
            <Box display="flex" alignItems="center" flexDirection="column">
              <RadialChart
                data={dashboard.donutGraph}
                width={100}
                height={100}
              />
              <Typography variant="body">Step count</Typography>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="column">
              <RadialChart
                data={dashboard.donutGraph}
                width={100}
                height={100}
              />
              <Typography variant="body">In-zone minutes</Typography>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="column">
              <RadialChart
                data={dashboard.donutGraph}
                width={100}
                height={100}
              />
              <Typography variant="body">Foobar count</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12}>
          <SimpleAccordion />
        </Grid>
      </Grid>
    </div>
  );
}
