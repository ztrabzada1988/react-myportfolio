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
                <div className="project-cards">
                    <div className="projects-grid">
                        {/* My Portfolio */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSi-blSQwnpwJ9ODkRyfjs3QQYdekT2GtNs9uMwVnypzvK56MF9g")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>My Portfolio</h6>
                                Youtube Api Project built with react and youtube api. Youtube Api Project built with react and youtube api
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/react-myportfolio" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/react-myportfolio" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>
                    
                        {/* YouTube API App */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://i.pinimg.com/originals/00/6f/fd/006ffd872df01f4e422965806dbc6a5d.png")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>YouTube API Project</h6>
                                Youtube Api Project built with react and youtube api. Youtube Api Project built with react and youtube api
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/youtube-app" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/youtube-app" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* React Reminder App */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("http://citycampus.gr/wp-content/uploads/2018/08/072518-to-do-list.jpg")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Task Reminder App</h6>
                                Youtube Api Project built with react and youtube api. Youtube Api Project built with react and youtube api
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/reminderApp" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/reminderApp" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* Photo Finder */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto', borderRadius: '10px'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '220px', backgroundImage: 'url("https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/04/slow-shutter-speed-hero-01.jpg?itok=HiXaCFkW")', backgroundSize: 'cover'}}></CardTitle>
                            <CardText style={{ color: '#222222' }}>
                                <h6 style={{ margin: '0px', fontWeight: 'bold', paddingBottom: '8px' }}>Image Finder App</h6>
                                Youtube Api Project built with react and youtube api. Youtube Api Project built with react and youtube api
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
                        <Card shadow={5} style={{minWidth: '450', margin: '11px', borderRadius: '10px'}}>
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
                    </div>

                </div>

            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    
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
                        <Card shadow={5} style={{minWidth: '450', margin: '11px', borderRadius: '10px'}}>
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
                </div>
            );
        } else if(this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Ethereum Lottery */}
                    <Card shadow={5} style={{minWidth: '450', margin: '11px', borderRadius: '10px'}}>
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
                    <Card shadow={5} style={{minWidth: '450', margin: '11px', borderRadius: '10px'}}>
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