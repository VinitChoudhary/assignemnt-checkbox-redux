import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Checkbox, Typography } from '@material-ui/core';

class DataCard extends Component {
  onFirstCardChange = async (event, id, name) => {
    const { firstCardData, dispatch } = this.props;
    const updatedData = firstCardData.map((item) => {
      if (item.id === id) {
        return { ...item, checked: event.target.checked };
      }
      return item;
    });
    await dispatch({ type: 'FIRST_CARD_DATA', payload: updatedData });
  };

  onSecondCardChange = async (event, id, name) => {
    const { secondCardData, dispatch } = this.props;
    const updatedData = secondCardData.map((item) => {
      if (item.id === id) {
        return { ...item, checked: event.target.checked };
      }
      return item;
    });
    await dispatch({ type: 'SECOND_CARD_DATA', payload: updatedData });
  };

  render() {
    const { data, firstCardData, secondCardData } = this.props;
    return (
      <>
        <div style={{ boxSizing: 'border-box', paddingLeft: 15, border: '1px solid black', borderRadius: 5, height: '500px', backgroundColor: 'white' }}>
          <div style={{ marginTop: 15 }}>{data[0]}</div>
          <Grid container spacing={0}>
            {firstCardData.map((data, index) => (
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Checkbox name={data.name} checked={data.checked} onChange={(e) => this.onFirstCardChange(e, data.id, data.name)} />
                  <Typography component='p' variant='body1' style={{ marginTop: 9 }}>
                    {data.name}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>

          <div style={{ marginTop: 15 }}>{data[1]}</div>
          <Grid container spacing={0}>
            {secondCardData.map((data, index) => (
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Checkbox name={data.name} checked={data.checked} onChange={(e) => this.onSecondCardChange(e, data.id, data.name)} />
                  <Typography component='p' variant='body1' style={{ marginTop: 9 }}>
                    {data.name}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
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

export default connect(mapStateToProps)(DataCard);
