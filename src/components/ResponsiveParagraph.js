import { Typography } from '@mui/material';

const ResponsiveParagraph = ({ children, last = false }) => {
  return (
    <Typography
      variant="body1"
      paragraph
      sx={{
        fontSize: { xs: '1rem', md: '1.25rem' }, // responsive font size
        mb: last ? 0 : { xs: 2, md: 3 }, // remove bottom margin if it's the last paragraph
        textAlign: 'center',
      }}
    >
      {children}
    </Typography>
  );
};

export default ResponsiveParagraph;