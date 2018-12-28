import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return (
      <div>
       <Grid>
           <Cell col={3}>
            <p>{this.props.startYear} - {this.props.endYear}</p>     
           </Cell>
           
           <Cell col={9}>
            <h5 style={{marginTop: '0px'}}>{this.props.jobName}</h5>
            <p>{this.props.jobDescription}</p>
           </Cell>
       </Grid>
      </div>
    );
  }
}

export default Experience;