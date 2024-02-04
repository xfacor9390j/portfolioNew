import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import abhi from "../../public/abhi.jpg";
type example = {
  ref: boolean | any;
};
export default function CardComponent(props: example) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
       
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          backgroundColor: "#28282B",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <CardActionArea>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="author image"
              src={abhi.src}
              sx={{ width: 150, height: 150, marginTop: "10%" }}
            />
          </Box>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Abhinay Jetti
            </Typography>
            <Typography variant="h6" color="white">
              Hi there!, I am Abhinay, A Software Developer based out of Andra
              Pradesh.I am doing my Mtech (Dual Degree, Final Year) from Indian
              Institute of Information Technology Kancheepuram , Tamil Nadu.I am
              proficient in Java , Typescript and C++ .Now I am exploring
              MicroServices.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
