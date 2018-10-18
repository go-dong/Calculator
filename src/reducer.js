import * as Actions from './actions';
import * as Defaults from './defaults';

const timeChangeReducer = (state = Defaults.initialState, action) => {
  switch (action.type) {
    case Actions.STOP:
      if(action.value === Actions.GAP) {
        return {...state,
          currentGap: (state.currentGap + action.addGap) < 0 ? 0 : state.currentGap + action.addGap
        };
      } else if(action.value === Actions.TIME) {
        return {...state,
          currentTime: ((state.currentTime + action.timeGap) > 86400) ? 0 + ((state.currentTime + action.timeGap) - 86400) : ((state.currentTime + action.timeGap) < 0 ? (86400 + (state.currentTime + action.timeGap)) : (state.currentTime + action.timeGap))
        };
      } return state;
    case Actions.COUNT: return {...state, currentTime: (action.curTime < 1 ? 86400 : (action.curTime - 1))};
    default: return state;
  }
}

export default timeChangeReducer;
