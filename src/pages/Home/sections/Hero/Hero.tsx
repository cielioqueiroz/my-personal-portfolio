import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Avatar from "../../../../assets/images/avatar.jpeg";
import StyledButton from './../../../../componentes/StyledButton/StyledButton';
import { AnimatedBackground } from './../../../../componentes/AnimatedBackground/AnimatedBackground';


const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display:"flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]:{
      paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]:{
      paddingTop: "0",
    }
  }));

  const StyledImg = styled("img")(({theme}) => ({
    width: "75%",
    borderRadius: "50%",
    border:`2px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"}  top={-100} right={0}>
                  <AnimatedBackground />
                </Box>  
                <Box position="relative"textAlign="center">
                  <StyledImg src={Avatar} alt="imagem do Perfil" />                  
                </Box>              
              </Box>
              
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Ciélio Queiroz</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Web Developer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={2} pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("download")}>
                    <DownloadIcon />
                      <Typography>
                        Download CV
                      </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("contact")}>
                    <MailOutlineIcon />
                     <Typography>
                       Contact me                        
                      </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
