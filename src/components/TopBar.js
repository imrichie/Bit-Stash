import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function TopBar() {
    return (
        <AppBar position='static' style={{ height: '64px', backgroundColor: '#1976D2' }}>
            <Toolbar>
                <Typography variant='h5' noWrap component='div' sx={{ flexGrow: 1 }}>
                    Bit Stash
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;