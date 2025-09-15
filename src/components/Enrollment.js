import React, { useState } from 'react';

import { Container, Box, Grid, Button, TextField,Typography } from "@mui/material";
import "./Enrollment.css";


function Enrollment() {
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
        
            <Container maxWidth={false} disableGutters sx={{ bgcolor: '#dddbda'}}>
                
                    {/*this is the upper grid*/}
                    <Grid container spacing={4} alignItems="center" className="upperGrid">
                        {/*this is the first grid inside the upper grid*/}
                        <Grid item size={{xs:12, md:4}} className="upperGridTitle">
                            
                                <p> <h1 className="title">Join our family at a Kids Place Childcare</h1> </p>
                                {/*this is where the contact form starts*/}
                                <Box component="form" onSubmit={handleCallNow} className='callNowForm'>
                                <Typography>Name</Typography>
                                    <TextField  
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    error={!!errors.name} 
                                    helperText={errors.name} 
                                    sx={{backgroundColor: 'white'}}
                                    /> 
                            
                                <Typography>Phone</Typography>
                                    <TextField
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        error={!!errors.phone}
                                        helperText={errors.phone}
                                        sx={{backgroundColor: 'white',}}
                                    />

                                    <Typography>Email</Typography>
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
                        </Grid>

                        {/*this is the second grid inside the upper grid*/}
                        <Grid item size={{xs:12, md:8}} >
                            <img src={"image1.png"} alt="Image1" className="upperGridImage"/> 
                        </Grid>
                    </Grid>

                    {/*this is the lower grid*/}
                    <Grid container spacing={4} alignItems="center" className="lowerGrid">
                        {/*this is the first grid inside the lower grid*/}
                        <Grid item size={{xs:12, md:4}} className="enrollmentTitle">
                                <h1 className="title"> Enrollment</h1>
                                <h2>Join our family at a Kids Place Childcare</h2>
                                <img src={`image2.png`} alt='Image2' className="lowerGridImage" />   
                        </Grid>
                        {/*this is the second grid inside the lower grid*/}
                        <Grid item size={{xs:12, md:8}} className="enrollmentDetails" >
                            
                                                    <p>
                                We are thrilled to welcome new families to A Kids Place Childcare! 
                                Enrolling your child in our program is easy and we are here to assist you every step of the way.
                            </p>

                            <h3>How to Enrol:</h3>

                            <ol>
                                <li>
                                <strong>Tour Our Facility:</strong> Schedule a visit to see our vibrant learning spaces and meet our friendly staff.
                                </li>
                                <li>
                                <strong>Meet & Greet:</strong> Join us for a meeting to discuss your child’s needs and our program offerings.
                                </li>
                                <li>
                                <strong>Complete the Application:</strong> Fill out the enrolment forms and provide necessary documents.
                                </li>
                                <li>
                                <strong>Secure Your Spot:</strong> Submit the required deposit to secure your child’s place in our program.
                                </li>
                            </ol>

                            <p>
                                For more information or to start the enrolment process, please contact us at <a href="tel:4407785671">440-778-5671</a> or <a href="mailto:mskapes@gmail.com">mskapes@gmail.com</a>.
                            </p>

                            <p>
                                <strong>Enrolment Hours:</strong><br />
                                Monday to Friday, 8:00 AM - 5:00 PM
                            </p>

                            <p>
                                We look forward to partnering with you in your child's early education journey!
                            </p>
                        </Grid>
                    </Grid>
             
            </Container>
       
    );
}

export default Enrollment;
