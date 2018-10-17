import * as Actions from './actions';

const defaultTime = [15, 0];

const initialState = {
  type: Actions.STOP,
  currentGap: defaultTime[0],
  currentTime: defaultTime[1]
}

const timeChangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.STOP:
      if(action.value === Actions.GAP) {
        return {...state,
          currentGap: (state.currentGap + action.addGap) < 0 ? 0 : state.currentGap + action.addGap
        };
      } else if(action.value === Actions.TIME) {
        return {...state,
          currentTime: (state.currentTime + action.timeGap) > 86400 ? 0 + (86400 - (state.currentTime + action.timeGap)) : ((state.currentTime + action.timeGap) < 0 ? 86400 + (state.currentTime + action.timeGap) : state.currentTime + action.timeGap)
        };
      } return;
    default: return state;
  }
}

export default timeChangeReducer;
