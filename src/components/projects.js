import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategorries() {
        if(this.state.activeTab === 0) {
            return (
                <div>
                    <div className="projects-grid" style= {{ marginTop: '30px', float: 'left' }}>
                        {/* My Portfolio */}
                        <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSi-blSQwnpwJ9ODkRyfjs3QQYdekT2GtNs9uMwVnypzvK56MF9g")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>My Portfolio</h6>
                                Multi-page portfolio website built with React JS. React Material Design Lite is used mainly for component design. HTML and CSS is used for all styling.  
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/react-myportfolio" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/react-myportfolio" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>
                    
                        {/* YouTube API App */}
                        <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://i.pinimg.com/originals/00/6f/fd/006ffd872df01f4e422965806dbc6a5d.png")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>YouTube API Project</h6>
                                A faster YouTube app with instant search. This YouTube app is built with React JS. YouTube's api is used to retrieve all the videos. HTML and CSS used for simple styling.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/youtube-app" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/youtube-app" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* React Reminder App */}
                        <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("http://citycampus.gr/wp-content/uploads/2018/08/072518-to-do-list.jpg")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Task Reminder App</h6>
                                A simple task reminder app built with React and Redux. No react library used besides npm packages. Simple styling is done with HTML and CSS. 
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/reminderApp" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/reminderApp" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* Photo Finder */}
                        <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/04/slow-shutter-speed-hero-01.jpg?itok=HiXaCFkW")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Image Finder App</h6>
                                Built with React JS (Material UI), this app uses PixaBay's API to search for stunning photos. User can select photos per page shown from a drop down menu. HTML + CSS for styling.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/photo-search" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/photo-search" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className="projects-grid" style= {{ marginTop: '30px', float: 'left' }}>
                        {/* Ethereum Kickstarter */}
                        <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("http://www.trbimg.com/img-58643812/turbine/ct-equity-crowdfunding-2016-predictions-bsi-20161229")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Ethereum Crowd Fundraiser</h6>
                                Youtube Api Project built with react and youtube api. Youtube Api Project built with react and youtube api
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/photo-search" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/photo-search" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* Ethereum Lottery */}
                        <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("http://msbusiness.com/wp-content/uploads/2018/09/lottery-feature_rgb-620x330.jpg")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Ethereum Lottery App</h6>
                                Youtube Api Project built with react and youtube api. Youtube Api Project built with react and youtube api
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/ethereum-lottery-app-react/" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/ethereum-lottery-app-react" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* Bitypes.com */}
                        <Card shadow={5} style={{minWidth: '450', margin: '11px', borderRadius: '10px'}}>
                        <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://today.ucf.edu/files/2018/08/iStock-892082986.jpg")', backgroundSize: 'cover'}}></CardTitle>
                        <CardText style={{ color: '#222222' }}>
                            <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Bitypes.com</h6>
                            Youtube Api Project built with react and youtube api. Youtube Api Project built with react and youtube api
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://bitypes.com" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>Website</a></Button>
                        </CardActions>
                        </Card>
                    </div>

                </div>

            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    
                    {/* Ethereum Kickstarter */}
                        <Card shadow={5} style={{minWidth: '450', margin: '11px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("http://msbusiness.com/wp-content/uploads/2018/09/lottery-feature_rgb-620x330.jpg")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Ethereum Lottery App</h6>
                                Built with React JS (Material UI), this app uses PixaBay's API to search for stunning photos. User can select photos per page shown from a drop down menu. HTML + CSS for styling.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/ethereum-lottery-app-react/" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/ethereum-lottery-app-react" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* Ethereum Lottery */}
                        <Card shadow={5} style={{minWidth: '450', margin: '11px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("http://www.trbimg.com/img-58643812/turbine/ct-equity-crowdfunding-2016-predictions-bsi-20161229")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Ethereum Crowd Fundraiser</h6>
                                Built with React JS (Material UI), this app uses PixaBay's API to search for stunning photos. User can select photos per page shown from a drop down menu. HTML + CSS for styling.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/photo-search" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/photo-search" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>
                </div>
            );
        } else if(this.state.activeTab === 2) {
            return (
                <div className="project-cards">
                    <div className="projects-grid">
                        

                        {/* Bitypes.com */}
                        <Card shadow={5} style={{minWidth: '450', marginLeft: '10px', marginRight: '10px', borderRadius: '10px'}}>
                        <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://today.ucf.edu/files/2018/08/iStock-892082986.jpg")', backgroundSize: 'cover'}}></CardTitle>
                        <CardText style={{ color: '#222222' }}>
                            <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Bitypes.com</h6>
                            Built with React JS (Material UI), this app uses PixaBay's API to search for stunning photos. User can select photos per page shown from a drop down menu. HTML + CSS for styling.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://bitypes.com" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>Website</a></Button>
                        </CardActions>
                        </Card>
                    </div>
                    <hr style={{borderTop: '1px solid white', width: '100%', marginTop: '30px'}}/>

                    <h5 style={{ textAlign: 'center' }}>Research Articles I have Written About Blockchain and Cryptocurrencies on medium.com</h5>
                    <div className="projects-grid" style= {{ marginTop: '30px'}}>
                        {/* Crypto 101: A simple guide */}
                        <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://cdn-images-1.medium.com/max/1600/1*qrR3ZryKcoqUgKhd9316Rg.jpeg")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Crypto 101: A simple guide to understanding and researching cryptocurrencies</h6>
                                Built with React JS (Material UI), this app uses PixaBay's API to search for stunning photos. User can select photos per page shown from a drop down menu. HTML + CSS for styling.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://medium.com/@cryptonia/crypto-101-a-simple-guide-to-understanding-and-researching-cryptocurrencies-1da70896aee4" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>Read Article</a></Button>
                            </CardActions>
                        </Card>

                        {/* 5 Cryptocurrencies to watch in 2018 */}
                        <Card shadow={5} style={{minWidth: '450', margin: '10px', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://cdn-images-1.medium.com/max/1600/1*UEKXA0Uy-ahEAdn0IcdR3Q.jpeg")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>5 Cryptocurrencies to watch in 2018</h6>
                                Built with React JS (Material UI), this app uses PixaBay's API to search for stunning photos. User can select photos per page shown from a drop down menu. HTML + CSS for styling.
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://blog.goodaudience.com/5-cryptocurrencies-to-watch-in-2018-47a77e2c17f0" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>Read Article</a></Button>
                            </CardActions>
                        </Card>

                        {/* 5 Reasons why NEO is still undervalued */}
                        <Card shadow={5} style={{minWidth: '450', margin: '11px', borderRadius: '10px'}}>
                        <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://cdn-images-1.medium.com/max/1600/1*Qqs_urBSE9u2OmB5HgYX9g.jpeg")', backgroundSize: 'cover'}}></CardTitle>
                        <CardText style={{ color: '#222222' }}>
                            <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>5 Reasons why NEO is still undervalued</h6>
                            Youtube Api Project built with react and youtube api. Youtube Api Project built with react and youtube api
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://techburst.io/5-reasons-why-neo-is-still-undervalued-65571466b50" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>Read Article</a></Button>
                        </CardActions>
                        </Card>
                    </div>

                </div>
            )
        }
    }

    render() {
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{color: '#2bd49e'}}>React JS</Tab>
                    <Tab style={{color: '#2bd49e'}}>Ethereum</Tab>
                    <Tab style={{color: '#2bd49e'}}>Others</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategorries()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;