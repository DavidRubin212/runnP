import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography } from '@mui/material';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        familyName: '',
        email: '',
        password: '',
        dateOfBirth: '',
        averageRunningLength: 0,
        averagePace: 0,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Implement your submit logic here
        console.log(formData);
    };

    return (
        <Container component="main" maxWidth="xs">
            <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="name"
                                label="Name"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="familyName"
                                label="Family Name"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="dateOfBirth"
                                label="Date of Birth"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="averageRunningLength"
                                label="Average Running Length (km)"
                                type="number"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="averagePace"
                                label="Average Pace (min/km)"
                                type="number"
                                onChange={handleInputChange}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '24px 0px 16px' }}>
                        Register
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Register;
