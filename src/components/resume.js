import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                            alt="avatar" 
                            style={{height: "250px"}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Zubair Trabzada</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p> 1 Hacker Way, Menlo Park, CA 95050</p>
                        <h5>Phone</h5>
                        <p>(510) 657-8769</p>
                        <h5>Email</h5>
                        <p>hello@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    
                    
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>    
                </Grid>    
            </div>
        )
    }
}

export default Resume;