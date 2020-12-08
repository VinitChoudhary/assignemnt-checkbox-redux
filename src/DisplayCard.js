import React, { Component } from 'react';
import { connect } from 'react-redux';
import Close from '@material-ui/icons/Close';
import { Grid, Typography, IconButton } from '@material-ui/core';

class DisplayCard extends Component {
  onFirstCardChange = async (event, id) => {
    const { firstCardData, dispatch } = this.props;
    const updatedData = firstCardData.map((item) => {
      if (item.id === id) {
        return { ...item, checked: event.target.checked };
      }
      return item;
    });
    const finalData = updatedData.map((item) => {
      if (item.name === 'All') {
        return { ...item, checked: false };
      }
      return item;
    });
    await dispatch({ type: 'FIRST_CARD_DATA', payload: finalData });
  };

  onSecondCardChange = async (event, id, name) => {
    const { secondCardData, dispatch } = this.props;
    const updatedData = secondCardData.map((item) => {
      if (item.id === id) {
        return { ...item, checked: event.target.checked };
      }
      return item;
    });
    const finalData = updatedData.map((item) => {
      if (item.name === 'All') {
        return { ...item, checked: false };
      }
      return item;
    });
    await dispatch({ type: 'SECOND_CARD_DATA', payload: finalData });
  };

  render() {
    const { data, firstCardData, secondCardData } = this.props;
    const isFirstChecked = (item) => item.checked === true && item.name !== 'All';
    const isFirstData = firstCardData.some(isFirstChecked);
    const firstDisplay = firstCardData.filter((item) => item.checked && item.name !== 'All');

    const isSecondChecked = (item) => item.checked === true && item.name !== 'All';
    const isSecondData = secondCardData.some(isSecondChecked);
    const secondDisplay = secondCardData.filter((item) => item.checked && item.name !== 'All');

    const isData = !isFirstData && !isSecondData;
    return (
      <>
        <div style={{ boxSizing: 'border-box', paddingLeft: 15, border: '1px solid black', borderRadius: 5, height: '500px', backgroundColor: 'white' }}>
          {isFirstData && <div style={{ marginTop: 15 }}>{data[0]}</div>}
          <Grid container spacing={0}>
            {isFirstData &&
              firstDisplay.map((data, index) => (
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    width: '1.25em; height: 1.25em',
                    border: '2px solid #ccc',
                    background: '#fff',
                    borderRadius: '4px',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)',
                    marginRight: 10,
                    marginTop: 11,
                  }}
                >
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Typography component='p' variant='body1' style={{ margin: 10, marginLeft: 10 }}>
                      {data.name}
                    </Typography>
                    <IconButton style={{ position: 'absolute', right: '20px' }} onClick={(e) => this.onFirstCardChange(e, data.id, data.name)}>
                      <Close />
                    </IconButton>
                  </div>
                </Grid>
              ))}
          </Grid>

          {isSecondData && <div style={{ marginTop: 15 }}>{data[1]}</div>}
          <Grid container spacing={0}>
            {isSecondData &&
              secondDisplay.map((data, index) => (
                <Grid
                  item
                  sm={12}
                  xs={12}
                  style={{
                    width: '1.25em; height: 1.25em',
                    border: '2px solid #ccc',
                    background: '#fff',
                    borderRadius: '4px',
                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)',
                    marginRight: 10,
                    marginTop: 11,
                  }}
                >
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <Typography component='p' variant='body1' style={{ margin: 10, marginLeft: 10 }}>
                      {data.name}
                    </Typography>
                    <IconButton style={{ position: 'absolute', right: '20px' }} onClick={(e) => this.onSecondCardChange(e, data.id, data.name)}>
                      <Close />
                    </IconButton>
                  </div>
                </Grid>
              ))}
          </Grid>
          {isData && (
            <div style={{ textAlign: 'center' }}>
              <p>No Values Selected</p>
            </div>
          )}
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

export default connect(mapStateToProps)(DisplayCard);
