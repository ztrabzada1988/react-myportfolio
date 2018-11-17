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
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Hello I am project one. I do cool things
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'rgb(88, 235, 149)'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Hello I am project one. I do cool things
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'rgb(88, 235, 149)'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Hello I am project one. I do cool things
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'rgb(88, 235, 149)'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/* Project 4 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'rgb(88, 235, 149)', height: '200px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Hello I am project one. I do cool things
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: 'rgb(88, 235, 149)'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{minWidth: '45'}}>
                    <h4>Javascript</h4>
                </Card>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{minWidth: '45'}}>
                    <h4>React JS Projects</h4>
                </Card>
            )
        } else if(this.state.activeTab === 3) {
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
                    <Tab style={{color: '#2bd49e'}}>Javascript</Tab>
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