import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">   
                            <h1>Fullstack Web Developer</h1>

                            <hr/>

                            <p>HTML | CSS | Javascript | React | NodeJS | Express | WordPress</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;