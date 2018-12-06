import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <div>
       <Grid>
           <Cell col={4}>
            <p style={{ marginTop: '10px' }}>{this.props.schoolName}</p>     
           </Cell>
           
           <Cell col={8}>
            <h5 style={{marginTop: '10px', fontSize: '18px'}}>{this.props.major}</h5>
            <p>{this.props.schoolDescription}</p>
           </Cell>
       </Grid>
      </div>
    );
  }
}

export default Education;