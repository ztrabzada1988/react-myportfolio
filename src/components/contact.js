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
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>I am extremely passionate about programming. I love coding in Javascript and using the React library. I also very passionate about the Blockchain technology. On my spare time I like to research on Blockchain and improve my coding skills. I love basketball and play 2-3 times a week to keep a healthy lifestyle. I am firm believer in having a balanced life. One must work on their mind and body equally to have a better lifestyle at work and home.</p>
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