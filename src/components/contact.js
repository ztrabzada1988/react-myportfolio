import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Zubair Trabzada</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I am passionate and highly skilled sales engineer & web developer
              with strong technical background and communication skills. I am
              very passionate about software engineering, artificial
              intelligence and machine learning. I have experience with
              customer-facing roles, presentations, product demos, marketing,
              and other in-demand skills. I have experience in full stack web
              development programming languages such as SQL, Javascript, HTML,
              CSS, React JS, Node JS, APIs, and etc.
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (510) 709-6913
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    zubair.trabzada@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-globe" aria-hidden="true" />
                    Website: ztrabzada.cf
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
