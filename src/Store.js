import { createStore } from 'redux';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DATA':
      return { ...state, data: action.payload };
    case 'FIRST_CARD_DATA':
      return { ...state, firstCardData: action.payload };
    case 'SECOND_CARD_DATA':
      return { ...state, secondCardData: action.payload };
    default:
      return state;
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('task');
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('task', serializedState);
  } catch (err) {
    console.log(err);
  }
};

const store = createStore(appReducer, loadState());
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
