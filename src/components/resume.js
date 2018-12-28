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
                            major="B.S. in Structural Engineering"
                            schoolDescription="Completed studies in advance mathematics, structural engineering, statistics, problem solving, engineering design subjects, technical writing, and etc."
                        />

                        <Education 
                            schoolName="Thinkful Coding Bootcamp"
                            major="Full Stack Web Development"
                            schoolDescription="Completed coding bootcamp in full stack web development with HTML, CSS, JavaScript, React.js, Redux, Node.js, jQuery, Webpack, Express, Bootstrap, Heroku, and GitHub"
                        />

                        <Education 
                            schoolName="Udemy"
                            major="Web Development (Continuously Learning)"
                            schoolDescription="I am constantly taking courses on Udemy to keep my skills up to date. So far, I have taken 10 courses in various Web and Blockchain development topics."
                        />
                        <hr style={{borderTop: '3px sold #e22947'}} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName="Technical Project Manager "
                            jobDescription={<ul>
                                    <li>Built and launched the entire Bitypes.com website from start to finish. Maintain website and report user analytics to the founders</li>
                                    <li>Aid in marketing company’s products and services to potential customers.</li>
                                    <li>Provide user research and be the voice of customers to the company</li>
                                    <li>Explain complex blockchain and cryptocurrency topics to non-technical customers.</li>
                                    <li>Constantly research blockchain and cryptocurrency regulations to provide the most</li>
                                    <li>updated information to the founders for better product delivery.</li>
                                    <li>Study cryptocurrency markets and provide user behavior report to recommend future business opportunities for the company.</li>
                                    <li>Provide weekly reports on cryptocurrency market liquidity on different exchanges(mainly Coinbase, Binance, Bittrex, Poloniex).</li>
                                    <li>Attend blockchain meetups and conferences in the San Francisco Bay Area to study overall blockchain community interest.</li>
                                    <li>Observing community strength and involvement of new blockchain projects by participating in all online media platforms (reddit, twitter, slack, telegram, and etc).</li>
                                </ul>}
                        />

                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName="Cryptocurrency/Blockchain Researcher, Writer, Investor, Marketer (Freelance Work/Personal Projects)"
                            jobDescription={
                                <ul>
                                    <li>Passionately researching blockchain projects and new cryptocurrencies to gain more knowledge and invest appropriately.</li>
	                                <li>Attending meetups in the San Francisco Bay Area to meet founding members of new blockchain companies and developers.</li>
                                    <li>Researching and writing (medium.com) articles on blockchain, cryptography, and cryptocurrencies.</li>
                                    <li>Doing one-on-one marketing for ICOs and other cryptocurrencies online (reddit.com, discord, telegram) and during evening meetups in the San Francisco Bay Area.</li>
                                    <li>Thoroughly evaluating white papers and GitHub code of new blockchain projects before investing.</li>
                                    <li>Investigating technical and marketing team members (LinkedIn profiles, meeting one-on- one during meetups if possible, looking at education background, and etc.) of new blockchain project before investing.</li>
                                </ul>
                            }
                        />


                        <Experience
                            startYear={2012}
                            endYear={2017}
                            jobName="Project Engineer at C&S Engineers Inc & Langan Engineering Inc."
                            jobDescription={
                                <ul>
                                    <li>Design and implementation of various engineering projects</li>
                                    <li>Overseeing projects from start to finish (design, calculations, budgeting amd prioritizing tasks, and etc.)</li>
                                    <li>Responding to information requests from onsite contractors regarding design and calculations of ongoing projects</li>
                                    <li>Solving daily problems faced on site and in the office to make sure projects completes on time and budget</li>
                                    <li>Training new engineers on daily tasks.</li>
                                    <li>Prioritizing capital improvement projects and managing contractors from start to finish.</li>
                                    <li>Reviewing calculations and plans of contracted engineers.</li>
                                    <li>Handling daily communications between public and staff for the department.</li>
                                    <li>Incorporating new software to make routine tasks more efficient.</li>
                                    <li>Overall management (reports, calculation, meetings, and other tasks) of company owned and privately contracted projects related to the engineering department.</li>
                                </ul>
                            }
                        />

                        <hr style={{borderTop: '3px sold #e22947'}} />

                        <h2>Skills</h2>
                        <Skills 
                            skill="Javascript"
                            progress={90}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills 
                            skill="React"
                            progress={80}
                        />
                        <Skills 
                            skill="Ethereum/Solidity"
                            progress={25}
                        />

                    </Cell>    
                </Grid>    
            </div>
        )
    }
}

export default Resume;