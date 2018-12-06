import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './resume/education';
import Experience from './resume/experience';
import Skills from './resume/skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid style={{marginTop: '70px'}}>
                    <Cell className="resume-left-col" col={4}>
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
                    
                    
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>

                        <Education 
                            schoolName="University at Buffalo"
                            major="B.S. in Civil Engineering"
                            schoolDescription="Completed studies in advance mathematics, structural engineering, statistics, problem solving, civil engineering design subjects, technical writing, and etc."
                        />

                        <Education 
                            schoolName="Thinkful Coding Bootcamp"
                            major="Full Stack Web Development"
                            schoolDescription="Completed coding bootcamp in full stack web development with HTML, CSS, JavaScript, React.js, Redux, Node.js, jQuery, Webpack, Express, Bootstrap, Heroku, and GitHub"
                        />
                        <hr style={{borderTop: '3px sold #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="Technical Project Manager "
                            jobDescription={<ul>
                                    <li>Built and launched the entire Bitypes.com website from start to finish. Maintain website and report user analytics to the founders</li>
                                    <li>Aid in marketing company’s products and services to potential customers.</li>
                                    <li>Provide user research and be the voice of customers to the company</li>
                                    <li>Explain complex blockchain and cryptocurrency topics to non-technical customers.</li>
                                </ul>}
                        />

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="Second Job"
                            jobDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                        />

                        <Experience
                            startYear={2009}
                            endYear={2012}
                            jobName="Third Job"
                            jobDescription="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                        />

                        <hr style={{borderTop: '3px sold #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                            skill="Javascript"
                            progress={90}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={60}
                        />
                        <Skills 
                            skill="React"
                            progress={80}
                        />
                        <Skills 
                            skill="Solidity"
                            progress={25}
                        />

                    </Cell>    
                </Grid>    
            </div>
        )
    }
}

export default Resume;