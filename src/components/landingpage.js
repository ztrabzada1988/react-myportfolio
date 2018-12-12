import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={require('../img/code-cutout.png')}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">   
                            <h1>Web Developer & Blockchain Enthusiast</h1>

                            <hr/>

                            <p>HTML | CSS | Javascript | React | Redux | NodeJS | Express | WordPress | Solidity</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://linkedin.com/in/zubair-trabzada"  rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/ztrabzada1988?tab=overview&from=2017-12-01&to=2017-12-31"  rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Medium */}
                                <a href="https://medium.com/@cryptonia"  rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-medium" aria-hidden="true" />
                                </a>

                                {/* Medium */}
                                <a href="mailto:zubair.trabzada@gmail.com"  rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;