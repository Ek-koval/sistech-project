import { Container, Box, Button } from "@mui/material";

const Header = () => {
  
  return (
     <Container maxWidth={false} sx={{paddingRight: "0px", paddingLeft: "0px"}} disableGutters>
         <Box sx={{ bgcolor: '#dddbda', height: '62px', width: '1' }}>
          <Button variant="text">Text</Button>
          </Box>
     </Container>
  );
}
export default Header;