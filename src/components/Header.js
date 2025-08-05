import { Container, Box, Grid, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth={false} sx={{ paddingRight: "0px", paddingLeft: "0px" }} disableGutters>
      <Box sx={{ bgcolor: '#dddbda', height: '62px', width: '1' }}>
        <Grid container spacing={2} style={{ display: "flex", alignItems: "center", height: '62px' }}>
          <Grid item style={{ display: "flex", alignItems: "center",  paddingLeft: "63px" }} size={9}>
            <img
              srcSet={`logo.png`}
              src={`logo.png`}
              alt='Logo'
              height={50}
            />
          </Grid>
          <Grid item size={1}>
            <Button variant="text">About us</Button>
          </Grid>
          <Grid item size={1}>
            <Button variant="text">Curriculum</Button>
          </Grid>
          <Grid item size={1}>
            <Button variant="text" onClick={() => navigate('/enrollment')}>
              Enrollment</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default Header;