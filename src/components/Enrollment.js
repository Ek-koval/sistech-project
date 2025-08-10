import React, { useState } from 'react';

import { Container, Box, Grid, Button, TextField } from "@mui/material";

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
                            <h1>Join our family at a Kids Place Childcare</h1>
                            <Box
                                component="form"
                                onSubmit={handleCallNow}
                                sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 1 }}
                            >
                                <TextField
                                    label="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                />
                                <TextField
                                    label="Phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                />
                                <TextField
                                    label="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                                <Button variant="contained" type="submit" color="primary">
                                    Call Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item size={{xs:12, md:8}} sx={{ textAlign: 'center'}}>
                        <img
                            src={`image1.png`}
                            alt='Image1'
                            height={150}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default ContactForm;