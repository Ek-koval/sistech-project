import { Container, Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";


const Footer = () => {

    return (
        <Container maxWidth={false} sx={{ paddingRight: "0px", paddingLeft: "0px" }} disableGutters>
            <Box sx={{ bgcolor: 'rgba(198, 148, 82, 0.85)', height: '226px', width: '1' }}>
                <Grid container spacing={2} style={{ display: "flex", alignItems: "center", height: '226px' }}>
                    <Grid item style={{ display: "flex", alignItems: "center", paddingLeft: "183px" }} direction="row"
                        alignItems="flex-end"
                        justify="center" size={6}>

                        <ImageList cols={6}>
                            <ImageListItem key="Logo">
                                <Box>
                                <img
                                    srcSet={`logo.png`}
                                    src={`logo.png`}
                                    alt='Logo'
                                    sx={{ height: '33px' }}
                                />
                                </Box>
                            </ImageListItem>
                            <ImageListItem key="Facebook">
                                <Box>
                                    <img
                                        srcSet={`facebook.png`}
                                        src={`facebook.png`}
                                        alt='Facebook'
                                        sx={{ height: '33px' }}
                                    />
                                </Box>
                            </ImageListItem>
                        </ImageList>

                    </Grid>
                    <Grid item size={6}>
                        <Typography>30121 Lorain Rb. Norb Olmster, OH 44070</Typography>
                        <Typography>440-778-5671 or mskapes@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
export default Footer;