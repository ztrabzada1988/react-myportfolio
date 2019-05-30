import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("../img/code-cutout.png")}
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Sales & Solutions Engineer</h1>

              <hr />

              <p>
                Sales | Customer Success | HTML | CSS | Javascript | React |
                NodeJS | Express | WordPress | SQL
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/zubair-trabzada"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ztrabzada1988"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Medium */}
                <a
                  href="https://medium.com/@cryptonia"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-medium" aria-hidden="true" />
                </a>

                {/* Medium */}
                <a
                  href="mailto:zubair.trabzada@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
