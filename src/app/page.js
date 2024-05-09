'use client';
import React from "react";
import { Button, Box, Grid, Stack, TextField, Typography, List, ListItem, Container } from "@mui/material";
import { EastOutlined } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect, useRef} from "react";
import { Chart } from "chart.js/auto";
export default function Home() {
  const Personalboton = styled(Button)({
    backgroundColor: '#2c387e', // Azul marino
    color: '#ffffff', // Blanco
    '&:hover': {
      backgroundColor: '#003366', // color rojo más oscuro al pasar el ratón
    },
  });
  const RedCircularButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: '#ff0000', // color rojo
    color: '#ffffff', // color blanco para el icono
    '&:hover': {
      backgroundColor: '#cc0000', // color rojo más oscuro al pasar el ratón
    },
  }));

  const chartRef = useRef(null);
  useEffect (() =>{
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy()
      }
      const context = chartRef.current.getContext("2d");
      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: ["1992","1995", "1998","2001","2003","2007","2012","2015","2017"],
          datasets: [
            {
             label: "Grafico",
              data: [0,3,2,4,4.5,3,2.5,3.8,5],
             
              borderColor: ["rgb(255, 99, 192, 0.2)"],
              backgroundColor:["rgb(255,99,132)"],
              borderWidth: 1,
            },    
          ],
          
        },
        options:{
          scales:{
            x:{
              type: "category",
            },
            y:{
              beginAtZero: true
            }
          } 
        }
      });
     
      chartRef.current.chart = newChart
    }
  },[])
  
  
  return (

    <Stack 
      alignItems='center' >
      
      <Stack p={2} spacing={2} sx={{
        bgcolor: 'white',
        width: '500px',
        alignSelf: 'center',
        borderRadius: '5px',
        marginTop: '5%'

      }}>

        <Container>
        <RedCircularButton sx={{
        position: 'relative',
     top: '-30px',
     left:'460px',
  
      }} >
        <CloseIcon />
      </RedCircularButton>
          <Grid container spacing={1} >
            <Grid item md={9}>
              <List sx={{ alignContent: 'center', }}>
                <ListItem >
                  <Typography variant="h5" sx={{ color: '#2c387e', }}>
                    CURRENCY CONVERTER
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" fontSize={13} color='gray' sx={{ alignSelf: 'revert-layer' }}>
                    1 dhs equals
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography variant="Subtitle1" fontSize={15} color='black' sx={{ alignSelf: 'revert-layer' }}>
                    17.39 Indian Rupee
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Stack alignItems='center' p={1} width='435px' spacing={2} direction='row' useFlexGap >
            <TextField
              label="AED"
              size="small"
              sx={{
                bgcolor: '#e0e0e0'
              }}
            />
            <EastOutlined  />
            <TextField
              bgcolor='gray'
              size="small"
              label="INR"
              sx={{
                bgcolor: '#e0e0e0'
              }}
            />

          </Stack>
          <Stack alignItems='center'   >
            <Personalboton variant='container' sx={{
              marginTop: '10px',
              text: 'white',
              width: '460px'
            }}
            >Result</Personalboton>
          </Stack>
          <div style={{position:"relative", width: '1000px' ,height: "200px"} }>
          <canvas ref={chartRef}/>
          </div>
        </Container>
      </Stack>
    </Stack>


  );
}
