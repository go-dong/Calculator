import * as Actions from './action/actions';

export const defaultTime = [15, 86400];

export const initialState = {
  type: Actions.STOP,
  currentGap: defaultTime[0],
  currentTime: defaultTime[1]
}
