import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { Link } from 'react-router-dom';

export default function Appbar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">

                    <Link to="/">
                        <div style={{
                            display: 'inline-block',
                            width: '100px',
                            textAlign: 'center',
                            padding: '20px',
                            color: 'white'
                        }}
                            onMouseOver={(e) => { e.target.style.backgroundColor = 'darkblue' }}
                            onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent' }}>
                            Home
                        </div>
                    </Link>

                    <Link to="/page1">
                        <div style={{
                            display: 'inline-block',
                            width: '100px',
                            textAlign: 'center',
                            padding: '20px',
                            color: 'white'
                        }}
                            onMouseOver={(e) => { e.target.style.backgroundColor = 'darkblue' }}
                            onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent' }}>
                            Page1
                        </div>
                    </Link>

                    <Link to="/page2">
                        <div style={{
                            display: 'inline-block',
                            width: '100px',
                            textAlign: 'center',
                            padding: '20px',
                            color: 'white'
                        }}
                            onMouseOver={(e) => { e.target.style.backgroundColor = 'darkblue' }}
                            onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent' }}
                        >
                            Page2
                        </div>
                    </Link>

                    <Link to="/page3">
                        <div style={{
                            display: 'inline-block',
                            width: '100px',
                            textAlign: 'center',
                            padding: '20px',
                            color: 'white'
                        }}
                            onMouseOver={(e) => { e.target.style.backgroundColor = 'darkblue' }}
                            onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent' }}
                        >
                            Page 3
                        </div>
                    </Link>

                </Toolbar>
            </AppBar>

        </div>
    )
}
