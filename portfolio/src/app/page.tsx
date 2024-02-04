"use client";
import React from "react";
import { Typography, Box, Slide } from "@mui/material";
import { styled } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "@mui/material/Link";
import CardComponent from "@/Components/CardComponent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import useMediaQuery from "@mui/material/useMediaQuery";
const theme = createTheme();

theme.typography.h1 = {
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "5.5rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "6.8rem",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "7rem",
  },
};
theme.typography.h4 = {
  [theme.breakpoints.between("xs", "sm")]: {
    fontSize: "1.5rem",
    marginInline: "0.6rem",
  },
};

const StyledBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));
const SoftBox = styled(Box)(({ theme }) => ({
  minHeight: "15%",
  minWidth: "20%",
  backgroundColor: "#28282B",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  fontSize: "2rem",
  margin: "1.3rem",
  // marginInline:"2rem"

  [theme.breakpoints.between("xs", "sm")]: {
    minHeight: "13%",
    minWidth: "70%",
    margin: "3rem",
  },
  [theme.breakpoints.between("sm", "md")]: {
    minHeight: "10%",
    margin: "3rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    minHeight: "15%",
    minWidth: "15%",
    margin: "3rem",
  },
}));
const IconsBox = styled(Box)(() => ({
  height: "15%",
  width: "40%",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "5%",
  [theme.breakpoints.between("xs", "sm")]: {
    minHeight: "13%",
    minWidth: "70%",
  },
}));

export default function Home() {
  const { ref, inView } = useInView();
  const { ref: soft, inView: softInView } = useInView();
  const { ref: bio, inView: bioInView } = useInView();
  const { ref: git, inView: gitInView } = useInView();
  const { ref: insta, inView: instaInView } = useInView();
  const { ref: linkedin, inView: linkedinInView } = useInView();

  const isMobile = useMediaQuery("(max-width:599px)");
  // console.log(isMobile);

  return (
    <>
      <StyledBox>
        <ThemeProvider theme={theme}>
          <Typography gutterBottom variant="h5" color="white">
            Hello ,I am
          </Typography>
          <Fade in={inView} timeout={900}>
            <Typography gutterBottom variant="h1" color="white" ref={ref}>
              Abhinay Jetti
            </Typography>
          </Fade>
        </ThemeProvider>
        <Fade in={softInView} timeout={1500}>
          <SoftBox ref={soft}>
            <ThemeProvider theme={theme}>
              <Typography variant="h4">Software Developer</Typography>
            </ThemeProvider>
          </SoftBox>
        </Fade>
        <IconsBox>
          <Grow
            in={gitInView}
            style={{ transformOrigin: "0 0 0" }}
            timeout={1000}
          >
            <Link
              href="https://github.com/xfacor9390j?tab=repositories"
              color={"#fce4ec"}
            >
              <GitHubIcon
                ref={git}
                sx={{
                  marginInline: "0.9rem",
                  fontSize: "3rem",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Link>
          </Grow>
          <Grow
            in={linkedinInView}
            style={{ transformOrigin: "0 0 0" }}
            timeout={2000}
          >
            <Link
              href="https://www.linkedin.com/in/abhinay-jetti-7443b622b/"
              color={"#fce4ec"}
            >
              <LinkedInIcon
                ref={linkedin}
                sx={{
                  marginInline: "0.9rem",
                  fontSize: "3rem",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Link>
          </Grow>

          <Grow
            in={instaInView}
            style={{ transformOrigin: "0 0 0" }}
            timeout={3000}
          >
            <Link
              href="https://www.instagram.com/abhinay_jetti/"
              color={"#fce4ec"}
            >
              <InstagramIcon
                ref={insta}
                sx={{
                  fontSize: "3rem",
                  marginInline: "0.9rem",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
            </Link>
          </Grow>
        </IconsBox>
      </StyledBox>
      <Fade in={bioInView} timeout={2000}>
        {/* <Box ref={bio}> */}
        <CardComponent ref={bio} />
        {/* </Box> */}
      </Fade>
    </>
  );
}
