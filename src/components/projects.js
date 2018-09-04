import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategorries() {
        if(this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{minWidth: '45'}}>

                </Card>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>This is Javascript</h1></div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        } else if(this.state.activeTab === 3) {
            return (
                <div><h1>This is JQuery</h1></div>
            )
        }
    }

    
    render() {
        return (
            <div className="catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>JQuery</Tab>
                    <Tab>Express</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell>
                            <div className="content">{this.toggleCategorries()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;