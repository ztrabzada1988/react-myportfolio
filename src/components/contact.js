import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Zubair Trabzada</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                             alt="avatar" 
                             style={{height: "250px"}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Hello i am zubair i like to code and love to do Blockchain and study and enjoy life and play sports. Hello i am zubair i like to code and love to do Blockchain and study and enjoy life and play sports. Hello i am zubair i like to code and love to do Blockchain and study and enjoy life and play sports</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (510) 709-6813
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true" />
                                        zubair.trabzada@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton', color: 'white' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        SkypeID: Zubair
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;