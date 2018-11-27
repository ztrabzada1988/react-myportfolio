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
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/08/20/14/37/eat-2661935__480.jpg")', backgroundSize: 'cover'}}>My Portfolio</CardTitle>
                            <CardText>
                                Youtube Api Project built with react and youtube api
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/react-myportfolio" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/react-myportfolio" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>
                    
                        {/* YouTube API App */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', backgroundImage: 'url("https://i.pinimg.com/originals/00/6f/fd/006ffd872df01f4e422965806dbc6a5d.png")', backgroundSize: 'cover'}}>YouTube API Project</CardTitle>
                            <CardText>
                                Youtube Api Project built with react and youtube api
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/youtube-app" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/youtube-app" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* React Reminder App */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/01/18/15/07/temporal-distance-1990035__480.jpg")', backgroundSize: 'cover'}}>Task Reminder App</CardTitle>
                            <CardText>
                                Reminder app for tasks with deadlines and notices
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/reminderApp" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/reminderApp" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>

                        {/* Photo Finder */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/10/21/13/01/pixabay-1757980__480.jpg")', backgroundSize: 'cover'}}>Image Finder App</CardTitle>
                            <CardText>
                                Reminder app for tasks with deadlines and notices
                            </CardText>
                            <CardActions border>
                                <Button colored><a href="https://github.com/ztrabzada1988/photo-search" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>GitHub</a></Button>
                                <Button colored><a href="https://ztrabzada1988.github.io/photo-search" target="blank" style={{ textDecoration: 'none', color: 'blue' }}>LiveDemo</a></Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className="projects-grid">
                        {/* Photo Finder */}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/10/21/13/01/pixabay-1757980__480.jpg")', backgroundSize: 'cover'}}>Image Finder App</CardTitle>
                            <CardText>
                                Reminder app for tasks with deadlines and notices
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
                    
                    {/* Photo Finder */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/10/21/13/01/pixabay-1757980__480.jpg")', backgroundSize: 'cover'}}>Image Finder App</CardTitle>
                        <CardText>
                            Reminder app for tasks with deadlines and notices
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
                <Card shadow={5} style={{minWidth: '45'}}>
                    <h4>React JS Projects</h4>
                </Card>
            )
        }
    }

    render() {
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{color: '#2bd49e'}}>React</Tab>
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