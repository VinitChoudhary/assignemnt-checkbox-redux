import './App.css';
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import DataCard from './DataCard';
import { connect } from 'react-redux';
import DisplayCard from './DisplayCard';

const Headers = ['Karnataka', 'Gujarat'];

const Card1Data = [
  { id: 1, name: 'All', checked: false },
  { id: 2, name: 'Bangalore', checked: false },
  { id: 3, name: 'Mysore', checked: false },
];

const Card2Data = [
  { id: 1, name: 'All', checked: false },
  { id: 2, name: 'Kutch', checked: false },
  { id: 3, name: 'Rajkot', checked: false },
];

class App extends Component {
  render() {
    const { data, firstCardData, secondCardData, dispatch } = this.props;
    dispatch({ type: 'DATA', payload: data !== undefined ? data : Headers });
    dispatch({ type: 'FIRST_CARD_DATA', payload: firstCardData !== undefined ? firstCardData : Card1Data });
    dispatch({ type: 'SECOND_CARD_DATA', payload: secondCardData !== undefined ? secondCardData : Card2Data });
    return (
      <>
        <Grid container alignItems='center' direction='row' alignContent='center' style={{ boxSizing: 'border-box', backgroundColor: '#5b7deacc', padding: 15 }}>
          <Grid items xl={6} md={6} sm={6} xs={6}>
            <DataCard />
          </Grid>
          <Grid items xl={6} md={6} sm={6} xs={6}>
            <DisplayCard />
          </Grid>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    firstCardData: state.firstCardData,
    secondCardData: state.secondCardData,
  };
};

export default connect(mapStateToProps)(App);
