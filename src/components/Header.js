import { Container, Box, Grid, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth={false} sx={{ paddingRight: "0px", paddingLeft: "0px" }} disableGutters>
      <Box sx={{ bgcolor: '#dddbda', height: '62px', width: '1' }}>
        <Grid container spacing={2} style={{ display: "flex", alignItems: "center", height: '62px' }}>
          
          {/* Logo */}
          <Grid item style={{ display: "flex", alignItems: "center", paddingLeft: "63px" }} xs={9}>
            <img
              src={`logo.png`}
              alt='Logo'
              height={50}
            />
          </Grid>

          {/* About us */}
          <Grid item xs={1}>
            <Button variant="text">About us</Button>
          </Grid>

          {/* Curriculum */}
          <Grid item xs={1}>
            <Button variant="text" onClick={() => navigate('/curriculum')}>
              Curriculum
            </Button>
          </Grid>

          {/* Enrollment */}
          <Grid item xs={1}>
            <Button variant="text" onClick={() => navigate('/enrollment')}>
              Enrollment
            </Button>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
};

export default Header;
