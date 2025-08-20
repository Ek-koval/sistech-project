import React, { useState } from 'react';

import { Container, Box, Grid, Button, TextField,Typography } from "@mui/material";
import ResponsiveParagraph from './ResponsiveParagraph';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
        else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCallNow = (e) => {
        e.preventDefault();
        if (validate()) {
            // Simulate call or send data
            alert(`Calling ${formData.name} at ${formData.phone}`);
        }
    };

    return (
        <Container maxWidth={false} disableGutters sx={{ paddingX: 0 }}>
            <Box sx={{ bgcolor: '#dddbda', width: '100%', py: 4 }}>



                <Grid container spacing={4} alignItems="center">
                    <Grid item size={{xs:12, md:4}} sx={{ textAlign: 'center'}}>
                        <Box sx={{ paddingLeft: 4 }}>
                            <ResponsiveParagraph>
                            <h1 style={{ color: '#405500' }}>Join our family at a Kids Place Childcare</h1>
                            </ResponsiveParagraph>
                            
                            <Box
                                component="form"
                                onSubmit={handleCallNow}
                                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 1 }}
                            >
                               <Typography>
                                Name
                                </Typography>

                                <TextField
                                    
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    sx={{backgroundColor: 'white',}} 
                                />

                                <Typography>
                                Phone
                                </Typography>

                                <TextField
                                    
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                    sx={{backgroundColor: 'white',}}
                                />
                                <Typography>
                                Email
                                </Typography>
                                <TextField
                                    
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    sx={{backgroundColor: 'white',}}
                                />
                                <Button variant="contained" type="submit"style={{backgroundColor: '#F0831D'}}>
                                    Call Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item size={{xs:12, md:8}} sx={{ textAlign: 'center'}}>
                        <img
                            src={`image1.png`}
                            alt='Image1'
                            /*height={150}*/    
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Grid>
                </Grid>


                 <Grid container spacing={4} alignItems="center">
                    <Grid item size={{xs:12, md:4}} sx={{ textAlign: 'center'}}>
                        
                            <h1 style={{ color: '#405500' }}>Enrolment</h1>
                            <h2>Join our family at a Kids Place Childcare</h2>
                            <img
                            src={`image2.png`}
                            alt='Image2'
                            /*height={150}*/
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Grid>

                    <Grid item size={{xs:12, md:8}} sx={{ textAlign: 'center'}}>
                        <ResponsiveParagraph>
                                We are thrilled to welcome new families to A Kids Place Childcare! Enrolling your child in our program is easy and we are here to assist you every step of the way.

                        </ResponsiveParagraph>
                        <ResponsiveParagraph>
                            **How to Enrol:**
                        </ResponsiveParagraph>
                        <ResponsiveParagraph >
                            <ol style={{ paddingLeft: '1.5rem', textAlign: 'left', margin: '0 auto', display: 'inline-block' }}>
                                <li>
                                **Tour Our Facility:** Schedule a visit to see our vibrant learning spaces and meet our friendly staff.
                                </li>
                                <li>
                                **Meet &amp; Greet:** Join us for a meeting to discuss your child’s needs and our program offerings.
                                </li>
                                <li>
                                **Complete the Application:** Fill out the enrolment forms and provide necessary documents.
                                </li>
                                <li>
                                **Secure Your Spot:** Submit the required deposit to secure your child’s place in our program.
                                </li>
                            </ol>
                        </ResponsiveParagraph>

                        <ResponsiveParagraph>
                            For more information or to start the enrolment process, please contact us at 440-778-5671 or mskapes@gmail.com.
                        </ResponsiveParagraph>

                        <ResponsiveParagraph>
                            **Enrolment Hours:**<br />
                            Monday to Friday, 8:00 AM - 5:00 PM
                        </ResponsiveParagraph>

                        <ResponsiveParagraph last>
                            We look forward to partnering with you in your child's early education journey!
                        </ResponsiveParagraph> 
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default ContactForm;