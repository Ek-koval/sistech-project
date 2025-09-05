import { Container, Box, Grid, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth={false} disableGutters>
      <Box 
        sx={{ 
          bgcolor: '#dddbda', 
          height: '62px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 8  // padding left/right = 64px
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img
            src={`logo.png`}
            alt='Logo'
            height={38}
          />
        </Box>

        {/* Menu */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Button variant="text" onClick={() => navigate('/curriculum')}>
            Curriculum
          </Button>
          <Button variant="text" onClick={() => navigate('/enrollment')}>
            Enrollment
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Header;
